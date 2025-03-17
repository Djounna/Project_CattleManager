// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'milking_input_dto.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$MilkingInputDto extends MilkingInputDto {
  @override
  final int? cowId;
  @override
  final bool? done;
  @override
  final double? volume;
  @override
  final DateOnly? date;
  @override
  final bool? cancelled;

  factory _$MilkingInputDto([void Function(MilkingInputDtoBuilder)? updates]) =>
      (new MilkingInputDtoBuilder()..update(updates))._build();

  _$MilkingInputDto._(
      {this.cowId, this.done, this.volume, this.date, this.cancelled})
      : super._();

  @override
  MilkingInputDto rebuild(void Function(MilkingInputDtoBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  MilkingInputDtoBuilder toBuilder() =>
      new MilkingInputDtoBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is MilkingInputDto &&
        cowId == other.cowId &&
        done == other.done &&
        volume == other.volume &&
        date == other.date &&
        cancelled == other.cancelled;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, cowId.hashCode);
    _$hash = $jc(_$hash, done.hashCode);
    _$hash = $jc(_$hash, volume.hashCode);
    _$hash = $jc(_$hash, date.hashCode);
    _$hash = $jc(_$hash, cancelled.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'MilkingInputDto')
          ..add('cowId', cowId)
          ..add('done', done)
          ..add('volume', volume)
          ..add('date', date)
          ..add('cancelled', cancelled))
        .toString();
  }
}

class MilkingInputDtoBuilder
    implements Builder<MilkingInputDto, MilkingInputDtoBuilder> {
  _$MilkingInputDto? _$v;

  int? _cowId;
  int? get cowId => _$this._cowId;
  set cowId(int? cowId) => _$this._cowId = cowId;

  bool? _done;
  bool? get done => _$this._done;
  set done(bool? done) => _$this._done = done;

  double? _volume;
  double? get volume => _$this._volume;
  set volume(double? volume) => _$this._volume = volume;

  DateOnlyBuilder? _date;
  DateOnlyBuilder get date => _$this._date ??= new DateOnlyBuilder();
  set date(DateOnlyBuilder? date) => _$this._date = date;

  bool? _cancelled;
  bool? get cancelled => _$this._cancelled;
  set cancelled(bool? cancelled) => _$this._cancelled = cancelled;

  MilkingInputDtoBuilder() {
    MilkingInputDto._defaults(this);
  }

  MilkingInputDtoBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _cowId = $v.cowId;
      _done = $v.done;
      _volume = $v.volume;
      _date = $v.date?.toBuilder();
      _cancelled = $v.cancelled;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(MilkingInputDto other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$MilkingInputDto;
  }

  @override
  void update(void Function(MilkingInputDtoBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  MilkingInputDto build() => _build();

  _$MilkingInputDto _build() {
    _$MilkingInputDto _$result;
    try {
      _$result = _$v ??
          new _$MilkingInputDto._(
            cowId: cowId,
            done: done,
            volume: volume,
            date: _date?.build(),
            cancelled: cancelled,
          );
    } catch (_) {
      late String _$failedField;
      try {
        _$failedField = 'date';
        _date?.build();
      } catch (e) {
        throw new BuiltValueNestedFieldError(
            r'MilkingInputDto', _$failedField, e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
