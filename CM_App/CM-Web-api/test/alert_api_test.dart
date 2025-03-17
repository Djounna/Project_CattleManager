import 'package:test/test.dart';
import 'package:CM_api/CM_api.dart';

/// tests for AlertApi
void main() {
  final instance = CMApi().getAlertApi();

  group(AlertApi, () {
    //Future apiAlertDelete({ int id }) async
    test('test apiAlertDelete', () async {
      // TODO
    });

    //Future<BuiltList<AlertDto>> apiAlertGet() async
    test('test apiAlertGet', () async {
      // TODO
    });

    //Future<AlertDto> apiAlertIdGet(int id) async
    test('test apiAlertIdGet', () async {
      // TODO
    });

    //Future<AlertDto> apiAlertPost({ AlertDto alertDto }) async
    test('test apiAlertPost', () async {
      // TODO
    });

    //Future<AlertDto> apiAlertPut({ AlertDto alertDto }) async
    test('test apiAlertPut', () async {
      // TODO
    });
  });
}
