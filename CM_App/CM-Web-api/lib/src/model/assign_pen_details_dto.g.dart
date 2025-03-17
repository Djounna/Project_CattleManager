// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'assign_pen_details_dto.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$AssignPenDetailsDto extends AssignPenDetailsDto {
  @override
  final PenDetailsDto? pen1;
  @override
  final PenDetailsDto? pen2;

  factory _$AssignPenDetailsDto(
          [void Function(AssignPenDetailsDtoBuilder)? updates]) =>
      (new AssignPenDetailsDtoBuilder()..update(updates))._build();

  _$AssignPenDetailsDto._({this.pen1, this.pen2}) : super._();

  @override
  AssignPenDetailsDto rebuild(
          void Function(AssignPenDetailsDtoBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  AssignPenDetailsDtoBuilder toBuilder() =>
      new AssignPenDetailsDtoBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is AssignPenDetailsDto &&
        pen1 == other.pen1 &&
        pen2 == other.pen2;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, pen1.hashCode);
    _$hash = $jc(_$hash, pen2.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'AssignPenDetailsDto')
          ..add('pen1', pen1)
          ..add('pen2', pen2))
        .toString();
  }
}

class AssignPenDetailsDtoBuilder
    implements Builder<AssignPenDetailsDto, AssignPenDetailsDtoBuilder> {
  _$AssignPenDetailsDto? _$v;

  PenDetailsDtoBuilder? _pen1;
  PenDetailsDtoBuilder get pen1 => _$this._pen1 ??= new PenDetailsDtoBuilder();
  set pen1(PenDetailsDtoBuilder? pen1) => _$this._pen1 = pen1;

  PenDetailsDtoBuilder? _pen2;
  PenDetailsDtoBuilder get pen2 => _$this._pen2 ??= new PenDetailsDtoBuilder();
  set pen2(PenDetailsDtoBuilder? pen2) => _$this._pen2 = pen2;

  AssignPenDetailsDtoBuilder() {
    AssignPenDetailsDto._defaults(this);
  }

  AssignPenDetailsDtoBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _pen1 = $v.pen1?.toBuilder();
      _pen2 = $v.pen2?.toBuilder();
      _$v = null;
    }
    return this;
  }

  @override
  void replace(AssignPenDetailsDto other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$AssignPenDetailsDto;
  }

  @override
  void update(void Function(AssignPenDetailsDtoBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  AssignPenDetailsDto build() => _build();

  _$AssignPenDetailsDto _build() {
    _$AssignPenDetailsDto _$result;
    try {
      _$result = _$v ??
          new _$AssignPenDetailsDto._(
            pen1: _pen1?.build(),
            pen2: _pen2?.build(),
          );
    } catch (_) {
      late String _$failedField;
      try {
        _$failedField = 'pen1';
        _pen1?.build();
        _$failedField = 'pen2';
        _pen2?.build();
      } catch (e) {
        throw new BuiltValueNestedFieldError(
            r'AssignPenDetailsDto', _$failedField, e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
