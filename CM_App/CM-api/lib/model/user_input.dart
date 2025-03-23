//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.18

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class UserInput {
  /// Returns a new [UserInput] instance.
  UserInput({
    this.username,
    this.lastname,
    this.firstname,
    this.email,
    this.password,
    this.roleName,
  });

  String? username;

  String? lastname;

  String? firstname;

  String? email;

  String? password;

  String? roleName;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is UserInput &&
          other.username == username &&
          other.lastname == lastname &&
          other.firstname == firstname &&
          other.email == email &&
          other.password == password &&
          other.roleName == roleName;

  @override
  int get hashCode =>
      // ignore: unnecessary_parenthesis
      (username == null ? 0 : username!.hashCode) +
      (lastname == null ? 0 : lastname!.hashCode) +
      (firstname == null ? 0 : firstname!.hashCode) +
      (email == null ? 0 : email!.hashCode) +
      (password == null ? 0 : password!.hashCode) +
      (roleName == null ? 0 : roleName!.hashCode);

  @override
  String toString() =>
      'UserInput[username=$username, lastname=$lastname, firstname=$firstname, email=$email, password=$password, roleName=$roleName]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
    if (this.username != null) {
      json[r'username'] = this.username;
    } else {
      json[r'username'] = null;
    }
    if (this.lastname != null) {
      json[r'lastname'] = this.lastname;
    } else {
      json[r'lastname'] = null;
    }
    if (this.firstname != null) {
      json[r'firstname'] = this.firstname;
    } else {
      json[r'firstname'] = null;
    }
    if (this.email != null) {
      json[r'email'] = this.email;
    } else {
      json[r'email'] = null;
    }
    if (this.password != null) {
      json[r'password'] = this.password;
    } else {
      json[r'password'] = null;
    }
    if (this.roleName != null) {
      json[r'roleName'] = this.roleName;
    } else {
      json[r'roleName'] = null;
    }
    return json;
  }

  /// Returns a new [UserInput] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static UserInput? fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();

      // Ensure that the map contains the required keys.
      // Note 1: the values aren't checked for validity beyond being non-null.
      // Note 2: this code is stripped in release mode!
      assert(() {
        requiredKeys.forEach((key) {
          assert(json.containsKey(key),
              'Required key "UserInput[$key]" is missing from JSON.');
          assert(json[key] != null,
              'Required key "UserInput[$key]" has a null value in JSON.');
        });
        return true;
      }());

      return UserInput(
        username: mapValueOfType<String>(json, r'username'),
        lastname: mapValueOfType<String>(json, r'lastname'),
        firstname: mapValueOfType<String>(json, r'firstname'),
        email: mapValueOfType<String>(json, r'email'),
        password: mapValueOfType<String>(json, r'password'),
        roleName: mapValueOfType<String>(json, r'roleName'),
      );
    }
    return null;
  }

  static List<UserInput> listFromJson(
    dynamic json, {
    bool growable = false,
  }) {
    final result = <UserInput>[];
    if (json is List && json.isNotEmpty) {
      for (final row in json) {
        final value = UserInput.fromJson(row);
        if (value != null) {
          result.add(value);
        }
      }
    }
    return result.toList(growable: growable);
  }

  static Map<String, UserInput> mapFromJson(dynamic json) {
    final map = <String, UserInput>{};
    if (json is Map && json.isNotEmpty) {
      json = json.cast<String, dynamic>(); // ignore: parameter_assignments
      for (final entry in json.entries) {
        final value = UserInput.fromJson(entry.value);
        if (value != null) {
          map[entry.key] = value;
        }
      }
    }
    return map;
  }

  // maps a json object with a list of UserInput-objects as value to a dart map
  static Map<String, List<UserInput>> mapListFromJson(
    dynamic json, {
    bool growable = false,
  }) {
    final map = <String, List<UserInput>>{};
    if (json is Map && json.isNotEmpty) {
      // ignore: parameter_assignments
      json = json.cast<String, dynamic>();
      for (final entry in json.entries) {
        map[entry.key] = UserInput.listFromJson(
          entry.value,
          growable: growable,
        );
      }
    }
    return map;
  }

  /// The list of required keys that must be present in a JSON.
  static const requiredKeys = <String>{};
}
