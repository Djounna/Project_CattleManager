import 'package:auth0_flutter/auth0_flutter.dart';
import 'package:cm_app/Screens/Home/HomePage.dart';
import 'package:cm_app/app_context.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'CMTheme.dart';

class TopAppBar extends StatelessWidget implements PreferredSizeWidget {
  TopAppBar({super.key, required this.title, });

  final String title;

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
        //title: const Text("Cattle Manager"),
        title: Row(
          children: [
            Container(
              width: 32,
              height: 32,
              decoration: BoxDecoration(
                color: CMTheme.primaryGreen,
                borderRadius: BorderRadius.circular(8),
              ),
              child: const Icon(
                Icons.dashboard,
                color: Colors.white,
                size: 20,
              ),
            ),
            const SizedBox(width: 12),
            Text(title),
          ],
        ),
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
