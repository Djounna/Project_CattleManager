import 'package:CM_api/api.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../Shared/CMTheme.dart';
import '../../Shared/CustomSearchBar.dart';
import '../../Shared/Dialog/Loading_Dialog.dart';
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

  List<JobDetailsDto>? jobsList = [];
  List<JobDetailsDto>? filteredJobsList = [];
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

    Future<void> GetWorkerJobs() async{
      try{
        DateTime now = DateTime.now();
        String dateOnly = now.toIso8601String().split('T').first;
        List<JobDetailsDto>? workerJobs = await appContext.clientApi.jobApi!.apiJobDetailsUserAuthDateGet(appContext.getCredentials()!.user.sub, dateOnly);
        //List<JobDetailsDto>? workerJobs = await appContext.clientApi.jobApi!.apiJobDetailsUserAuthDateGet2(dateOnly);
        appContext.setWorkerJobs(workerJobs);
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

    Future<void> _refreshJobs() async {
      await GetWorkerJobs(); // Your existing method

      setState(() {
        jobsList = appContext.getWorkerJobs();
        filteredJobsList = [...jobsList!];
      });
    }

    void _updateJob(JobDto jobToUpdate) async{
      showDialog(
          barrierDismissible: false,
          context: context,
          builder: (_) {
            return const LoadingDialog(text: 'Chargement');
          });

      try {

        await appContext.clientApi.jobApi!.apiJobPut(jobDto: jobToUpdate);
        ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(
                content: Text("La tâche a été modifiée avec succès"),
                duration: const Duration(seconds :3)
            )
        );

        Navigator.of(context).pop();
        setState(() {
         _refreshJobs();
        });
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


    void onUpdateJob(JobDetailsDto job) async {
      appContext.setSelectedJob(job);
      if (appContext.getSelectedJob() != null) {
        showDialog(
            barrierDismissible: true,
            context: context,
            builder: (_) {
              return UpdateJobDialog(
                  onClose: _updateJob,
                  job: appContext.getSelectedJob());
            }
        );
      }
    }


    // Beginning of logic
    if(appContext.getWorkerJobs()!= null){
      setState(() {
        jobsList = appContext.getWorkerJobs();
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
        appBar: TopAppBar(title:'Tâches'),
        drawer: const DrawerContent(),
        body: Column(
          children: [
            Row(
              children: [
                Expanded(
                  child: Padding(
                    padding: const EdgeInsets.all(5.0),
                    child: CustomSearchBar(onSearch: _onSearch),
                  )
                ),
                Container(
                  padding: const EdgeInsets.all(5.0),
                  margin: const EdgeInsets.only(right: 20.0),
                  child: ElevatedButton(
                      onPressed: () => _refreshJobs(),
                      child: const Icon(Icons.refresh)
                  )
                )
              ],
            ),
            Expanded(
                child :(
                    Padding(
                        padding: const EdgeInsets.all(5.0),
                        child :
                        RefreshIndicator(
                          onRefresh: _refreshJobs,
                          color: CMTheme.primaryGreen,
                          child: ValueListenableBuilder(
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
                                        onSelect: onUpdateJob,

                                    ),
                                    itemBuilder: (context, index){
                                      return JobListItem(
                                          job: filteredJobsList![index],
                                          onSelect: onUpdateJob,
                                      );
                                    },
                                  ),
                                );
                              }
                          ),
                        )
                    )
                )
            )
          ],
        )
    );
  }
}
