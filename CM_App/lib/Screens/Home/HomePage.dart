import 'package:CM_api/api.dart';
import 'package:auth0_flutter/auth0_flutter.dart';
import 'package:cm_app/Screens/Cows/CowsPage.dart';
import 'package:cm_app/app_context.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  Credentials? _credentials;

  late Auth0 auth0;

  @override
  void initState(){
    super.initState();
    auth0 = Auth0('dev-c6lwemo7.us.auth0.com', 'ct5IfXv1zC19Ae5WmGJTD0G31PY7EPJ7');
  }

  @override
  Widget build(BuildContext context) {
    final appContext = Provider.of<AppContext>(context);

    Future<void> GetCows() async{
      try{
        List<CowDto>? cows = await appContext.clientApi.cowApi!.apiCowGet();
        appContext.setCows(cows);
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

    Future<void> GetWorkerJobs() async{
      try{
        DateTime now = DateTime.now();
        String dateOnly = now.toIso8601String().split('T').first;
        List<JobDetailsDto>? workerJobs = await appContext.clientApi.jobApi!.apiJobDetailsUserAuthDateGet(_credentials!.user.sub, dateOnly);
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

    return Scaffold(
      body:
      Center(
        child: ElevatedButton(
            onPressed:() async {
              final credentials =
              await auth0.webAuthentication(scheme:"cm").login(useHTTPS: true);

              _credentials = credentials;
              appContext.setCredentials(_credentials!);
              if (_credentials!.accessToken != null){

                appContext.clientApi.apiClient?.addDefaultHeader(
                    'authorization',
                    'Bearer ${_credentials!.accessToken}'
                );

                await GetCows();
                await GetWorkerJobs();

                Navigator.of(context).pushAndRemoveUntil(
                    MaterialPageRoute(
                        builder: (context) => const CowsPage()),
                    ModalRoute.withName('cows')
                );
              }
            },
            child: const Text("Log in")
        ),
      )
    );
  }
}
