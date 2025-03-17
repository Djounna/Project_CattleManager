import 'package:test/test.dart';
import 'package:CM_api/CM_api.dart';

/// tests for CowApi
void main() {
  final instance = CMApi().getCowApi();

  group(CowApi, () {
    //Future apiCowDelete({ int id }) async
    test('test apiCowDelete', () async {
      // TODO
    });

    //Future<BuiltList<CowDto>> apiCowGet() async
    test('test apiCowGet', () async {
      // TODO
    });

    //Future<CowDetailsDto> apiCowIdDetailsGet(int id) async
    test('test apiCowIdDetailsGet', () async {
      // TODO
    });

    //Future<CowDto> apiCowIdGet(int id) async
    test('test apiCowIdGet', () async {
      // TODO
    });

    //Future<CowDto> apiCowPost({ CowDto cowDto }) async
    test('test apiCowPost', () async {
      // TODO
    });

    //Future<CowDto> apiCowPut({ CowDto cowDto }) async
    test('test apiCowPut', () async {
      // TODO
    });
  });
}
