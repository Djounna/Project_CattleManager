import 'package:CM_api/api.dart';
import 'package:cm_app/Screens/Cows/Components/CowDetailsDialog.dart';
import 'package:cm_app/Screens/Cows/Components/CowListItem.dart';
import 'package:cm_app/Shared/CustomSearchBar.dart';
import 'package:cm_app/Shared/TopAppBar.dart';
import 'package:cm_app/app_context.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../Shared/Dialog/Loading_Dialog.dart';
import '../../Shared/DrawerContent.dart';
import 'Components/CreateCowAlertDialog.dart';

class CowsPage extends StatefulWidget {
  const CowsPage({super.key});

  @override
  State<CowsPage> createState() => _CowsPageState();
}

class _CowsPageState extends State<CowsPage> {

  List<CowDto>? cowsList = [];
  List<CowDto>? filteredCowsList = [];
  CowDetailsDto? selectedCow;
  ValueNotifier<String> search = ValueNotifier<String>('');

  void _onSearch(String data){
    search.value = data != '' ? data : '';
  }

  //@override
  //void initState(){
  //  super.initState();
  //}

  @override
  void dispose(){
    search.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final appContext = Provider.of<AppContext>(context);
    ScrollController _scrollController = ScrollController();

    void GetCows() async{
      try{
        List<CowDto>? cows = await appContext.clientApi.cowApi!.apiCowGet();
        cowsList = cows;
        appContext.setCows(cowsList);
      }
      catch(e){
        ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(
                content: Text(e.toString()),
                duration: const Duration(seconds :3)
            )
        );
      }
    }

    void GetSelectedCowDetails(int id) async {
      showDialog(
          barrierDismissible: false,
          context: context,
          builder: (_) {
            return const LoadingDialog(text: 'Chargement');
          });

      try{
        CowDetailsDto? result = await appContext.clientApi.cowApi!.apiCowIdDetailsGet(id);
        selectedCow = result;
        appContext.setSelectedCow(result);
        Navigator.of(context).pop();
      }
      catch(e){
        ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(
                content: Text(e.toString()),
                duration: const Duration(seconds :3)
            )
        );
        Navigator.of(context).pop();
      }
    }

    void onSelect(CowDto cow) async{
      showDialog(
          barrierDismissible: false,
          context: context,
          builder: (_) {
            return const LoadingDialog(text: 'Chargement');
          });

      try {
        CowDetailsDto? result = await appContext.clientApi.cowApi!
            .apiCowIdDetailsGet(cow.id!);
        selectedCow = result;
        appContext.setSelectedCow(result);
        if (appContext.getSelectedCow() != null) {
          Navigator.of(context).pop();
          showDialog(
              barrierDismissible: true,
              context: context,
              builder: (_) {
                return CowDetailsDialog(
                    cowDetails: appContext.getSelectedCow());
              }
          );
        }
      }
      catch(e){
        Navigator.of(context).pop();
        ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(
                content: Text(e.toString()),
                duration: const Duration(seconds :3)
            )
        );
      }
    }

    void CreateAlert(CowDto cow){
      showDialog(
          barrierDismissible: true,
          context: context,
          builder: (_) {
            //return CowDetailsDialog(cowDetails: selectedCow);
            return CreateCowAlertDialog(
                cow: cow);
          }
      );
    }

    // Beginning of display logic

    if(appContext.getCows() != null){
      setState(() {
        cowsList = appContext.getCows();
        filteredCowsList = [...cowsList!];
      });
    }
    //else{
      //GetCows();
    //}

    search.addListener((){
      filteredCowsList = [...cowsList!];
      if (filteredCowsList!.isNotEmpty){
        filteredCowsList!.retainWhere((element){
          return (element.identifier != null && element.identifier!.toLowerCase().contains(search.value.toLowerCase()))
              || (element.name != null && element.name!.toLowerCase().contains(search.value.toLowerCase()));
        });
      }
    });

    return Scaffold(
      appBar: const TopAppBar(),
      drawer: const DrawerContent(),
      body: Column(
        children: [
          Row(
            children: [
              Expanded(
                  child: Padding(
                    padding: const EdgeInsets.all(5.0),
                    child: CustomSearchBar(onSearch: _onSearch),
                  )),
            ],
          ),
          Expanded(
            child :(
              Padding(
                padding: const EdgeInsets.all(5.0),
                child :
                  ValueListenableBuilder(
                      valueListenable: search,
                      builder: (_, search, __){
                        return filteredCowsList!.isEmpty ? const Text('Aucun résultat') : Scrollbar(
                          controller: _scrollController,
                          thumbVisibility : true,
                          child: ListView.builder(
                            controller: _scrollController,
                            shrinkWrap: true,
                            itemCount: filteredCowsList!.length,
                            prototypeItem: CowListItem(
                              cow: filteredCowsList!.first,
                              onSelect : onSelect,
                              createAlert: CreateAlert,
                            ),
                            itemBuilder: (context, index){
                              return CowListItem(
                                  cow: filteredCowsList![index],
                                  onSelect: onSelect,
                                  createAlert:  CreateAlert,
                              );
                            },
                          ),
                        );
                      }
                  )
              )
            )
          )
        ],
      )
    );
  }
}
