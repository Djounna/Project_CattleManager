// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'cow_details_dto.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$CowDetailsDto extends CowDetailsDto {
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
  final PenDto? pen;
  @override
  final GroupDto? group;
  @override
  final BuiltList<MilkingDto>? milkings;
  @override
  final BuiltList<InterventionDto>? interventions;
  @override
  final BuiltList<VaccinationDto>? vaccinations;
  @override
  final BuiltList<GestationDto>? gestations;
  @override
  final GenealogyDto? genealogy;
  @override
  final BuiltList<CowDto>? children;
  @override
  final BuiltList<PenMoveDto>? penMoves;
  @override
  final BuiltList<GroupMoveDto>? groupMoves;

  factory _$CowDetailsDto([void Function(CowDetailsDtoBuilder)? updates]) =>
      (new CowDetailsDtoBuilder()..update(updates))._build();

  _$CowDetailsDto._(
      {this.id,
      this.identifier,
      this.name,
      this.milkCow,
      this.birthDate,
      this.race,
      this.gender,
      this.imgLink,
      this.pen,
      this.group,
      this.milkings,
      this.interventions,
      this.vaccinations,
      this.gestations,
      this.genealogy,
      this.children,
      this.penMoves,
      this.groupMoves})
      : super._();

  @override
  CowDetailsDto rebuild(void Function(CowDetailsDtoBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  CowDetailsDtoBuilder toBuilder() => new CowDetailsDtoBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is CowDetailsDto &&
        id == other.id &&
        identifier == other.identifier &&
        name == other.name &&
        milkCow == other.milkCow &&
        birthDate == other.birthDate &&
        race == other.race &&
        gender == other.gender &&
        imgLink == other.imgLink &&
        pen == other.pen &&
        group == other.group &&
        milkings == other.milkings &&
        interventions == other.interventions &&
        vaccinations == other.vaccinations &&
        gestations == other.gestations &&
        genealogy == other.genealogy &&
        children == other.children &&
        penMoves == other.penMoves &&
        groupMoves == other.groupMoves;
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
    _$hash = $jc(_$hash, pen.hashCode);
    _$hash = $jc(_$hash, group.hashCode);
    _$hash = $jc(_$hash, milkings.hashCode);
    _$hash = $jc(_$hash, interventions.hashCode);
    _$hash = $jc(_$hash, vaccinations.hashCode);
    _$hash = $jc(_$hash, gestations.hashCode);
    _$hash = $jc(_$hash, genealogy.hashCode);
    _$hash = $jc(_$hash, children.hashCode);
    _$hash = $jc(_$hash, penMoves.hashCode);
    _$hash = $jc(_$hash, groupMoves.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'CowDetailsDto')
          ..add('id', id)
          ..add('identifier', identifier)
          ..add('name', name)
          ..add('milkCow', milkCow)
          ..add('birthDate', birthDate)
          ..add('race', race)
          ..add('gender', gender)
          ..add('imgLink', imgLink)
          ..add('pen', pen)
          ..add('group', group)
          ..add('milkings', milkings)
          ..add('interventions', interventions)
          ..add('vaccinations', vaccinations)
          ..add('gestations', gestations)
          ..add('genealogy', genealogy)
          ..add('children', children)
          ..add('penMoves', penMoves)
          ..add('groupMoves', groupMoves))
        .toString();
  }
}

