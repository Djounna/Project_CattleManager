// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'parent_dto.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$ParentDto extends ParentDto {
  @override
  final CowDto? cow;
  @override
  final CowDto? mother;
  @override
  final CowDto? father;

  factory _$ParentDto([void Function(ParentDtoBuilder)? updates]) =>
      (new ParentDtoBuilder()..update(updates))._build();

  _$ParentDto._({this.cow, this.mother, this.father}) : super._();

  @override
  ParentDto rebuild(void Function(ParentDtoBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  ParentDtoBuilder toBuilder() => new ParentDtoBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is ParentDto &&
        cow == other.cow &&
        mother == other.mother &&
        father == other.father;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, cow.hashCode);
    _$hash = $jc(_$hash, mother.hashCode);
    _$hash = $jc(_$hash, father.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'ParentDto')
          ..add('cow', cow)
          ..add('mother', mother)
          ..add('father', father))
        .toString();
  }
}

class ParentDtoBuilder implements Builder<ParentDto, ParentDtoBuilder> {
  _$ParentDto? _$v;

  CowDtoBuilder? _cow;
  CowDtoBuilder get cow => _$this._cow ??= new CowDtoBuilder();
  set cow(CowDtoBuilder? cow) => _$this._cow = cow;

  CowDtoBuilder? _mother;
  CowDtoBuilder get mother => _$this._mother ??= new CowDtoBuilder();
  set mother(CowDtoBuilder? mother) => _$this._mother = mother;

  CowDtoBuilder? _father;
  CowDtoBuilder get father => _$this._father ??= new CowDtoBuilder();
  set father(CowDtoBuilder? father) => _$this._father = father;

  ParentDtoBuilder() {
    ParentDto._defaults(this);
  }

  ParentDtoBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _cow = $v.cow?.toBuilder();
      _mother = $v.mother?.toBuilder();
      _father = $v.father?.toBuilder();
      _$v = null;
    }
    return this;
  }

  @override
  void replace(ParentDto other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$ParentDto;
  }

  @override
  void update(void Function(ParentDtoBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  ParentDto build() => _build();

  _$ParentDto _build() {
    _$ParentDto _$result;
    try {
      _$result = _$v ??
          new _$ParentDto._(
            cow: _cow?.build(),
            mother: _mother?.build(),
            father: _father?.build(),
          );
    } catch (_) {
      late String _$failedField;
      try {
        _$failedField = 'cow';
        _cow?.build();
        _$failedField = 'mother';
        _mother?.build();
        _$failedField = 'father';
        _father?.build();
      } catch (e) {
        throw new BuiltValueNestedFieldError(
            r'ParentDto', _$failedField, e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
