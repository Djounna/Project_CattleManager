import 'package:CM_api/api.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../Shared/CustomSearchBar.dart';
import '../../Shared/DrawerContent.dart';
import '../../Shared/TopAppBar.dart';
import '../../app_context.dart';
import 'package:cm_app/Screens/Jobs/Components/UpdateJobDialog.dart';

import 'Components/JobListItem.dart';

class JobsPage extends StatefulWidget {
  const JobsPage({super.key});

  @override
  State<JobsPage> createState() => _JobsPageState();
}

class _JobsPageState extends State<JobsPage> {

  List<JobDto>? jobsList = [];
  List<JobDto>? filteredJobsList = [];
  JobDetailsDto? selectedJob;
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

    void onSelect(JobDto job) async {
      appContext.setSelectedJob(job);
      if (appContext.getSelectedJob() != null) {
        showDialog(
            barrierDismissible: false,
            context: context,
            builder: (_) {
              //return CowDetailsDialog(cowDetails: selectedCow);
              return UpdateJobDialog(
                  job: appContext.getSelectedCow());
            }
        );
      }
    }

    // Beginning of logic
    if(appContext.getJobs() != null){
      setState(() {
        jobsList = appContext.getJobs();
        filteredJobsList = [...jobsList!];
      });
    }

    search.addListener((){
      filteredJobsList = [...jobsList!];
      if (filteredJobsList!.isNotEmpty){
        filteredJobsList!.retainWhere((element){
          return (element.title != null && element.title!.toLowerCase().contains(search.value.toLowerCase()))
              || (element.description != null && element.description!.toLowerCase().contains(search.value.toLowerCase()));
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
                              return filteredJobsList!.isEmpty ? const Text('Aucun résultat') : Scrollbar(
                                controller: _scrollController,
                                thumbVisibility : true,
                                child: ListView.builder(
                                  controller: _scrollController,
                                  shrinkWrap: true,
                                  itemCount: filteredJobsList!.length,
                                  prototypeItem: JobListItem(
                                      job: filteredJobsList!.first,
                                      onSelect : onSelect),
                                  itemBuilder: (context, index){
                                    return JobListItem(job: filteredJobsList![index], onSelect: onSelect); },
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
  }
}
