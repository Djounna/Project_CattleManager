// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'group_details_dto.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$GroupDetailsDto extends GroupDetailsDto {
  @override
  final int? id;
  @override
  final String? name;
  @override
  final String? description;
  @override
  final String? imgLink;
  @override
  final BuiltList<CowDto>? cows;

  factory _$GroupDetailsDto([void Function(GroupDetailsDtoBuilder)? updates]) =>
      (new GroupDetailsDtoBuilder()..update(updates))._build();

  _$GroupDetailsDto._(
      {this.id, this.name, this.description, this.imgLink, this.cows})
      : super._();

  @override
  GroupDetailsDto rebuild(void Function(GroupDetailsDtoBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  GroupDetailsDtoBuilder toBuilder() =>
      new GroupDetailsDtoBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is GroupDetailsDto &&
        id == other.id &&
        name == other.name &&
        description == other.description &&
        imgLink == other.imgLink &&
        cows == other.cows;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, id.hashCode);
    _$hash = $jc(_$hash, name.hashCode);
    _$hash = $jc(_$hash, description.hashCode);
    _$hash = $jc(_$hash, imgLink.hashCode);
    _$hash = $jc(_$hash, cows.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'GroupDetailsDto')
          ..add('id', id)
          ..add('name', name)
          ..add('description', description)
          ..add('imgLink', imgLink)
          ..add('cows', cows))
        .toString();
  }
}

class GroupDetailsDtoBuilder
    implements Builder<GroupDetailsDto, GroupDetailsDtoBuilder> {
  _$GroupDetailsDto? _$v;

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

  ListBuilder<CowDto>? _cows;
  ListBuilder<CowDto> get cows => _$this._cows ??= new ListBuilder<CowDto>();
  set cows(ListBuilder<CowDto>? cows) => _$this._cows = cows;

  GroupDetailsDtoBuilder() {
    GroupDetailsDto._defaults(this);
  }

  GroupDetailsDtoBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _id = $v.id;
      _name = $v.name;
      _description = $v.description;
      _imgLink = $v.imgLink;
      _cows = $v.cows?.toBuilder();
      _$v = null;
    }
    return this;
  }

  @override
  void replace(GroupDetailsDto other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$GroupDetailsDto;
  }

  @override
  void update(void Function(GroupDetailsDtoBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  GroupDetailsDto build() => _build();

  _$GroupDetailsDto _build() {
    _$GroupDetailsDto _$result;
    try {
      _$result = _$v ??
          new _$GroupDetailsDto._(
            id: id,
            name: name,
            description: description,
            imgLink: imgLink,
            cows: _cows?.build(),
          );
    } catch (_) {
      late String _$failedField;
      try {
        _$failedField = 'cows';
        _cows?.build();
      } catch (e) {
        throw new BuiltValueNestedFieldError(
            r'GroupDetailsDto', _$failedField, e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
