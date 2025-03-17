// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'age_gender_group_statistic_dto.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$AgeGenderGroupStatisticDto extends AgeGenderGroupStatisticDto {
  @override
  final String? gender;
  @override
  final String? ageGroupName;
  @override
  final int? number;

  factory _$AgeGenderGroupStatisticDto(
          [void Function(AgeGenderGroupStatisticDtoBuilder)? updates]) =>
      (new AgeGenderGroupStatisticDtoBuilder()..update(updates))._build();

  _$AgeGenderGroupStatisticDto._({this.gender, this.ageGroupName, this.number})
      : super._();

  @override
  AgeGenderGroupStatisticDto rebuild(
          void Function(AgeGenderGroupStatisticDtoBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  AgeGenderGroupStatisticDtoBuilder toBuilder() =>
      new AgeGenderGroupStatisticDtoBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is AgeGenderGroupStatisticDto &&
        gender == other.gender &&
        ageGroupName == other.ageGroupName &&
        number == other.number;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, gender.hashCode);
    _$hash = $jc(_$hash, ageGroupName.hashCode);
    _$hash = $jc(_$hash, number.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'AgeGenderGroupStatisticDto')
          ..add('gender', gender)
          ..add('ageGroupName', ageGroupName)
          ..add('number', number))
        .toString();
  }
}

class AgeGenderGroupStatisticDtoBuilder
    implements
        Builder<AgeGenderGroupStatisticDto, AgeGenderGroupStatisticDtoBuilder> {
  _$AgeGenderGroupStatisticDto? _$v;

  String? _gender;
  String? get gender => _$this._gender;
  set gender(String? gender) => _$this._gender = gender;

  String? _ageGroupName;
  String? get ageGroupName => _$this._ageGroupName;
  set ageGroupName(String? ageGroupName) => _$this._ageGroupName = ageGroupName;

  int? _number;
  int? get number => _$this._number;
  set number(int? number) => _$this._number = number;

  AgeGenderGroupStatisticDtoBuilder() {
    AgeGenderGroupStatisticDto._defaults(this);
  }

  AgeGenderGroupStatisticDtoBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _gender = $v.gender;
      _ageGroupName = $v.ageGroupName;
      _number = $v.number;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(AgeGenderGroupStatisticDto other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$AgeGenderGroupStatisticDto;
  }

  @override
  void update(void Function(AgeGenderGroupStatisticDtoBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  AgeGenderGroupStatisticDto build() => _build();

  _$AgeGenderGroupStatisticDto _build() {
    final _$result = _$v ??
        new _$AgeGenderGroupStatisticDto._(
          gender: gender,
          ageGroupName: ageGroupName,
          number: number,
        );
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
