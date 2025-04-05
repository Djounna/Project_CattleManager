//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.18

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class CowDto {
  /// Returns a new [CowDto] instance.
  CowDto({
    this.id,
    this.identifier,
    this.name,
    this.milkCow,
    this.birthDate,
    this.race,
    this.gender,
    this.imgLink,
    this.motherId,
    this.fatherId,
    this.penId,
    this.groupId,
  });

  ///
  /// Please note: This property should have been non-nullable! Since the specification file
  /// does not include a default value (using the "default:" property), however, the generated
  /// source code must fall back to having a nullable type.
  /// Consider adding a "default:" property in the specification file to hide this note.
  ///
  int? id;

  String? identifier;

  String? name;

  ///
  /// Please note: This property should have been non-nullable! Since the specification file
  /// does not include a default value (using the "default:" property), however, the generated
  /// source code must fall back to having a nullable type.
  /// Consider adding a "default:" property in the specification file to hide this note.
  ///
  bool? milkCow;

  ///
  /// Please note: This property should have been non-nullable! Since the specification file
  /// does not include a default value (using the "default:" property), however, the generated
  /// source code must fall back to having a nullable type.
  /// Consider adding a "default:" property in the specification file to hide this note.
  ///
  DateTime? birthDate;

  String? race;

  String? gender;

  String? imgLink;

  int? motherId;

  int? fatherId;

  int? penId;

  int? groupId;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is CowDto &&
          other.id == id &&
          other.identifier == identifier &&
          other.name == name &&
          other.milkCow == milkCow &&
          other.birthDate == birthDate &&
          other.race == race &&
          other.gender == gender &&
          other.imgLink == imgLink &&
          other.motherId == motherId &&
          other.fatherId == fatherId &&
          other.penId == penId &&
          other.groupId == groupId;

  @override
  int get hashCode =>
      // ignore: unnecessary_parenthesis
      (id == null ? 0 : id!.hashCode) +
      (identifier == null ? 0 : identifier!.hashCode) +
      (name == null ? 0 : name!.hashCode) +
      (milkCow == null ? 0 : milkCow!.hashCode) +
      (birthDate == null ? 0 : birthDate!.hashCode) +
      (race == null ? 0 : race!.hashCode) +
      (gender == null ? 0 : gender!.hashCode) +
      (imgLink == null ? 0 : imgLink!.hashCode) +
      (motherId == null ? 0 : motherId!.hashCode) +
      (fatherId == null ? 0 : fatherId!.hashCode) +
      (penId == null ? 0 : penId!.hashCode) +
      (groupId == null ? 0 : groupId!.hashCode);

  @override
  String toString() =>
      'CowDto[id=$id, identifier=$identifier, name=$name, milkCow=$milkCow, birthDate=$birthDate, race=$race, gender=$gender, imgLink=$imgLink, motherId=$motherId, fatherId=$fatherId, penId=$penId, groupId=$groupId]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
    if (this.id != null) {
      json[r'id'] = this.id;
    } else {
      json[r'id'] = null;
    }
    if (this.identifier != null) {
      json[r'identifier'] = this.identifier;
    } else {
      json[r'identifier'] = null;
    }
    if (this.name != null) {
      json[r'name'] = this.name;
    } else {
      json[r'name'] = null;
    }
    if (this.milkCow != null) {
      json[r'milkCow'] = this.milkCow;
    } else {
      json[r'milkCow'] = null;
    }
    if (this.birthDate != null) {
      json[r'birthDate'] = this.birthDate!.toUtc().toIso8601String();
    } else {
      json[r'birthDate'] = null;
    }
    if (this.race != null) {
      json[r'race'] = this.race;
    } else {
      json[r'race'] = null;
    }
    if (this.gender != null) {
      json[r'gender'] = this.gender;
    } else {
      json[r'gender'] = null;
    }
    if (this.imgLink != null) {
      json[r'imgLink'] = this.imgLink;
    } else {
      json[r'imgLink'] = null;
    }
    if (this.motherId != null) {
      json[r'motherId'] = this.motherId;
    } else {
      json[r'motherId'] = null;
    }
    if (this.fatherId != null) {
      json[r'fatherId'] = this.fatherId;
    } else {
      json[r'fatherId'] = null;
    }
    if (this.penId != null) {
      json[r'penId'] = this.penId;
    } else {
      json[r'penId'] = null;
    }
    if (this.groupId != null) {
      json[r'groupId'] = this.groupId;
    } else {
      json[r'groupId'] = null;
    }
    return json;
  }

  /// Returns a new [CowDto] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static CowDto? fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();

      // Ensure that the map contains the required keys.
      // Note 1: the values aren't checked for validity beyond being non-null.
      // Note 2: this code is stripped in release mode!
      assert(() {
        requiredKeys.forEach((key) {
          assert(json.containsKey(key),
              'Required key "CowDto[$key]" is missing from JSON.');
          assert(json[key] != null,
              'Required key "CowDto[$key]" has a null value in JSON.');
        });
        return true;
      }());

      return CowDto(
        id: mapValueOfType<int>(json, r'id'),
        identifier: mapValueOfType<String>(json, r'identifier'),
        name: mapValueOfType<String>(json, r'name'),
        milkCow: mapValueOfType<bool>(json, r'milkCow'),
        birthDate: mapDateTime(json, r'birthDate', r''),
        race: mapValueOfType<String>(json, r'race'),
        gender: mapValueOfType<String>(json, r'gender'),
        imgLink: mapValueOfType<String>(json, r'imgLink'),
        motherId: mapValueOfType<int>(json, r'motherId'),
        fatherId: mapValueOfType<int>(json, r'fatherId'),
        penId: mapValueOfType<int>(json, r'penId'),
        groupId: mapValueOfType<int>(json, r'groupId'),
      );
    }
    return null;
  }

  static List<CowDto> listFromJson(
    dynamic json, {
    bool growable = false,
  }) {
    final result = <CowDto>[];
    if (json is List && json.isNotEmpty) {
      for (final row in json) {
        final value = CowDto.fromJson(row);
        if (value != null) {
          result.add(value);
        }
      }
    }
    return result.toList(growable: growable);
  }

  static Map<String, CowDto> mapFromJson(dynamic json) {
    final map = <String, CowDto>{};
    if (json is Map && json.isNotEmpty) {
      json = json.cast<String, dynamic>(); // ignore: parameter_assignments
      for (final entry in json.entries) {
        final value = CowDto.fromJson(entry.value);
        if (value != null) {
          map[entry.key] = value;
        }
      }
    }
    return map;
  }

  // maps a json object with a list of CowDto-objects as value to a dart map
  static Map<String, List<CowDto>> mapListFromJson(
    dynamic json, {
    bool growable = false,
  }) {
    final map = <String, List<CowDto>>{};
    if (json is Map && json.isNotEmpty) {
      // ignore: parameter_assignments
      json = json.cast<String, dynamic>();
      for (final entry in json.entries) {
        map[entry.key] = CowDto.listFromJson(
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
