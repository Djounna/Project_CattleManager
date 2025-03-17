import 'package:test/test.dart';
import 'package:CM_api/CM_api.dart';

/// tests for InterventionApi
void main() {
  final instance = CMApi().getInterventionApi();

  group(InterventionApi, () {
    //Future apiInterventionDelete({ int id }) async
    test('test apiInterventionDelete', () async {
      // TODO
    });

    //Future<BuiltList<InterventionDto>> apiInterventionGet() async
    test('test apiInterventionGet', () async {
      // TODO
    });

    //Future<InterventionDto> apiInterventionIdGet(int id) async
    test('test apiInterventionIdGet', () async {
      // TODO
    });

    //Future<InterventionDto> apiInterventionPost({ InterventionDto interventionDto }) async
    test('test apiInterventionPost', () async {
      // TODO
    });

    //Future<InterventionDto> apiInterventionPut({ InterventionDto interventionDto }) async
    test('test apiInterventionPut', () async {
      // TODO
    });
  });
}
