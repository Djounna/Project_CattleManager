import 'package:auth0_flutter/auth0_flutter.dart';
import 'package:cm_app/Screens/Home/HomePage.dart';
import 'package:cm_app/app_context.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class TopAppBar extends StatelessWidget implements PreferredSizeWidget {
  const TopAppBar({super.key});

  @override
  Size get preferredSize => const Size.fromHeight(50);

  @override
  Widget build(BuildContext context) {
    AppContext appContext = Provider.of<AppContext>(context);

    late Auth0 auth0;

    void logout() async{
      auth0 = Auth0('dev-c6lwemo7.us.auth0.com', 'ct5IfXv1zC19Ae5WmGJTD0G31PY7EPJ7');
      await auth0.webAuthentication(scheme:"cm").logout();
      appContext.logout();
      Navigator.of(context).pushAndRemoveUntil(
          MaterialPageRoute(
              builder: (context) => const HomePage()),
          ModalRoute.withName('home')
      );
    }

    return AppBar(
        title: const Text("Cattle Manager"),
        actions: [
          IconButton(
              icon: const Icon(Icons.logout),
              onPressed: (){
                logout();
              }
          )
        ]
    );
  }
}
