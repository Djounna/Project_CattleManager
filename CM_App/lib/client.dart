import 'package:CM_api/api.dart';

class Client{
  ApiClient? _apiClient;
  ApiClient? get apiClient => _apiClient;
  CowApi? _cowApi;
  CowApi? get cowApi => _cowApi;
  MilkingApi? _milkingApi;
  MilkingApi? get milkingApi => _milkingApi;
  JobApi? _jobApi;
  JobApi? get jobApi => _jobApi;
  AlertApi? _alertApi;
  AlertApi? get alertApi => _alertApi;

  Client(String path){
    _apiClient = ApiClient(basePath: path);
    _cowApi = CowApi(_apiClient);
    _jobApi = JobApi(_apiClient);
    _milkingApi = MilkingApi(_apiClient);
    _alertApi = AlertApi(_apiClient);
  }
}

