import 'package:cm_app/Screens/Cows/CowsPage.dart';
import 'package:cm_app/Screens/Dashboard/Dashboard.dart';
import 'package:cm_app/Screens/Jobs/JobsPage.dart';
import 'package:cm_app/Screens/Home/HomePage.dart';
import 'package:cm_app/Screens/Milkings/MilkingsPage.dart';
import 'package:cm_app/app_context.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import 'Shared/CMTheme.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
   return ChangeNotifierProvider<AppContext>(
     create: (_) => AppContext(),
     child: MaterialApp(
      title: 'Cattle Manager',
      theme: CMTheme.theme,
      /*ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.lightGreenAccent),
      ),*/
      home: const HomePage(),
      routes:{
        '/dashboard' : (context) => const DashboardPage(),
        '/cows' : (context) => const CowsPage(),
        '/jobs' : (context) => const JobsPage(),
        //'/milkings': (context) => const MilkingsPage()
      }
    )
   );
  }
}