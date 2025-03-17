// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'intervenant_dto.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$IntervenantDto extends IntervenantDto {
  @override
  final int? id;
  @override
  final String? name;
  @override
  final String? type;
  @override
  final String? coordinates;

  factory _$IntervenantDto([void Function(IntervenantDtoBuilder)? updates]) =>
      (new IntervenantDtoBuilder()..update(updates))._build();

  _$IntervenantDto._({this.id, this.name, this.type, this.coordinates})
      : super._();

  @override
  IntervenantDto rebuild(void Function(IntervenantDtoBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  IntervenantDtoBuilder toBuilder() =>
      new IntervenantDtoBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is IntervenantDto &&
        id == other.id &&
        name == other.name &&
        type == other.type &&
        coordinates == other.coordinates;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, id.hashCode);
    _$hash = $jc(_$hash, name.hashCode);
    _$hash = $jc(_$hash, type.hashCode);
    _$hash = $jc(_$hash, coordinates.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'IntervenantDto')
          ..add('id', id)
          ..add('name', name)
          ..add('type', type)
          ..add('coordinates', coordinates))
        .toString();
  }
}

class IntervenantDtoBuilder
    implements Builder<IntervenantDto, IntervenantDtoBuilder> {
  _$IntervenantDto? _$v;

  int? _id;
  int? get id => _$this._id;
  set id(int? id) => _$this._id = id;

  String? _name;
  String? get name => _$this._name;
  set name(String? name) => _$this._name = name;

  String? _type;
  String? get type => _$this._type;
  set type(String? type) => _$this._type = type;

  String? _coordinates;
  String? get coordinates => _$this._coordinates;
  set coordinates(String? coordinates) => _$this._coordinates = coordinates;

  IntervenantDtoBuilder() {
    IntervenantDto._defaults(this);
  }

  IntervenantDtoBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _id = $v.id;
      _name = $v.name;
      _type = $v.type;
      _coordinates = $v.coordinates;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(IntervenantDto other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$IntervenantDto;
  }

  @override
  void update(void Function(IntervenantDtoBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  IntervenantDto build() => _build();

  _$IntervenantDto _build() {
    final _$result = _$v ??
        new _$IntervenantDto._(
          id: id,
          name: name,
          type: type,
          coordinates: coordinates,
        );
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
