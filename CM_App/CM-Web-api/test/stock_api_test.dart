import 'package:test/test.dart';
import 'package:CM_api/CM_api.dart';

/// tests for StockApi
void main() {
  final instance = CMApi().getStockApi();

  group(StockApi, () {
    //Future apiStockDelete({ int id }) async
    test('test apiStockDelete', () async {
      // TODO
    });

    //Future<BuiltList<StockDto>> apiStockGet() async
    test('test apiStockGet', () async {
      // TODO
    });

    //Future<StockDto> apiStockIdGet(int id) async
    test('test apiStockIdGet', () async {
      // TODO
    });

    //Future<StockDto> apiStockPost({ StockDto stockDto }) async
    test('test apiStockPost', () async {
      // TODO
    });

    //Future<StockDto> apiStockPut({ StockDto stockDto }) async
    test('test apiStockPut', () async {
      // TODO
    });
  });
}
