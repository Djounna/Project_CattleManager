import 'package:test/test.dart';
import 'package:CM_api/CM_api.dart';

/// tests for ConditionApi
void main() {
  final instance = CMApi().getConditionApi();

  group(ConditionApi, () {
    //Future apiConditionDelete({ int id }) async
    test('test apiConditionDelete', () async {
      // TODO
    });

    //Future<BuiltList<ConditionDto>> apiConditionGet() async
    test('test apiConditionGet', () async {
      // TODO
    });

    //Future<ConditionDto> apiConditionIdGet(int id) async
    test('test apiConditionIdGet', () async {
      // TODO
    });

    //Future<ConditionDto> apiConditionPost({ ConditionDto conditionDto }) async
    test('test apiConditionPost', () async {
      // TODO
    });

    //Future<ConditionDto> apiConditionPut({ ConditionDto conditionDto }) async
    test('test apiConditionPut', () async {
      // TODO
    });
  });
}
