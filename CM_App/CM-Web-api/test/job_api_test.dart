import 'package:test/test.dart';
import 'package:CM_api/CM_api.dart';

/// tests for JobApi
void main() {
  final instance = CMApi().getJobApi();

  group(JobApi, () {
    //Future apiJobDelete({ int id }) async
    test('test apiJobDelete', () async {
      // TODO
    });

    //Future<BuiltList<JobDetailsDto>> apiJobDetailsGet() async
    test('test apiJobDetailsGet', () async {
      // TODO
    });

    //Future<BuiltList<JobDto>> apiJobGet() async
    test('test apiJobGet', () async {
      // TODO
    });

    //Future<JobDto> apiJobIdGet(int id) async
    test('test apiJobIdGet', () async {
      // TODO
    });

    //Future<JobDto> apiJobPost({ JobDto jobDto }) async
    test('test apiJobPost', () async {
      // TODO
    });

    //Future<JobDto> apiJobPut({ JobDto jobDto }) async
    test('test apiJobPut', () async {
      // TODO
    });
  });
}
