import 'package:CM_api/api.dart';
import 'package:auth0_flutter/auth0_flutter.dart';
import 'package:cm_app/app_context.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../Dashboard/Dashboard.dart';

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

    /*
    Future<void> GetDailyMilkings() async{
      try{
        List<Milking>? pens = await appContext.clientApi.penApi!.apiPenGet();
        appContext.setPens(pens);
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
     */

    Future<void> GetPens() async{
      try{
        List<PenDto>? pens = await appContext.clientApi.penApi!.apiPenGet();
        appContext.setPens(pens);
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

    Future<void> GetGroups() async{
      try{
        List<GroupDto>? groups = await appContext.clientApi.groupApi!.apiGroupGet();
        appContext.setGroups(groups);
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

    // Check if URL is an ngrok URL
    bool _isNgrokUrl(String? url) {
      if(url == null){
        return false;
      }
      else{
        return url.contains('ngrok.io') ||
            url.contains('ngrok-free.app') ||
            url.contains('ngrok.app');
      }
    }

    // Add ngrok header if needed
    Map<String, String> _addNgrokHeaders(Map<String, String>? headers, String url) {
      final Map<String, String> finalHeaders = Map.from(headers ?? {});

      if (_isNgrokUrl(url)) {
        finalHeaders['ngrok-skip-browser-warning'] = 'true';
        print('Added ngrok header for URL: $url');
      }

      return finalHeaders;
    }


    return Scaffold(
      backgroundColor: Colors.white,
      body:
      Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            // Big title
            Text(
              'Cattle Manager',
              style: TextStyle(
                fontSize: 48,
                fontWeight: FontWeight.bold,
                color: Colors.green[800],
              ),
            ),
            SizedBox(height: 40),

            // Login button
            ElevatedButton(
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

                    if (_isNgrokUrl(appContext.clientApi.apiClient?.basePath)){
                      appContext.clientApi.apiClient?.addDefaultHeader(
                          'ngrok-skip-browser-warning',
                          'true'
                      );
                    }

                    await GetCows();
                    await GetWorkerJobs();
                    await GetPens();
                    await GetGroups();
                    //await GetDailyMilkings();

                    Navigator.of(context).pushAndRemoveUntil(
                        MaterialPageRoute(
                            builder: (context) => const DashboardPage()),
                        ModalRoute.withName('dashboard')
                    );
                  }
                },
                child: const Text("Se connecter")
            ),

            SizedBox(height: 40),

            // Image - replace 'assets/cattle_image.png' with your image path
            Image.asset(
              'lib/assets/icons/cow-head-sharp_icon.jpg',
              width: 200,
              height: 200,
              fit: BoxFit.contain,
            ),
          ],
        ),
      )
    );
  }
}
