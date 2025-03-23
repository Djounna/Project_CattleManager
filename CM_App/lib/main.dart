import 'package:cm_app/app_context.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

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
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.lightGreenAccent),
      ),
      home: const HomePage(title: 'Cattle Manager'),
      routes:{
        '/cows' : (context) => const Page(),
        '/jobs' : (context) => const Page(),
        'milkings': (context) => const Page();
      }
    )
   );
  }
}