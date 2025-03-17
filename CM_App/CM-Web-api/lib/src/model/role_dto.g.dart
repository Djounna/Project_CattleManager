// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'role_dto.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$RoleDto extends RoleDto {
  @override
  final int? id;
  @override
  final String? name;
  @override
  final String? description;

  factory _$RoleDto([void Function(RoleDtoBuilder)? updates]) =>
      (new RoleDtoBuilder()..update(updates))._build();

  _$RoleDto._({this.id, this.name, this.description}) : super._();

  @override
  RoleDto rebuild(void Function(RoleDtoBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  RoleDtoBuilder toBuilder() => new RoleDtoBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is RoleDto &&
        id == other.id &&
        name == other.name &&
        description == other.description;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, id.hashCode);
    _$hash = $jc(_$hash, name.hashCode);
    _$hash = $jc(_$hash, description.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'RoleDto')
          ..add('id', id)
          ..add('name', name)
          ..add('description', description))
        .toString();
  }
}

class RoleDtoBuilder implements Builder<RoleDto, RoleDtoBuilder> {
  _$RoleDto? _$v;

  int? _id;
  int? get id => _$this._id;
  set id(int? id) => _$this._id = id;

  String? _name;
  String? get name => _$this._name;
  set name(String? name) => _$this._name = name;

  String? _description;
  String? get description => _$this._description;
  set description(String? description) => _$this._description = description;

  RoleDtoBuilder() {
    RoleDto._defaults(this);
  }

  RoleDtoBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _id = $v.id;
      _name = $v.name;
      _description = $v.description;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(RoleDto other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$RoleDto;
  }

  @override
  void update(void Function(RoleDtoBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  RoleDto build() => _build();

  _$RoleDto _build() {
    final _$result = _$v ??
        new _$RoleDto._(
          id: id,
          name: name,
          description: description,
        );
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
