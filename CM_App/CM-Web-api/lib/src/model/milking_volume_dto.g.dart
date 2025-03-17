// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'milking_volume_dto.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$MilkingVolumeDto extends MilkingVolumeDto {
  @override
  final DateOnly? date;
  @override
  final double? volume;
  @override
  final double? average;
  @override
  final double? min;
  @override
  final double? max;

  factory _$MilkingVolumeDto(
          [void Function(MilkingVolumeDtoBuilder)? updates]) =>
      (new MilkingVolumeDtoBuilder()..update(updates))._build();

  _$MilkingVolumeDto._(
      {this.date, this.volume, this.average, this.min, this.max})
      : super._();

  @override
  MilkingVolumeDto rebuild(void Function(MilkingVolumeDtoBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  MilkingVolumeDtoBuilder toBuilder() =>
      new MilkingVolumeDtoBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is MilkingVolumeDto &&
        date == other.date &&
        volume == other.volume &&
        average == other.average &&
        min == other.min &&
        max == other.max;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, date.hashCode);
    _$hash = $jc(_$hash, volume.hashCode);
    _$hash = $jc(_$hash, average.hashCode);
    _$hash = $jc(_$hash, min.hashCode);
    _$hash = $jc(_$hash, max.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'MilkingVolumeDto')
          ..add('date', date)
          ..add('volume', volume)
          ..add('average', average)
          ..add('min', min)
          ..add('max', max))
        .toString();
  }
}

class MilkingVolumeDtoBuilder
    implements Builder<MilkingVolumeDto, MilkingVolumeDtoBuilder> {
  _$MilkingVolumeDto? _$v;

  DateOnlyBuilder? _date;
  DateOnlyBuilder get date => _$this._date ??= new DateOnlyBuilder();
  set date(DateOnlyBuilder? date) => _$this._date = date;

  double? _volume;
  double? get volume => _$this._volume;
  set volume(double? volume) => _$this._volume = volume;

  double? _average;
  double? get average => _$this._average;
  set average(double? average) => _$this._average = average;

  double? _min;
  double? get min => _$this._min;
  set min(double? min) => _$this._min = min;

  double? _max;
  double? get max => _$this._max;
  set max(double? max) => _$this._max = max;

  MilkingVolumeDtoBuilder() {
    MilkingVolumeDto._defaults(this);
  }

  MilkingVolumeDtoBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _date = $v.date?.toBuilder();
      _volume = $v.volume;
      _average = $v.average;
      _min = $v.min;
      _max = $v.max;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(MilkingVolumeDto other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$MilkingVolumeDto;
  }

  @override
  void update(void Function(MilkingVolumeDtoBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  MilkingVolumeDto build() => _build();

  _$MilkingVolumeDto _build() {
    _$MilkingVolumeDto _$result;
    try {
      _$result = _$v ??
          new _$MilkingVolumeDto._(
            date: _date?.build(),
            volume: volume,
            average: average,
            min: min,
            max: max,
          );
    } catch (_) {
      late String _$failedField;
      try {
        _$failedField = 'date';
        _date?.build();
      } catch (e) {
        throw new BuiltValueNestedFieldError(
            r'MilkingVolumeDto', _$failedField, e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
