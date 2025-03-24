import 'package:CM_api/api.dart';
import 'package:cm_app/Screens/Cows/Components/CowListItem.dart';
import 'package:cm_app/Shared/CustomSearchBar.dart';
import 'package:cm_app/Shared/TopAppBar.dart';
import 'package:cm_app/app_context.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class CowsPage extends StatefulWidget {
  const CowsPage({super.key});

  @override
  State<CowsPage> createState() => _CowsPageState();
}

class _CowsPageState extends State<CowsPage> {

  List<CowDto>? cowsList = [];
  List<CowDto>? filteredCowsList = [];
  ValueNotifier<String> search = ValueNotifier<String>('');

  void _onSearch(String data){
    search.value = data != '' ? data : '';
  }

  @override
  void dispose(){
    search.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final appContext = Provider.of<AppContext>(context);
    ScrollController _scrollController = ScrollController();

    void onSelect(CowDto cow) async{
      return;
    }

    Future<List<CowDto>?> GetCows() async{
      List<CowDto>? cows = await appContext!.clientApi.cowApi!.apiCowGet();
      cowsList = cows;
    }

    // Beginning of display logic

    if(appContext.getCows() != null){
      cowsList = appContext.getCows();
      filteredCowsList = [...cowsList!];
    }
    else{
      GetCows();
      appContext.setCow(cowsList);
      filteredCowsList = [...cowsList!];
    }

    search.addListener((){
      filteredCowsList = [...cowsList!];
      if (filteredCowsList!.isNotEmpty){
        filteredCowsList!.retainWhere((element){
          return (element.identifier!.toLowerCase().contains(search.value.toLowerCase()))
              || (element.name!.toLowerCase().contains(search.value.toLowerCase()));
        });
      }
    });

    return Scaffold(
      appBar: const TopAppBar(),
      body: Column(
        children: [
          Row(
            children: [
              Expanded(
                  child: Padding(
                    padding: const EdgeInsets.all(5.0),
                    child: CustomSearchBar(onSearch: _onSearch),
                  )),
              Container(
                padding: const EdgeInsets.all(5.0),
                margin: const EdgeInsets.only(right: 20.0),
                child: ElevatedButton(
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.grey
                  ),
                   onPressed: () => {},
                    child: const Icon(Icons.refresh))
              )
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
                              onSelect : onSelect),
                            itemBuilder: (context, index){
                              return CowListItem(cow: filteredCowsList![index], onSelect: onSelect);
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
