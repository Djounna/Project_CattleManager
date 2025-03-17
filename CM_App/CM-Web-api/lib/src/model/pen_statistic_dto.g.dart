// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'pen_statistic_dto.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$PenStatisticDto extends PenStatisticDto {
  @override
  final int? penId;
  @override
  final String? penName;
  @override
  final int? number;

  factory _$PenStatisticDto([void Function(PenStatisticDtoBuilder)? updates]) =>
      (new PenStatisticDtoBuilder()..update(updates))._build();

  _$PenStatisticDto._({this.penId, this.penName, this.number}) : super._();

  @override
  PenStatisticDto rebuild(void Function(PenStatisticDtoBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  PenStatisticDtoBuilder toBuilder() =>
      new PenStatisticDtoBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is PenStatisticDto &&
        penId == other.penId &&
        penName == other.penName &&
        number == other.number;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, penId.hashCode);
    _$hash = $jc(_$hash, penName.hashCode);
    _$hash = $jc(_$hash, number.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'PenStatisticDto')
          ..add('penId', penId)
          ..add('penName', penName)
          ..add('number', number))
        .toString();
  }
}

class PenStatisticDtoBuilder
    implements Builder<PenStatisticDto, PenStatisticDtoBuilder> {
  _$PenStatisticDto? _$v;

  int? _penId;
  int? get penId => _$this._penId;
  set penId(int? penId) => _$this._penId = penId;

  String? _penName;
  String? get penName => _$this._penName;
  set penName(String? penName) => _$this._penName = penName;

  int? _number;
  int? get number => _$this._number;
  set number(int? number) => _$this._number = number;

  PenStatisticDtoBuilder() {
    PenStatisticDto._defaults(this);
  }

  PenStatisticDtoBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _penId = $v.penId;
      _penName = $v.penName;
      _number = $v.number;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(PenStatisticDto other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$PenStatisticDto;
  }

  @override
  void update(void Function(PenStatisticDtoBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  PenStatisticDto build() => _build();

  _$PenStatisticDto _build() {
    final _$result = _$v ??
        new _$PenStatisticDto._(
          penId: penId,
          penName: penName,
          number: number,
        );
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
