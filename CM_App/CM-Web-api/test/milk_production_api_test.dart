import 'package:test/test.dart';
import 'package:CM_api/CM_api.dart';

/// tests for MilkProductionApi
void main() {
  final instance = CMApi().getMilkProductionApi();

  group(MilkProductionApi, () {
    //Future apiMilkProductionDelete({ int id }) async
    test('test apiMilkProductionDelete', () async {
      // TODO
    });

    //Future<BuiltList<MilkProductionDto>> apiMilkProductionGet() async
    test('test apiMilkProductionGet', () async {
      // TODO
    });

    //Future<MilkProductionDto> apiMilkProductionIdGet(int id) async
    test('test apiMilkProductionIdGet', () async {
      // TODO
    });

    //Future<MilkProductionDto> apiMilkProductionPost({ MilkProductionDto milkProductionDto }) async
    test('test apiMilkProductionPost', () async {
      // TODO
    });

    //Future<MilkProductionDto> apiMilkProductionPut({ MilkProductionDto milkProductionDto }) async
    test('test apiMilkProductionPut', () async {
      // TODO
    });
  });
}
