import 'package:test/test.dart';
import 'package:CM_api/CM_api.dart';

/// tests for GroupApi
void main() {
  final instance = CMApi().getGroupApi();

  group(GroupApi, () {
    //Future<ProblemDetails> apiGroupAssignPost({ AssignGroupDetailsDto assignGroupDetailsDto }) async
    test('test apiGroupAssignPost', () async {
      // TODO
    });

    //Future apiGroupDelete({ int id }) async
    test('test apiGroupDelete', () async {
      // TODO
    });

    //Future<BuiltList<GroupDto>> apiGroupGet() async
    test('test apiGroupGet', () async {
      // TODO
    });

    //Future<GroupDto> apiGroupIdGet(int id) async
    test('test apiGroupIdGet', () async {
      // TODO
    });

    //Future<GroupDto> apiGroupPost({ GroupDto groupDto }) async
    test('test apiGroupPost', () async {
      // TODO
    });

    //Future<GroupDto> apiGroupPut({ GroupDto groupDto }) async
    test('test apiGroupPut', () async {
      // TODO
    });
  });
}
