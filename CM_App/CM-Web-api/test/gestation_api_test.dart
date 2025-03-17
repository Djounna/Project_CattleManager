import 'package:test/test.dart';
import 'package:CM_api/CM_api.dart';

/// tests for GestationApi
void main() {
  final instance = CMApi().getGestationApi();

  group(GestationApi, () {
    //Future apiGestationDelete({ int id }) async
    test('test apiGestationDelete', () async {
      // TODO
    });

    //Future<BuiltList<GestationDto>> apiGestationGet() async
    test('test apiGestationGet', () async {
      // TODO
    });

    //Future<GestationDto> apiGestationIdGet(int id) async
    test('test apiGestationIdGet', () async {
      // TODO
    });

    //Future<GestationDto> apiGestationPost({ GestationDto gestationDto }) async
    test('test apiGestationPost', () async {
      // TODO
    });

    //Future<GestationDto> apiGestationPut({ GestationDto gestationDto }) async
    test('test apiGestationPut', () async {
      // TODO
    });
  });
}
