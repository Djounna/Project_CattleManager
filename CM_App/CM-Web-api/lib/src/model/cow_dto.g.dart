// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'cow_dto.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$CowDto extends CowDto {
  @override
  final int? id;
  @override
  final String? identifier;
  @override
  final String? name;
  @override
  final bool? milkCow;
  @override
  final DateTime? birthDate;
  @override
  final String? race;
  @override
  final String? gender;
  @override
  final String? imgLink;
  @override
  final int? motherId;
  @override
  final int? fatherId;
  @override
  final int? penId;
  @override
  final int? groupId;

  factory _$CowDto([void Function(CowDtoBuilder)? updates]) =>
      (new CowDtoBuilder()..update(updates))._build();

  _$CowDto._(
      {this.id,
      this.identifier,
      this.name,
      this.milkCow,
      this.birthDate,
      this.race,
      this.gender,
      this.imgLink,
      this.motherId,
      this.fatherId,
      this.penId,
      this.groupId})
      : super._();

  @override
  CowDto rebuild(void Function(CowDtoBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  CowDtoBuilder toBuilder() => new CowDtoBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is CowDto &&
        id == other.id &&
        identifier == other.identifier &&
        name == other.name &&
        milkCow == other.milkCow &&
        birthDate == other.birthDate &&
        race == other.race &&
        gender == other.gender &&
        imgLink == other.imgLink &&
        motherId == other.motherId &&
        fatherId == other.fatherId &&
        penId == other.penId &&
        groupId == other.groupId;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, id.hashCode);
    _$hash = $jc(_$hash, identifier.hashCode);
    _$hash = $jc(_$hash, name.hashCode);
    _$hash = $jc(_$hash, milkCow.hashCode);
    _$hash = $jc(_$hash, birthDate.hashCode);
    _$hash = $jc(_$hash, race.hashCode);
    _$hash = $jc(_$hash, gender.hashCode);
    _$hash = $jc(_$hash, imgLink.hashCode);
    _$hash = $jc(_$hash, motherId.hashCode);
    _$hash = $jc(_$hash, fatherId.hashCode);
    _$hash = $jc(_$hash, penId.hashCode);
    _$hash = $jc(_$hash, groupId.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'CowDto')
          ..add('id', id)
          ..add('identifier', identifier)
          ..add('name', name)
          ..add('milkCow', milkCow)
          ..add('birthDate', birthDate)
          ..add('race', race)
          ..add('gender', gender)
          ..add('imgLink', imgLink)
          ..add('motherId', motherId)
          ..add('fatherId', fatherId)
          ..add('penId', penId)
          ..add('groupId', groupId))
        .toString();
  }
}

class CowDtoBuilder implements Builder<CowDto, CowDtoBuilder> {
  _$CowDto? _$v;

  int? _id;
  int? get id => _$this._id;
  set id(int? id) => _$this._id = id;

  String? _identifier;
  String? get identifier => _$this._identifier;
  set identifier(String? identifier) => _$this._identifier = identifier;

  String? _name;
  String? get name => _$this._name;
  set name(String? name) => _$this._name = name;

  bool? _milkCow;
  bool? get milkCow => _$this._milkCow;
  set milkCow(bool? milkCow) => _$this._milkCow = milkCow;

  DateTime? _birthDate;
  DateTime? get birthDate => _$this._birthDate;
  set birthDate(DateTime? birthDate) => _$this._birthDate = birthDate;

  String? _race;
  String? get race => _$this._race;
  set race(String? race) => _$this._race = race;

  String? _gender;
  String? get gender => _$this._gender;
  set gender(String? gender) => _$this._gender = gender;

  String? _imgLink;
  String? get imgLink => _$this._imgLink;
  set imgLink(String? imgLink) => _$this._imgLink = imgLink;

  int? _motherId;
  int? get motherId => _$this._motherId;
  set motherId(int? motherId) => _$this._motherId = motherId;

  int? _fatherId;
  int? get fatherId => _$this._fatherId;
  set fatherId(int? fatherId) => _$this._fatherId = fatherId;

  int? _penId;
  int? get penId => _$this._penId;
  set penId(int? penId) => _$this._penId = penId;

  int? _groupId;
  int? get groupId => _$this._groupId;
  set groupId(int? groupId) => _$this._groupId = groupId;

  CowDtoBuilder() {
    CowDto._defaults(this);
  }

  CowDtoBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _id = $v.id;
      _identifier = $v.identifier;
      _name = $v.name;
      _milkCow = $v.milkCow;
      _birthDate = $v.birthDate;
      _race = $v.race;
      _gender = $v.gender;
      _imgLink = $v.imgLink;
      _motherId = $v.motherId;
      _fatherId = $v.fatherId;
      _penId = $v.penId;
      _groupId = $v.groupId;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(CowDto other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$CowDto;
  }

  @override
  void update(void Function(CowDtoBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  CowDto build() => _build();

  _$CowDto _build() {
    final _$result = _$v ??
        new _$CowDto._(
          id: id,
          identifier: identifier,
          name: name,
          milkCow: milkCow,
          birthDate: birthDate,
          race: race,
          gender: gender,
          imgLink: imgLink,
          motherId: motherId,
          fatherId: fatherId,
          penId: penId,
          groupId: groupId,
        );
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
