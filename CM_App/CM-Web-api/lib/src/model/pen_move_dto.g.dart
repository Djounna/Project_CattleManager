// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'pen_move_dto.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$PenMoveDto extends PenMoveDto {
  @override
  final int? cowId;
  @override
  final DateOnly? date;
  @override
  final int? sourcePenId;
  @override
  final int? destinationPenId;

  factory _$PenMoveDto([void Function(PenMoveDtoBuilder)? updates]) =>
      (new PenMoveDtoBuilder()..update(updates))._build();

  _$PenMoveDto._(
      {this.cowId, this.date, this.sourcePenId, this.destinationPenId})
      : super._();

  @override
  PenMoveDto rebuild(void Function(PenMoveDtoBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  PenMoveDtoBuilder toBuilder() => new PenMoveDtoBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is PenMoveDto &&
        cowId == other.cowId &&
        date == other.date &&
        sourcePenId == other.sourcePenId &&
        destinationPenId == other.destinationPenId;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, cowId.hashCode);
    _$hash = $jc(_$hash, date.hashCode);
    _$hash = $jc(_$hash, sourcePenId.hashCode);
    _$hash = $jc(_$hash, destinationPenId.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'PenMoveDto')
          ..add('cowId', cowId)
          ..add('date', date)
          ..add('sourcePenId', sourcePenId)
          ..add('destinationPenId', destinationPenId))
        .toString();
  }
}

class PenMoveDtoBuilder implements Builder<PenMoveDto, PenMoveDtoBuilder> {
  _$PenMoveDto? _$v;

  int? _cowId;
  int? get cowId => _$this._cowId;
  set cowId(int? cowId) => _$this._cowId = cowId;

  DateOnlyBuilder? _date;
  DateOnlyBuilder get date => _$this._date ??= new DateOnlyBuilder();
  set date(DateOnlyBuilder? date) => _$this._date = date;

  int? _sourcePenId;
  int? get sourcePenId => _$this._sourcePenId;
  set sourcePenId(int? sourcePenId) => _$this._sourcePenId = sourcePenId;

  int? _destinationPenId;
  int? get destinationPenId => _$this._destinationPenId;
  set destinationPenId(int? destinationPenId) =>
      _$this._destinationPenId = destinationPenId;

  PenMoveDtoBuilder() {
    PenMoveDto._defaults(this);
  }

  PenMoveDtoBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _cowId = $v.cowId;
      _date = $v.date?.toBuilder();
      _sourcePenId = $v.sourcePenId;
      _destinationPenId = $v.destinationPenId;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(PenMoveDto other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$PenMoveDto;
  }

  @override
  void update(void Function(PenMoveDtoBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  PenMoveDto build() => _build();

  _$PenMoveDto _build() {
    _$PenMoveDto _$result;
    try {
      _$result = _$v ??
          new _$PenMoveDto._(
            cowId: cowId,
            date: _date?.build(),
            sourcePenId: sourcePenId,
            destinationPenId: destinationPenId,
          );
    } catch (_) {
      late String _$failedField;
      try {
        _$failedField = 'date';
        _date?.build();
      } catch (e) {
        throw new BuiltValueNestedFieldError(
            r'PenMoveDto', _$failedField, e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
