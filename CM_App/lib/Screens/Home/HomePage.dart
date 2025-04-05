import 'package:auth0_flutter/auth0_flutter.dart';
import 'package:cm_app/Screens/Cows/CowsPage.dart';
import 'package:cm_app/Shared/DrawerContent.dart';
import 'package:cm_app/Shared/TopAppBar.dart';
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

    return Scaffold(
      appBar: const TopAppBar(),
      drawer: const DrawerContent(),
      body:
      ElevatedButton(
          onPressed:() async {
            final credentials =
                await auth0.webAuthentication(scheme:"cm").login(useHTTPS: true);

            //setState(() {

              _credentials = credentials;
              appContext.setCredentials(_credentials!);
              if (_credentials!.accessToken != null){
                appContext.clientApi.apiClient?.addDefaultHeader(
                    'authorization',
                    'Bearer ${_credentials!.accessToken}');

                Navigator.of(context).pushAndRemoveUntil(
                    MaterialPageRoute(
                        builder: (context) => const CowsPage()),
                    ModalRoute.withName('cows')
                );
              }

            //});
          },
          child: const Text("Log in")
      )
    );
  }
}
