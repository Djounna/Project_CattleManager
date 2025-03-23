//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.18

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class MilkingVolumeDto {
  /// Returns a new [MilkingVolumeDto] instance.
  MilkingVolumeDto({
    this.date,
    this.volume,
    this.average,
    this.min,
    this.max,
  });

  ///
  /// Please note: This property should have been non-nullable! Since the specification file
  /// does not include a default value (using the "default:" property), however, the generated
  /// source code must fall back to having a nullable type.
  /// Consider adding a "default:" property in the specification file to hide this note.
  ///
  DateOnly? date;

  ///
  /// Please note: This property should have been non-nullable! Since the specification file
  /// does not include a default value (using the "default:" property), however, the generated
  /// source code must fall back to having a nullable type.
  /// Consider adding a "default:" property in the specification file to hide this note.
  ///
  double? volume;

  ///
  /// Please note: This property should have been non-nullable! Since the specification file
  /// does not include a default value (using the "default:" property), however, the generated
  /// source code must fall back to having a nullable type.
  /// Consider adding a "default:" property in the specification file to hide this note.
  ///
  double? average;

  ///
  /// Please note: This property should have been non-nullable! Since the specification file
  /// does not include a default value (using the "default:" property), however, the generated
  /// source code must fall back to having a nullable type.
  /// Consider adding a "default:" property in the specification file to hide this note.
  ///
  double? min;

  ///
  /// Please note: This property should have been non-nullable! Since the specification file
  /// does not include a default value (using the "default:" property), however, the generated
  /// source code must fall back to having a nullable type.
  /// Consider adding a "default:" property in the specification file to hide this note.
  ///
  double? max;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is MilkingVolumeDto &&
          other.date == date &&
          other.volume == volume &&
          other.average == average &&
          other.min == min &&
          other.max == max;

  @override
  int get hashCode =>
      // ignore: unnecessary_parenthesis
      (date == null ? 0 : date!.hashCode) +
      (volume == null ? 0 : volume!.hashCode) +
      (average == null ? 0 : average!.hashCode) +
      (min == null ? 0 : min!.hashCode) +
      (max == null ? 0 : max!.hashCode);

  @override
  String toString() =>
      'MilkingVolumeDto[date=$date, volume=$volume, average=$average, min=$min, max=$max]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
    if (this.date != null) {
      json[r'date'] = this.date;
    } else {
      json[r'date'] = null;
    }
    if (this.volume != null) {
      json[r'volume'] = this.volume;
    } else {
      json[r'volume'] = null;
    }
    if (this.average != null) {
      json[r'average'] = this.average;
    } else {
      json[r'average'] = null;
    }
    if (this.min != null) {
      json[r'min'] = this.min;
    } else {
      json[r'min'] = null;
    }
    if (this.max != null) {
      json[r'max'] = this.max;
    } else {
      json[r'max'] = null;
    }
    return json;
  }

  /// Returns a new [MilkingVolumeDto] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static MilkingVolumeDto? fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();

      // Ensure that the map contains the required keys.
      // Note 1: the values aren't checked for validity beyond being non-null.
      // Note 2: this code is stripped in release mode!
      assert(() {
        requiredKeys.forEach((key) {
          assert(json.containsKey(key),
              'Required key "MilkingVolumeDto[$key]" is missing from JSON.');
          assert(json[key] != null,
              'Required key "MilkingVolumeDto[$key]" has a null value in JSON.');
        });
        return true;
      }());

      return MilkingVolumeDto(
        date: DateOnly.fromJson(json[r'date']),
        volume: mapValueOfType<double>(json, r'volume'),
        average: mapValueOfType<double>(json, r'average'),
        min: mapValueOfType<double>(json, r'min'),
        max: mapValueOfType<double>(json, r'max'),
      );
    }
    return null;
  }

  static List<MilkingVolumeDto> listFromJson(
    dynamic json, {
    bool growable = false,
  }) {
    final result = <MilkingVolumeDto>[];
    if (json is List && json.isNotEmpty) {
      for (final row in json) {
        final value = MilkingVolumeDto.fromJson(row);
        if (value != null) {
          result.add(value);
        }
      }
    }
    return result.toList(growable: growable);
  }

  static Map<String, MilkingVolumeDto> mapFromJson(dynamic json) {
    final map = <String, MilkingVolumeDto>{};
    if (json is Map && json.isNotEmpty) {
      json = json.cast<String, dynamic>(); // ignore: parameter_assignments
      for (final entry in json.entries) {
        final value = MilkingVolumeDto.fromJson(entry.value);
        if (value != null) {
          map[entry.key] = value;
        }
      }
    }
    return map;
  }

  // maps a json object with a list of MilkingVolumeDto-objects as value to a dart map
  static Map<String, List<MilkingVolumeDto>> mapListFromJson(
    dynamic json, {
    bool growable = false,
  }) {
    final map = <String, List<MilkingVolumeDto>>{};
    if (json is Map && json.isNotEmpty) {
      // ignore: parameter_assignments
      json = json.cast<String, dynamic>();
      for (final entry in json.entries) {
        map[entry.key] = MilkingVolumeDto.listFromJson(
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
