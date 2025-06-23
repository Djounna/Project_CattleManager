import 'package:cm_app/Screens/Cows/CowsPage.dart';
import 'package:flutter/material.dart';

import '../Screens/Jobs/JobsPage.dart';

class DrawerContent extends StatelessWidget {
  const DrawerContent({super.key});

  @override
  Widget build(BuildContext context) {
    return Drawer(
      child:
      ListView(
        padding: EdgeInsets.zero,
        children: [
          const DrawerHeader(
            decoration: BoxDecoration(
                color: Colors.lightGreen,
            ),
            child: Text('Cattle Manager'),
          ),
          ListTile(
            title: const Text('Tâches'),
            onTap: () {
              Navigator.of(context).pushAndRemoveUntil(
                  MaterialPageRoute(
                      builder: (context) => const JobsPage()),
                  ModalRoute.withName('home'));
            },
          ),
          ListTile(
            title: const Text('Bétail'),
            onTap: () {
              Navigator.of(context).pushAndRemoveUntil(
                  MaterialPageRoute(
                      builder: (context) => const CowsPage()),
                  ModalRoute.withName('home'));
            },
          ),
          //ListTile(
            //title: const Text('Traites'),
           // onTap: () {
              // Update the state of the app.
              // ...
          //    Navigator.pop(context);
          // },
          //),
        ],
      ),
    );
  }
}
