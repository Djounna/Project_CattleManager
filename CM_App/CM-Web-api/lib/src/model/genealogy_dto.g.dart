// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'genealogy_dto.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$GenealogyDto extends GenealogyDto {
  @override
  final ParentDto? mother;
  @override
  final ParentDto? father;

  factory _$GenealogyDto([void Function(GenealogyDtoBuilder)? updates]) =>
      (new GenealogyDtoBuilder()..update(updates))._build();

  _$GenealogyDto._({this.mother, this.father}) : super._();

  @override
  GenealogyDto rebuild(void Function(GenealogyDtoBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  GenealogyDtoBuilder toBuilder() => new GenealogyDtoBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is GenealogyDto &&
        mother == other.mother &&
        father == other.father;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, mother.hashCode);
    _$hash = $jc(_$hash, father.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'GenealogyDto')
          ..add('mother', mother)
          ..add('father', father))
        .toString();
  }
}

class GenealogyDtoBuilder
    implements Builder<GenealogyDto, GenealogyDtoBuilder> {
  _$GenealogyDto? _$v;

  ParentDtoBuilder? _mother;
  ParentDtoBuilder get mother => _$this._mother ??= new ParentDtoBuilder();
  set mother(ParentDtoBuilder? mother) => _$this._mother = mother;

  ParentDtoBuilder? _father;
  ParentDtoBuilder get father => _$this._father ??= new ParentDtoBuilder();
  set father(ParentDtoBuilder? father) => _$this._father = father;

  GenealogyDtoBuilder() {
    GenealogyDto._defaults(this);
  }

  GenealogyDtoBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _mother = $v.mother?.toBuilder();
      _father = $v.father?.toBuilder();
      _$v = null;
    }
    return this;
  }

  @override
  void replace(GenealogyDto other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$GenealogyDto;
  }

  @override
  void update(void Function(GenealogyDtoBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  GenealogyDto build() => _build();

  _$GenealogyDto _build() {
    _$GenealogyDto _$result;
    try {
      _$result = _$v ??
          new _$GenealogyDto._(
            mother: _mother?.build(),
            father: _father?.build(),
          );
    } catch (_) {
      late String _$failedField;
      try {
        _$failedField = 'mother';
        _mother?.build();
        _$failedField = 'father';
        _father?.build();
      } catch (e) {
        throw new BuiltValueNestedFieldError(
            r'GenealogyDto', _$failedField, e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
