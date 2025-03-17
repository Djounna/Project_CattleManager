// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'milk_production_dto.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$MilkProductionDto extends MilkProductionDto {
  @override
  final int? id;
  @override
  final int? cowId;
  @override
  final double? weeklyProduction;
  @override
  final double? monthlyProduction;
  @override
  final double? lifetimeAverage;
  @override
  final double? totalQuantity;
  @override
  final double? totalDays;

  factory _$MilkProductionDto(
          [void Function(MilkProductionDtoBuilder)? updates]) =>
      (new MilkProductionDtoBuilder()..update(updates))._build();

  _$MilkProductionDto._(
      {this.id,
      this.cowId,
      this.weeklyProduction,
      this.monthlyProduction,
      this.lifetimeAverage,
      this.totalQuantity,
      this.totalDays})
      : super._();

  @override
  MilkProductionDto rebuild(void Function(MilkProductionDtoBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  MilkProductionDtoBuilder toBuilder() =>
      new MilkProductionDtoBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is MilkProductionDto &&
        id == other.id &&
        cowId == other.cowId &&
        weeklyProduction == other.weeklyProduction &&
        monthlyProduction == other.monthlyProduction &&
        lifetimeAverage == other.lifetimeAverage &&
        totalQuantity == other.totalQuantity &&
        totalDays == other.totalDays;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, id.hashCode);
    _$hash = $jc(_$hash, cowId.hashCode);
    _$hash = $jc(_$hash, weeklyProduction.hashCode);
    _$hash = $jc(_$hash, monthlyProduction.hashCode);
    _$hash = $jc(_$hash, lifetimeAverage.hashCode);
    _$hash = $jc(_$hash, totalQuantity.hashCode);
    _$hash = $jc(_$hash, totalDays.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'MilkProductionDto')
          ..add('id', id)
          ..add('cowId', cowId)
          ..add('weeklyProduction', weeklyProduction)
          ..add('monthlyProduction', monthlyProduction)
          ..add('lifetimeAverage', lifetimeAverage)
          ..add('totalQuantity', totalQuantity)
          ..add('totalDays', totalDays))
        .toString();
  }
}

class MilkProductionDtoBuilder
    implements Builder<MilkProductionDto, MilkProductionDtoBuilder> {
  _$MilkProductionDto? _$v;

  int? _id;
  int? get id => _$this._id;
  set id(int? id) => _$this._id = id;

  int? _cowId;
  int? get cowId => _$this._cowId;
  set cowId(int? cowId) => _$this._cowId = cowId;

  double? _weeklyProduction;
  double? get weeklyProduction => _$this._weeklyProduction;
  set weeklyProduction(double? weeklyProduction) =>
      _$this._weeklyProduction = weeklyProduction;

  double? _monthlyProduction;
  double? get monthlyProduction => _$this._monthlyProduction;
  set monthlyProduction(double? monthlyProduction) =>
      _$this._monthlyProduction = monthlyProduction;

  double? _lifetimeAverage;
  double? get lifetimeAverage => _$this._lifetimeAverage;
  set lifetimeAverage(double? lifetimeAverage) =>
      _$this._lifetimeAverage = lifetimeAverage;

  double? _totalQuantity;
  double? get totalQuantity => _$this._totalQuantity;
  set totalQuantity(double? totalQuantity) =>
      _$this._totalQuantity = totalQuantity;

  double? _totalDays;
  double? get totalDays => _$this._totalDays;
  set totalDays(double? totalDays) => _$this._totalDays = totalDays;

  MilkProductionDtoBuilder() {
    MilkProductionDto._defaults(this);
  }

  MilkProductionDtoBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _id = $v.id;
      _cowId = $v.cowId;
      _weeklyProduction = $v.weeklyProduction;
      _monthlyProduction = $v.monthlyProduction;
      _lifetimeAverage = $v.lifetimeAverage;
      _totalQuantity = $v.totalQuantity;
      _totalDays = $v.totalDays;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(MilkProductionDto other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$MilkProductionDto;
  }

  @override
  void update(void Function(MilkProductionDtoBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  MilkProductionDto build() => _build();

  _$MilkProductionDto _build() {
    final _$result = _$v ??
        new _$MilkProductionDto._(
          id: id,
          cowId: cowId,
          weeklyProduction: weeklyProduction,
          monthlyProduction: monthlyProduction,
          lifetimeAverage: lifetimeAverage,
          totalQuantity: totalQuantity,
          totalDays: totalDays,
        );
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
