import 'package:test/test.dart';
import 'package:CM_api/CM_api.dart';

/// tests for IntervenantApi
void main() {
  final instance = CMApi().getIntervenantApi();

  group(IntervenantApi, () {
    //Future apiIntervenantDelete({ int id }) async
    test('test apiIntervenantDelete', () async {
      // TODO
    });

    //Future<BuiltList<IntervenantDto>> apiIntervenantGet() async
    test('test apiIntervenantGet', () async {
      // TODO
    });

    //Future<IntervenantDto> apiIntervenantIdGet(int id) async
    test('test apiIntervenantIdGet', () async {
      // TODO
    });

    //Future<IntervenantDto> apiIntervenantPost({ IntervenantDto intervenantDto }) async
    test('test apiIntervenantPost', () async {
      // TODO
    });

    //Future<IntervenantDto> apiIntervenantPut({ IntervenantDto intervenantDto }) async
    test('test apiIntervenantPut', () async {
      // TODO
    });
  });
}
