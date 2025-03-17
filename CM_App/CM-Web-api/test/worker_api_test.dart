import 'package:test/test.dart';
import 'package:CM_api/CM_api.dart';

/// tests for WorkerApi
void main() {
  final instance = CMApi().getWorkerApi();

  group(WorkerApi, () {
    //Future<BuiltList<UserDto>> apiWorkerGet() async
    test('test apiWorkerGet', () async {
      // TODO
    });
  });
}
