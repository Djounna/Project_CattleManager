import 'package:test/test.dart';
import 'package:CM_api/CM_api.dart';

/// tests for MilkingApi
void main() {
  final instance = CMApi().getMilkingApi();

  group(MilkingApi, () {
    //Future<BuiltList<MilkingDto>> apiMilkingCowIdRangeGet(int cowId, int range) async
    test('test apiMilkingCowIdRangeGet', () async {
      // TODO
    });

    //Future<BuiltList<MilkingDto>> apiMilkingCowIdStartEndGet(int cowId, String start, String end) async
    test('test apiMilkingCowIdStartEndGet', () async {
      // TODO
    });

    //Future apiMilkingDelete({ int id }) async
    test('test apiMilkingDelete', () async {
      // TODO
    });

    //Future<BuiltList<MilkingDto>> apiMilkingGet() async
    test('test apiMilkingGet', () async {
      // TODO
    });

    //Future<MilkingDto> apiMilkingIdGet(int id) async
    test('test apiMilkingIdGet', () async {
      // TODO
    });

    //Future<MilkingInputDto> apiMilkingMilkingInputPost({ MilkingInputDto milkingInputDto }) async
    test('test apiMilkingMilkingInputPost', () async {
      // TODO
    });

    //Future<MilkingInputsDto> apiMilkingMilkingInputsDateGet(String date) async
    test('test apiMilkingMilkingInputsDateGet', () async {
      // TODO
    });

    //Future<MilkingInputsDto> apiMilkingMilkingInputsPost({ MilkingInputsDto milkingInputsDto }) async
    test('test apiMilkingMilkingInputsPost', () async {
      // TODO
    });

    //Future<MilkingDto> apiMilkingPost({ MilkingDto milkingDto }) async
    test('test apiMilkingPost', () async {
      // TODO
    });

    //Future<MilkingDto> apiMilkingPut({ MilkingDto milkingDto }) async
    test('test apiMilkingPut', () async {
      // TODO
    });

    //Future<BuiltList<MilkingDto>> apiMilkingRangeStartEndGet(String start, String end) async
    test('test apiMilkingRangeStartEndGet', () async {
      // TODO
    });

    //Future<BuiltList<MilkingVolumeDto>> apiMilkingVolumeRangeStartEndGet(String start, String end) async
    test('test apiMilkingVolumeRangeStartEndGet', () async {
      // TODO
    });
  });
}
