import 'package:CM_api/CM_api.dart';

class Client{
  CowApi? _cowApi;
  CowApi? get cowApi => _cowApi;
  MilkingApi? _milkingApi;
  MilkingApi? get milkingApi => _milkingApi;
  JobApi? _jobApi;
  JobApi? get jobApi => _jobApi;

  Client(){
  _cowApi = CMApi().getCowApi();
  _jobApi = CMApi().getJobApi();
  _milkingApi = CMApi().getMilkingApi();
  }
}

