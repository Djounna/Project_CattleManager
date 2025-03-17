import 'package:test/test.dart';
import 'package:CM_api/CM_api.dart';

/// tests for VaccinationApi
void main() {
  final instance = CMApi().getVaccinationApi();

  group(VaccinationApi, () {
    //Future apiVaccinationDelete({ int id }) async
    test('test apiVaccinationDelete', () async {
      // TODO
    });

    //Future<BuiltList<VaccinationDto>> apiVaccinationGet() async
    test('test apiVaccinationGet', () async {
      // TODO
    });

    //Future<VaccinationDto> apiVaccinationIdGet(int id) async
    test('test apiVaccinationIdGet', () async {
      // TODO
    });

    //Future<VaccinationDto> apiVaccinationPost({ VaccinationDto vaccinationDto }) async
    test('test apiVaccinationPost', () async {
      // TODO
    });

    //Future<VaccinationDto> apiVaccinationPut({ VaccinationDto vaccinationDto }) async
    test('test apiVaccinationPut', () async {
      // TODO
    });
  });
}
