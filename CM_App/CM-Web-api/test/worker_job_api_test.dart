import 'package:test/test.dart';
import 'package:CM_api/CM_api.dart';

/// tests for WorkerJobApi
void main() {
  final instance = CMApi().getWorkerJobApi();

  group(WorkerJobApi, () {
    //Future<WorkerJobDto> apiWorkerJobApiWorkerJobAssignJobPost({ WorkerJobDto workerJobDto }) async
    test('test apiWorkerJobApiWorkerJobAssignJobPost', () async {
      // TODO
    });

    //Future<BuiltList<UserDto>> apiWorkerJobApiWorkerJobGetAssignedWorkersIdGet(int id) async
    test('test apiWorkerJobApiWorkerJobGetAssignedWorkersIdGet', () async {
      // TODO
    });

    //Future apiWorkerJobApiWorkerJobUnassignJobIdDelete(int id) async
    test('test apiWorkerJobApiWorkerJobUnassignJobIdDelete', () async {
      // TODO
    });
  });
}
