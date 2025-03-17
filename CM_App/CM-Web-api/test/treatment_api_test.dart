import 'package:test/test.dart';
import 'package:CM_api/CM_api.dart';

/// tests for TreatmentApi
void main() {
  final instance = CMApi().getTreatmentApi();

  group(TreatmentApi, () {
    //Future apiTreatmentDelete({ int id }) async
    test('test apiTreatmentDelete', () async {
      // TODO
    });

    //Future<BuiltList<TreatmentDto>> apiTreatmentGet() async
    test('test apiTreatmentGet', () async {
      // TODO
    });

    //Future<TreatmentDto> apiTreatmentIdGet(int id) async
    test('test apiTreatmentIdGet', () async {
      // TODO
    });

    //Future<TreatmentDto> apiTreatmentPost({ TreatmentDto treatmentDto }) async
    test('test apiTreatmentPost', () async {
      // TODO
    });

    //Future<TreatmentDto> apiTreatmentPut({ TreatmentDto treatmentDto }) async
    test('test apiTreatmentPut', () async {
      // TODO
    });
  });
}
