import 'package:CM_api/CM_api.dart';
import 'package:cm_app/app_context.dart';
import 'package:flutter/material.dart';

class CowsPage extends StatefulWidget {
  const CowsPage({super.key});

  @override
  State<CowsPage> createState() => _CowsPageState();
}

class _CowsPageState extends State<CowsPage> {
  AppContext? appContext;

  Future<BuiltList<CowDto>?> GetCows() async{
    BuiltList<CowDto>? cows = await appContext!.clientApi.cowApi?.apiCowGet();
  }



  @override
  Widget build(BuildContext context) {
    return const Placeholder();
  }
}
