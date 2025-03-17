import 'package:test/test.dart';
import 'package:CM_api/CM_api.dart';

/// tests for UserManagementApi
void main() {
  final instance = CMApi().getUserManagementApi();

  group(UserManagementApi, () {
    //Future<UserInput> apiUserManagementPost({ UserInput userInput }) async
    test('test apiUserManagementPost', () async {
      // TODO
    });

    //Future<BuiltList<RoleDto>> apiUserManagementPut({ int userId }) async
    test('test apiUserManagementPut', () async {
      // TODO
    });

    //Future<BuiltList<RoleDto>> apiUserManagementUserUserIdRolesGet(int userId) async
    test('test apiUserManagementUserUserIdRolesGet', () async {
      // TODO
    });
  });
}
