import 'package:CM_api/api.dart';
import 'package:auth0_flutter/auth0_flutter.dart';
import 'package:cm_app/client.dart';
import 'package:flutter/cupertino.dart';

class AppContext with ChangeNotifier{

  //Client clientApi = Client("https://localhost:7276");
  Client clientApi = Client("http://10.0.2.2:5139");
  //Client clientApi = Client("http://192.168.1.8:5139");
  Credentials? _credentials;
  List<CowDto>? _cows;
  List<JobDto>? _jobs;
  List<MilkingDto>? _milkings;

  AppContext();

  getCredentials() => _credentials;
  setCredentials(Credentials credentials){
    _credentials = credentials;
  }

  getCows() => _cows;
  setCows(List<CowDto>? cows){
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
    setCows(null);
    setMilkings(null);
    setJobs(null);
  }
}