import 'package:CM_api/CM_api.dart';
import 'package:cm_app/client.dart';
import 'package:flutter/cupertino.dart';

class AppContext with ChangeNotifier{

  Client clientApi = Client();

  List<CowDto>? _cows;
  List<JobDto>? _jobs;
  List<MilkingDto>? _milkings;

  AppContext();

  getCows() => _cows;
  setCow(List<CowDto>? cows){
    _cows = cows;
  }

  getJobs() => _jobs;
  setJobs(List<JobDto>? jobs){
    _jobs = jobs;
  }

  getMilkings() => _milkings;
  setMilkings(List<MilkingDto>? milkings){
    _milkings = milkings;
  }

  logout(){
    setCow(null);
    setMilkings(null);
    setJobs(null);
  }
}