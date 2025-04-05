//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.18

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class CattleStatisticsDto {
  /// Returns a new [CattleStatisticsDto] instance.
  CattleStatisticsDto({
    this.groupStatistics = const [],
    this.penStatistics = const [],
    this.ageGroupStatistics = const [],
    this.ageGenderGroupStatisticsFemale = const [],
    this.ageGenderGroupStatisticsMale = const [],
  });

  List<GroupStatisticDto>? groupStatistics;

  List<PenStatisticDto>? penStatistics;

  List<AgeGroupStatisticDto>? ageGroupStatistics;

  List<AgeGenderGroupStatisticDto>? ageGenderGroupStatisticsFemale;

  List<AgeGenderGroupStatisticDto>? ageGenderGroupStatisticsMale;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is CattleStatisticsDto &&
          _deepEquality.equals(other.groupStatistics, groupStatistics) &&
          _deepEquality.equals(other.penStatistics, penStatistics) &&
          _deepEquality.equals(other.ageGroupStatistics, ageGroupStatistics) &&
          _deepEquality.equals(other.ageGenderGroupStatisticsFemale,
              ageGenderGroupStatisticsFemale) &&
          _deepEquality.equals(
              other.ageGenderGroupStatisticsMale, ageGenderGroupStatisticsMale);

  @override
  int get hashCode =>
      // ignore: unnecessary_parenthesis
      (groupStatistics == null ? 0 : groupStatistics!.hashCode) +
      (penStatistics == null ? 0 : penStatistics!.hashCode) +
      (ageGroupStatistics == null ? 0 : ageGroupStatistics!.hashCode) +
      (ageGenderGroupStatisticsFemale == null
          ? 0
          : ageGenderGroupStatisticsFemale!.hashCode) +
      (ageGenderGroupStatisticsMale == null
          ? 0
          : ageGenderGroupStatisticsMale!.hashCode);

  @override
  String toString() =>
      'CattleStatisticsDto[groupStatistics=$groupStatistics, penStatistics=$penStatistics, ageGroupStatistics=$ageGroupStatistics, ageGenderGroupStatisticsFemale=$ageGenderGroupStatisticsFemale, ageGenderGroupStatisticsMale=$ageGenderGroupStatisticsMale]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
    if (this.groupStatistics != null) {
      json[r'groupStatistics'] = this.groupStatistics;
    } else {
      json[r'groupStatistics'] = null;
    }
    if (this.penStatistics != null) {
      json[r'penStatistics'] = this.penStatistics;
    } else {
      json[r'penStatistics'] = null;
    }
    if (this.ageGroupStatistics != null) {
      json[r'ageGroupStatistics'] = this.ageGroupStatistics;
    } else {
      json[r'ageGroupStatistics'] = null;
    }
    if (this.ageGenderGroupStatisticsFemale != null) {
      json[r'ageGenderGroupStatisticsFemale'] =
          this.ageGenderGroupStatisticsFemale;
    } else {
      json[r'ageGenderGroupStatisticsFemale'] = null;
    }
    if (this.ageGenderGroupStatisticsMale != null) {
      json[r'ageGenderGroupStatisticsMale'] = this.ageGenderGroupStatisticsMale;
    } else {
      json[r'ageGenderGroupStatisticsMale'] = null;
    }
    return json;
  }

  /// Returns a new [CattleStatisticsDto] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static CattleStatisticsDto? fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();

      // Ensure that the map contains the required keys.
      // Note 1: the values aren't checked for validity beyond being non-null.
      // Note 2: this code is stripped in release mode!
      assert(() {
        requiredKeys.forEach((key) {
          assert(json.containsKey(key),
              'Required key "CattleStatisticsDto[$key]" is missing from JSON.');
          assert(json[key] != null,
              'Required key "CattleStatisticsDto[$key]" has a null value in JSON.');
        });
        return true;
      }());

      return CattleStatisticsDto(
        groupStatistics:
            GroupStatisticDto.listFromJson(json[r'groupStatistics']),
        penStatistics: PenStatisticDto.listFromJson(json[r'penStatistics']),
        ageGroupStatistics:
            AgeGroupStatisticDto.listFromJson(json[r'ageGroupStatistics']),
        ageGenderGroupStatisticsFemale: AgeGenderGroupStatisticDto.listFromJson(
            json[r'ageGenderGroupStatisticsFemale']),
        ageGenderGroupStatisticsMale: AgeGenderGroupStatisticDto.listFromJson(
            json[r'ageGenderGroupStatisticsMale']),
      );
    }
    return null;
  }

  static List<CattleStatisticsDto> listFromJson(
    dynamic json, {
    bool growable = false,
  }) {
    final result = <CattleStatisticsDto>[];
    if (json is List && json.isNotEmpty) {
      for (final row in json) {
        final value = CattleStatisticsDto.fromJson(row);
        if (value != null) {
          result.add(value);
        }
      }
    }
    return result.toList(growable: growable);
  }

  static Map<String, CattleStatisticsDto> mapFromJson(dynamic json) {
    final map = <String, CattleStatisticsDto>{};
    if (json is Map && json.isNotEmpty) {
      json = json.cast<String, dynamic>(); // ignore: parameter_assignments
      for (final entry in json.entries) {
        final value = CattleStatisticsDto.fromJson(entry.value);
        if (value != null) {
          map[entry.key] = value;
        }
      }
    }
    return map;
  }

  // maps a json object with a list of CattleStatisticsDto-objects as value to a dart map
  static Map<String, List<CattleStatisticsDto>> mapListFromJson(
    dynamic json, {
    bool growable = false,
  }) {
    final map = <String, List<CattleStatisticsDto>>{};
    if (json is Map && json.isNotEmpty) {
      // ignore: parameter_assignments
      json = json.cast<String, dynamic>();
      for (final entry in json.entries) {
        map[entry.key] = CattleStatisticsDto.listFromJson(
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