class CowDetailsDtoBuilder
    implements Builder<CowDetailsDto, CowDetailsDtoBuilder> {
  _$CowDetailsDto? _$v;

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

  PenDtoBuilder? _pen;
  PenDtoBuilder get pen => _$this._pen ??= new PenDtoBuilder();
  set pen(PenDtoBuilder? pen) => _$this._pen = pen;

  GroupDtoBuilder? _group;
  GroupDtoBuilder get group => _$this._group ??= new GroupDtoBuilder();
  set group(GroupDtoBuilder? group) => _$this._group = group;

  ListBuilder<MilkingDto>? _milkings;
  ListBuilder<MilkingDto> get milkings =>
      _$this._milkings ??= new ListBuilder<MilkingDto>();
  set milkings(ListBuilder<MilkingDto>? milkings) =>
      _$this._milkings = milkings;

  ListBuilder<InterventionDto>? _interventions;
  ListBuilder<InterventionDto> get interventions =>
      _$this._interventions ??= new ListBuilder<InterventionDto>();
  set interventions(ListBuilder<InterventionDto>? interventions) =>
      _$this._interventions = interventions;

  ListBuilder<VaccinationDto>? _vaccinations;
  ListBuilder<VaccinationDto> get vaccinations =>
      _$this._vaccinations ??= new ListBuilder<VaccinationDto>();
  set vaccinations(ListBuilder<VaccinationDto>? vaccinations) =>
      _$this._vaccinations = vaccinations;

  ListBuilder<GestationDto>? _gestations;
  ListBuilder<GestationDto> get gestations =>
      _$this._gestations ??= new ListBuilder<GestationDto>();
  set gestations(ListBuilder<GestationDto>? gestations) =>
      _$this._gestations = gestations;

  GenealogyDtoBuilder? _genealogy;
  GenealogyDtoBuilder get genealogy =>
      _$this._genealogy ??= new GenealogyDtoBuilder();
  set genealogy(GenealogyDtoBuilder? genealogy) =>
      _$this._genealogy = genealogy;

  ListBuilder<CowDto>? _children;
  ListBuilder<CowDto> get children =>
      _$this._children ??= new ListBuilder<CowDto>();
  set children(ListBuilder<CowDto>? children) => _$this._children = children;

  ListBuilder<PenMoveDto>? _penMoves;
  ListBuilder<PenMoveDto> get penMoves =>
      _$this._penMoves ??= new ListBuilder<PenMoveDto>();
  set penMoves(ListBuilder<PenMoveDto>? penMoves) =>
      _$this._penMoves = penMoves;

  ListBuilder<GroupMoveDto>? _groupMoves;
  ListBuilder<GroupMoveDto> get groupMoves =>
      _$this._groupMoves ??= new ListBuilder<GroupMoveDto>();
  set groupMoves(ListBuilder<GroupMoveDto>? groupMoves) =>
      _$this._groupMoves = groupMoves;

  CowDetailsDtoBuilder() {
    CowDetailsDto._defaults(this);
  }

  CowDetailsDtoBuilder get _$this {
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
      _pen = $v.pen?.toBuilder();
      _group = $v.group?.toBuilder();
      _milkings = $v.milkings?.toBuilder();
      _interventions = $v.interventions?.toBuilder();
      _vaccinations = $v.vaccinations?.toBuilder();
      _gestations = $v.gestations?.toBuilder();
      _genealogy = $v.genealogy?.toBuilder();
      _children = $v.children?.toBuilder();
      _penMoves = $v.penMoves?.toBuilder();
      _groupMoves = $v.groupMoves?.toBuilder();
      _$v = null;
    }
    return this;
  }

  @override
  void replace(CowDetailsDto other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$CowDetailsDto;
  }

  @override
  void update(void Function(CowDetailsDtoBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  CowDetailsDto build() => _build();

  _$CowDetailsDto _build() {
    _$CowDetailsDto _$result;
    try {
      _$result = _$v ??
          new _$CowDetailsDto._(
            id: id,
            identifier: identifier,
            name: name,
            milkCow: milkCow,
            birthDate: birthDate,
            race: race,
            gender: gender,
            imgLink: imgLink,
            pen: _pen?.build(),
            group: _group?.build(),
            milkings: _milkings?.build(),
            interventions: _interventions?.build(),
            vaccinations: _vaccinations?.build(),
            gestations: _gestations?.build(),
            genealogy: _genealogy?.build(),
            children: _children?.build(),
            penMoves: _penMoves?.build(),
            groupMoves: _groupMoves?.build(),
          );
    } catch (_) {
      late String _$failedField;
      try {
        _$failedField = 'pen';
        _pen?.build();
        _$failedField = 'group';
        _group?.build();
        _$failedField = 'milkings';
        _milkings?.build();
        _$failedField = 'interventions';
        _interventions?.build();
        _$failedField = 'vaccinations';
        _vaccinations?.build();
        _$failedField = 'gestations';
        _gestations?.build();
        _$failedField = 'genealogy';
        _genealogy?.build();
        _$failedField = 'children';
        _children?.build();
        _$failedField = 'penMoves';
        _penMoves?.build();
        _$failedField = 'groupMoves';
        _groupMoves?.build();
      } catch (e) {
        throw new BuiltValueNestedFieldError(
            r'CowDetailsDto', _$failedField, e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
