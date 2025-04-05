import 'package:cm_app/Screens/Cows/CowsPage.dart';
import 'package:flutter/material.dart';

class DrawerContent extends StatelessWidget {
  const DrawerContent({super.key});

  @override
  Widget build(BuildContext context) {
    return Drawer(
      child:
      ListView(
        // Important: Remove any padding from the ListView.
        padding: EdgeInsets.zero,
        children: [
          const DrawerHeader(
            decoration: BoxDecoration(color: Colors.lightGreen),
            child: Text('Cattle Manager'),
          ),
          ListTile(
            title: const Text('Tâches'),
            onTap: () {
              // Update the state of the app.
              // ...
              //Navigator.pop(context);
            },
          ),
          ListTile(
            title: const Text('Bétail'),
            onTap: () {
              // Update the state of the app.
              // ...
              Navigator.of(context).pushAndRemoveUntil(
                  MaterialPageRoute(
                      builder: (context) => const CowsPage()),
                  ModalRoute.withName('cows'));
            },
          ),
          ListTile(
            title: const Text('Traites'),
            onTap: () {
              // Update the state of the app.
              // ...
              Navigator.pop(context);
            },
          ),
        ],
      ),
    );
  }
}
