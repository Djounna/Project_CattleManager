// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'cattle_statistics_dto.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$CattleStatisticsDto extends CattleStatisticsDto {
  @override
  final BuiltList<GroupStatisticDto>? groupStatistics;
  @override
  final BuiltList<PenStatisticDto>? penStatistics;
  @override
  final BuiltList<AgeGroupStatisticDto>? ageGroupStatistics;
  @override
  final BuiltList<AgeGenderGroupStatisticDto>? ageGenderGroupStatisticsFemale;
  @override
  final BuiltList<AgeGenderGroupStatisticDto>? ageGenderGroupStatisticsMale;

  factory _$CattleStatisticsDto(
          [void Function(CattleStatisticsDtoBuilder)? updates]) =>
      (new CattleStatisticsDtoBuilder()..update(updates))._build();

  _$CattleStatisticsDto._(
      {this.groupStatistics,
      this.penStatistics,
      this.ageGroupStatistics,
      this.ageGenderGroupStatisticsFemale,
      this.ageGenderGroupStatisticsMale})
      : super._();

  @override
  CattleStatisticsDto rebuild(
          void Function(CattleStatisticsDtoBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  CattleStatisticsDtoBuilder toBuilder() =>
      new CattleStatisticsDtoBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is CattleStatisticsDto &&
        groupStatistics == other.groupStatistics &&
        penStatistics == other.penStatistics &&
        ageGroupStatistics == other.ageGroupStatistics &&
        ageGenderGroupStatisticsFemale ==
            other.ageGenderGroupStatisticsFemale &&
        ageGenderGroupStatisticsMale == other.ageGenderGroupStatisticsMale;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, groupStatistics.hashCode);
    _$hash = $jc(_$hash, penStatistics.hashCode);
    _$hash = $jc(_$hash, ageGroupStatistics.hashCode);
    _$hash = $jc(_$hash, ageGenderGroupStatisticsFemale.hashCode);
    _$hash = $jc(_$hash, ageGenderGroupStatisticsMale.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'CattleStatisticsDto')
          ..add('groupStatistics', groupStatistics)
          ..add('penStatistics', penStatistics)
          ..add('ageGroupStatistics', ageGroupStatistics)
          ..add(
              'ageGenderGroupStatisticsFemale', ageGenderGroupStatisticsFemale)
          ..add('ageGenderGroupStatisticsMale', ageGenderGroupStatisticsMale))
        .toString();
  }
}

class CattleStatisticsDtoBuilder
    implements Builder<CattleStatisticsDto, CattleStatisticsDtoBuilder> {
  _$CattleStatisticsDto? _$v;

  ListBuilder<GroupStatisticDto>? _groupStatistics;
  ListBuilder<GroupStatisticDto> get groupStatistics =>
      _$this._groupStatistics ??= new ListBuilder<GroupStatisticDto>();
  set groupStatistics(ListBuilder<GroupStatisticDto>? groupStatistics) =>
      _$this._groupStatistics = groupStatistics;

  ListBuilder<PenStatisticDto>? _penStatistics;
  ListBuilder<PenStatisticDto> get penStatistics =>
      _$this._penStatistics ??= new ListBuilder<PenStatisticDto>();
  set penStatistics(ListBuilder<PenStatisticDto>? penStatistics) =>
      _$this._penStatistics = penStatistics;

  ListBuilder<AgeGroupStatisticDto>? _ageGroupStatistics;
  ListBuilder<AgeGroupStatisticDto> get ageGroupStatistics =>
      _$this._ageGroupStatistics ??= new ListBuilder<AgeGroupStatisticDto>();
  set ageGroupStatistics(
          ListBuilder<AgeGroupStatisticDto>? ageGroupStatistics) =>
      _$this._ageGroupStatistics = ageGroupStatistics;

  ListBuilder<AgeGenderGroupStatisticDto>? _ageGenderGroupStatisticsFemale;
  ListBuilder<AgeGenderGroupStatisticDto> get ageGenderGroupStatisticsFemale =>
      _$this._ageGenderGroupStatisticsFemale ??=
          new ListBuilder<AgeGenderGroupStatisticDto>();
  set ageGenderGroupStatisticsFemale(
          ListBuilder<AgeGenderGroupStatisticDto>?
              ageGenderGroupStatisticsFemale) =>
      _$this._ageGenderGroupStatisticsFemale = ageGenderGroupStatisticsFemale;

  ListBuilder<AgeGenderGroupStatisticDto>? _ageGenderGroupStatisticsMale;
  ListBuilder<AgeGenderGroupStatisticDto> get ageGenderGroupStatisticsMale =>
      _$this._ageGenderGroupStatisticsMale ??=
          new ListBuilder<AgeGenderGroupStatisticDto>();
  set ageGenderGroupStatisticsMale(
          ListBuilder<AgeGenderGroupStatisticDto>?
              ageGenderGroupStatisticsMale) =>
      _$this._ageGenderGroupStatisticsMale = ageGenderGroupStatisticsMale;

  CattleStatisticsDtoBuilder() {
    CattleStatisticsDto._defaults(this);
  }

  CattleStatisticsDtoBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _groupStatistics = $v.groupStatistics?.toBuilder();
      _penStatistics = $v.penStatistics?.toBuilder();
      _ageGroupStatistics = $v.ageGroupStatistics?.toBuilder();
      _ageGenderGroupStatisticsFemale =
          $v.ageGenderGroupStatisticsFemale?.toBuilder();
      _ageGenderGroupStatisticsMale =
          $v.ageGenderGroupStatisticsMale?.toBuilder();
      _$v = null;
    }
    return this;
  }

  @override
  void replace(CattleStatisticsDto other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$CattleStatisticsDto;
  }

  @override
  void update(void Function(CattleStatisticsDtoBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  CattleStatisticsDto build() => _build();

  _$CattleStatisticsDto _build() {
    _$CattleStatisticsDto _$result;
    try {
      _$result = _$v ??
          new _$CattleStatisticsDto._(
            groupStatistics: _groupStatistics?.build(),
            penStatistics: _penStatistics?.build(),
            ageGroupStatistics: _ageGroupStatistics?.build(),
            ageGenderGroupStatisticsFemale:
                _ageGenderGroupStatisticsFemale?.build(),
            ageGenderGroupStatisticsMale:
                _ageGenderGroupStatisticsMale?.build(),
          );
    } catch (_) {
      late String _$failedField;
      try {
        _$failedField = 'groupStatistics';
        _groupStatistics?.build();
        _$failedField = 'penStatistics';
        _penStatistics?.build();
        _$failedField = 'ageGroupStatistics';
        _ageGroupStatistics?.build();
        _$failedField = 'ageGenderGroupStatisticsFemale';
        _ageGenderGroupStatisticsFemale?.build();
        _$failedField = 'ageGenderGroupStatisticsMale';
        _ageGenderGroupStatisticsMale?.build();
      } catch (e) {
        throw new BuiltValueNestedFieldError(
            r'CattleStatisticsDto', _$failedField, e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
