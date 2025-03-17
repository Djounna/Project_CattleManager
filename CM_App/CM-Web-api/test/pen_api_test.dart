import 'package:test/test.dart';
import 'package:CM_api/CM_api.dart';

/// tests for PenApi
void main() {
  final instance = CMApi().getPenApi();

  group(PenApi, () {
    //Future<ProblemDetails> apiPenAssignPost({ AssignPenDetailsDto assignPenDetailsDto }) async
    test('test apiPenAssignPost', () async {
      // TODO
    });

    //Future apiPenDelete({ int id }) async
    test('test apiPenDelete', () async {
      // TODO
    });

    //Future<BuiltList<PenDto>> apiPenGet() async
    test('test apiPenGet', () async {
      // TODO
    });

    //Future<PenDto> apiPenIdGet(int id) async
    test('test apiPenIdGet', () async {
      // TODO
    });

    //Future<PenDto> apiPenPost({ PenDto penDto }) async
    test('test apiPenPost', () async {
      // TODO
    });

    //Future<PenDto> apiPenPut({ PenDto penDto }) async
    test('test apiPenPut', () async {
      // TODO
    });
  });
}
