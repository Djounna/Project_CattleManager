import 'package:test/test.dart';
import 'package:CM_api/CM_api.dart';

/// tests for StatisticApi
void main() {
  final instance = CMApi().getStatisticApi();

  group(StatisticApi, () {
    //Future<CattleStatisticsDto> apiStatisticGet() async
    test('test apiStatisticGet', () async {
      // TODO
    });
  });
}
