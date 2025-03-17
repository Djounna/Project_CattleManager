// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'group_dto.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$GroupDto extends GroupDto {
  @override
  final int? id;
  @override
  final String? name;
  @override
  final String? description;
  @override
  final String? imgLink;

  factory _$GroupDto([void Function(GroupDtoBuilder)? updates]) =>
      (new GroupDtoBuilder()..update(updates))._build();

  _$GroupDto._({this.id, this.name, this.description, this.imgLink})
      : super._();

  @override
  GroupDto rebuild(void Function(GroupDtoBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  GroupDtoBuilder toBuilder() => new GroupDtoBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is GroupDto &&
        id == other.id &&
        name == other.name &&
        description == other.description &&
        imgLink == other.imgLink;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, id.hashCode);
    _$hash = $jc(_$hash, name.hashCode);
    _$hash = $jc(_$hash, description.hashCode);
    _$hash = $jc(_$hash, imgLink.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'GroupDto')
          ..add('id', id)
          ..add('name', name)
          ..add('description', description)
          ..add('imgLink', imgLink))
        .toString();
  }
}

class GroupDtoBuilder implements Builder<GroupDto, GroupDtoBuilder> {
  _$GroupDto? _$v;

  int? _id;
  int? get id => _$this._id;
  set id(int? id) => _$this._id = id;

  String? _name;
  String? get name => _$this._name;
  set name(String? name) => _$this._name = name;

  String? _description;
  String? get description => _$this._description;
  set description(String? description) => _$this._description = description;

  String? _imgLink;
  String? get imgLink => _$this._imgLink;
  set imgLink(String? imgLink) => _$this._imgLink = imgLink;

  GroupDtoBuilder() {
    GroupDto._defaults(this);
  }

  GroupDtoBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _id = $v.id;
      _name = $v.name;
      _description = $v.description;
      _imgLink = $v.imgLink;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(GroupDto other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$GroupDto;
  }

  @override
  void update(void Function(GroupDtoBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  GroupDto build() => _build();

  _$GroupDto _build() {
    final _$result = _$v ??
        new _$GroupDto._(
          id: id,
          name: name,
          description: description,
          imgLink: imgLink,
        );
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
