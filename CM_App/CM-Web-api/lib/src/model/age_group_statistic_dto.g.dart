// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'age_group_statistic_dto.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$AgeGroupStatisticDto extends AgeGroupStatisticDto {
  @override
  final String? ageGroupName;
  @override
  final int? number;

  factory _$AgeGroupStatisticDto(
          [void Function(AgeGroupStatisticDtoBuilder)? updates]) =>
      (new AgeGroupStatisticDtoBuilder()..update(updates))._build();

  _$AgeGroupStatisticDto._({this.ageGroupName, this.number}) : super._();

  @override
  AgeGroupStatisticDto rebuild(
          void Function(AgeGroupStatisticDtoBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  AgeGroupStatisticDtoBuilder toBuilder() =>
      new AgeGroupStatisticDtoBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is AgeGroupStatisticDto &&
        ageGroupName == other.ageGroupName &&
        number == other.number;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, ageGroupName.hashCode);
    _$hash = $jc(_$hash, number.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'AgeGroupStatisticDto')
          ..add('ageGroupName', ageGroupName)
          ..add('number', number))
        .toString();
  }
}

class AgeGroupStatisticDtoBuilder
    implements Builder<AgeGroupStatisticDto, AgeGroupStatisticDtoBuilder> {
  _$AgeGroupStatisticDto? _$v;

  String? _ageGroupName;
  String? get ageGroupName => _$this._ageGroupName;
  set ageGroupName(String? ageGroupName) => _$this._ageGroupName = ageGroupName;

  int? _number;
  int? get number => _$this._number;
  set number(int? number) => _$this._number = number;

  AgeGroupStatisticDtoBuilder() {
    AgeGroupStatisticDto._defaults(this);
  }

  AgeGroupStatisticDtoBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _ageGroupName = $v.ageGroupName;
      _number = $v.number;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(AgeGroupStatisticDto other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$AgeGroupStatisticDto;
  }

  @override
  void update(void Function(AgeGroupStatisticDtoBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  AgeGroupStatisticDto build() => _build();

  _$AgeGroupStatisticDto _build() {
    final _$result = _$v ??
        new _$AgeGroupStatisticDto._(
          ageGroupName: ageGroupName,
          number: number,
        );
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
