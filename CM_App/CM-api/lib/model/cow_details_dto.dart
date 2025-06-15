//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.18

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class CowDetailsDto {
  /// Returns a new [CowDetailsDto] instance.
  CowDetailsDto({
    this.id,
    this.identifier,
    this.name,
    this.milkCow,
    this.birthDate,
    this.race,
    this.gender,
    this.imgLink,
    this.pen,
    this.group,
    this.interventions = const [],
    this.vaccinations = const [],
    this.gestations = const [],
    this.conditions = const [],
    this.treatments = const [],
    this.children = const [],
    this.penMoves = const [],
    this.groupMoves = const [],
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

  ///
  /// Please note: This property should have been non-nullable! Since the specification file
  /// does not include a default value (using the "default:" property), however, the generated
  /// source code must fall back to having a nullable type.
  /// Consider adding a "default:" property in the specification file to hide this note.
  ///
  PenDto? pen;

  ///
  /// Please note: This property should have been non-nullable! Since the specification file
  /// does not include a default value (using the "default:" property), however, the generated
  /// source code must fall back to having a nullable type.
  /// Consider adding a "default:" property in the specification file to hide this note.
  ///
  GroupDto? group;

  List<InterventionDto>? interventions;

  List<VaccinationDto>? vaccinations;

  List<GestationDto>? gestations;

  List<ConditionDto>? conditions;

  List<TreatmentDto>? treatments;

  List<CowDto>? children;

  List<PenMoveDto>? penMoves;

  List<GroupMoveDto>? groupMoves;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is CowDetailsDto &&
          other.id == id &&
          other.identifier == identifier &&
          other.name == name &&
          other.milkCow == milkCow &&
          other.birthDate == birthDate &&
          other.race == race &&
          other.gender == gender &&
          other.imgLink == imgLink &&
          other.pen == pen &&
          other.group == group &&
          _deepEquality.equals(other.interventions, interventions) &&
          _deepEquality.equals(other.vaccinations, vaccinations) &&
          _deepEquality.equals(other.gestations, gestations) &&
          _deepEquality.equals(other.conditions, conditions) &&
          _deepEquality.equals(other.treatments, treatments) &&
          _deepEquality.equals(other.children, children) &&
          _deepEquality.equals(other.penMoves, penMoves) &&
          _deepEquality.equals(other.groupMoves, groupMoves);

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
      (pen == null ? 0 : pen!.hashCode) +
      (group == null ? 0 : group!.hashCode) +
      (interventions == null ? 0 : interventions!.hashCode) +
      (vaccinations == null ? 0 : vaccinations!.hashCode) +
      (gestations == null ? 0 : gestations!.hashCode) +
      (conditions == null ? 0 : conditions!.hashCode) +
      (treatments == null ? 0 : treatments!.hashCode) +
      (children == null ? 0 : children!.hashCode) +
      (penMoves == null ? 0 : penMoves!.hashCode) +
      (groupMoves == null ? 0 : groupMoves!.hashCode);

  @override
  String toString() =>
      'CowDetailsDto[id=$id, identifier=$identifier, name=$name, milkCow=$milkCow, birthDate=$birthDate, race=$race, gender=$gender, imgLink=$imgLink, pen=$pen, group=$group, interventions=$interventions, vaccinations=$vaccinations, gestations=$gestations, conditions=$conditions, treatments=$treatments, children=$children, penMoves=$penMoves, groupMoves=$groupMoves]';

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
    if (this.pen != null) {
      json[r'pen'] = this.pen;
    } else {
      json[r'pen'] = null;
    }
    if (this.group != null) {
      json[r'group'] = this.group;
    } else {
      json[r'group'] = null;
    }
    if (this.interventions != null) {
      json[r'interventions'] = this.interventions;
    } else {
      json[r'interventions'] = null;
    }
    if (this.vaccinations != null) {
      json[r'vaccinations'] = this.vaccinations;
    } else {
      json[r'vaccinations'] = null;
    }
    if (this.gestations != null) {
      json[r'gestations'] = this.gestations;
    } else {
      json[r'gestations'] = null;
    }
    if (this.conditions != null) {
      json[r'conditions'] = this.conditions;
    } else {
      json[r'conditions'] = null;
    }
    if (this.treatments != null) {
      json[r'treatments'] = this.treatments;
    } else {
      json[r'treatments'] = null;
    }
    if (this.children != null) {
      json[r'children'] = this.children;
    } else {
      json[r'children'] = null;
    }
    if (this.penMoves != null) {
      json[r'penMoves'] = this.penMoves;
    } else {
      json[r'penMoves'] = null;
    }
    if (this.groupMoves != null) {
      json[r'groupMoves'] = this.groupMoves;
    } else {
      json[r'groupMoves'] = null;
    }
    return json;
  }

  /// Returns a new [CowDetailsDto] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static CowDetailsDto? fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();

      // Ensure that the map contains the required keys.
      // Note 1: the values aren't checked for validity beyond being non-null.
      // Note 2: this code is stripped in release mode!
      assert(() {
        requiredKeys.forEach((key) {
          assert(json.containsKey(key),
              'Required key "CowDetailsDto[$key]" is missing from JSON.');
          assert(json[key] != null,
              'Required key "CowDetailsDto[$key]" has a null value in JSON.');
        });
        return true;
      }());

      return CowDetailsDto(
        id: mapValueOfType<int>(json, r'id'),
        identifier: mapValueOfType<String>(json, r'identifier'),
        name: mapValueOfType<String>(json, r'name'),
        milkCow: mapValueOfType<bool>(json, r'milkCow'),
        birthDate: mapDateTime(json, r'birthDate', r''),
        race: mapValueOfType<String>(json, r'race'),
        gender: mapValueOfType<String>(json, r'gender'),
        imgLink: mapValueOfType<String>(json, r'imgLink'),
        pen: PenDto.fromJson(json[r'pen']),
        group: GroupDto.fromJson(json[r'group']),
        interventions: InterventionDto.listFromJson(json[r'interventions']),
        vaccinations: VaccinationDto.listFromJson(json[r'vaccinations']),
        gestations: GestationDto.listFromJson(json[r'gestations']),
        conditions: ConditionDto.listFromJson(json[r'conditions']),
        treatments: TreatmentDto.listFromJson(json[r'treatments']),
        children: CowDto.listFromJson(json[r'children']),
        penMoves: PenMoveDto.listFromJson(json[r'penMoves']),
        groupMoves: GroupMoveDto.listFromJson(json[r'groupMoves']),
      );
    }
    return null;
  }

  static List<CowDetailsDto> listFromJson(
    dynamic json, {
    bool growable = false,
  }) {
    final result = <CowDetailsDto>[];
    if (json is List && json.isNotEmpty) {
      for (final row in json) {
        final value = CowDetailsDto.fromJson(row);
        if (value != null) {
          result.add(value);
        }
      }
    }
    return result.toList(growable: growable);
  }

  static Map<String, CowDetailsDto> mapFromJson(dynamic json) {
    final map = <String, CowDetailsDto>{};
    if (json is Map && json.isNotEmpty) {
      json = json.cast<String, dynamic>(); // ignore: parameter_assignments
      for (final entry in json.entries) {
        final value = CowDetailsDto.fromJson(entry.value);
        if (value != null) {
          map[entry.key] = value;
        }
      }
    }
    return map;
  }

  // maps a json object with a list of CowDetailsDto-objects as value to a dart map
  static Map<String, List<CowDetailsDto>> mapListFromJson(
    dynamic json, {
    bool growable = false,
  }) {
    final map = <String, List<CowDetailsDto>>{};
    if (json is Map && json.isNotEmpty) {
      // ignore: parameter_assignments
      json = json.cast<String, dynamic>();
      for (final entry in json.entries) {
        map[entry.key] = CowDetailsDto.listFromJson(
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
