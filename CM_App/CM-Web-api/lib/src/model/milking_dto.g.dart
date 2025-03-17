// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'milking_dto.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$MilkingDto extends MilkingDto {
  @override
  final int? id;
  @override
  final int? cowId;
  @override
  final DateOnly? date;
  @override
  final double? volume;
  @override
  final bool? cancelled;

  factory _$MilkingDto([void Function(MilkingDtoBuilder)? updates]) =>
      (new MilkingDtoBuilder()..update(updates))._build();

  _$MilkingDto._({this.id, this.cowId, this.date, this.volume, this.cancelled})
      : super._();

  @override
  MilkingDto rebuild(void Function(MilkingDtoBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  MilkingDtoBuilder toBuilder() => new MilkingDtoBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is MilkingDto &&
        id == other.id &&
        cowId == other.cowId &&
        date == other.date &&
        volume == other.volume &&
        cancelled == other.cancelled;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, id.hashCode);
    _$hash = $jc(_$hash, cowId.hashCode);
    _$hash = $jc(_$hash, date.hashCode);
    _$hash = $jc(_$hash, volume.hashCode);
    _$hash = $jc(_$hash, cancelled.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'MilkingDto')
          ..add('id', id)
          ..add('cowId', cowId)
          ..add('date', date)
          ..add('volume', volume)
          ..add('cancelled', cancelled))
        .toString();
  }
}

class MilkingDtoBuilder implements Builder<MilkingDto, MilkingDtoBuilder> {
  _$MilkingDto? _$v;

  int? _id;
  int? get id => _$this._id;
  set id(int? id) => _$this._id = id;

  int? _cowId;
  int? get cowId => _$this._cowId;
  set cowId(int? cowId) => _$this._cowId = cowId;

  DateOnlyBuilder? _date;
  DateOnlyBuilder get date => _$this._date ??= new DateOnlyBuilder();
  set date(DateOnlyBuilder? date) => _$this._date = date;

  double? _volume;
  double? get volume => _$this._volume;
  set volume(double? volume) => _$this._volume = volume;

  bool? _cancelled;
  bool? get cancelled => _$this._cancelled;
  set cancelled(bool? cancelled) => _$this._cancelled = cancelled;

  MilkingDtoBuilder() {
    MilkingDto._defaults(this);
  }

  MilkingDtoBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _id = $v.id;
      _cowId = $v.cowId;
      _date = $v.date?.toBuilder();
      _volume = $v.volume;
      _cancelled = $v.cancelled;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(MilkingDto other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$MilkingDto;
  }

  @override
  void update(void Function(MilkingDtoBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  MilkingDto build() => _build();

  _$MilkingDto _build() {
    _$MilkingDto _$result;
    try {
      _$result = _$v ??
          new _$MilkingDto._(
            id: id,
            cowId: cowId,
            date: _date?.build(),
            volume: volume,
            cancelled: cancelled,
          );
    } catch (_) {
      late String _$failedField;
      try {
        _$failedField = 'date';
        _date?.build();
      } catch (e) {
        throw new BuiltValueNestedFieldError(
            r'MilkingDto', _$failedField, e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
