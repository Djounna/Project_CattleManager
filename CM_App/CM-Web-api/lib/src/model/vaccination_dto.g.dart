// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'vaccination_dto.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$VaccinationDto extends VaccinationDto {
  @override
  final int? id;
  @override
  final String? name;
  @override
  final int? cowId;
  @override
  final DateTime? date;

  factory _$VaccinationDto([void Function(VaccinationDtoBuilder)? updates]) =>
      (new VaccinationDtoBuilder()..update(updates))._build();

  _$VaccinationDto._({this.id, this.name, this.cowId, this.date}) : super._();

  @override
  VaccinationDto rebuild(void Function(VaccinationDtoBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  VaccinationDtoBuilder toBuilder() =>
      new VaccinationDtoBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is VaccinationDto &&
        id == other.id &&
        name == other.name &&
        cowId == other.cowId &&
        date == other.date;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, id.hashCode);
    _$hash = $jc(_$hash, name.hashCode);
    _$hash = $jc(_$hash, cowId.hashCode);
    _$hash = $jc(_$hash, date.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'VaccinationDto')
          ..add('id', id)
          ..add('name', name)
          ..add('cowId', cowId)
          ..add('date', date))
        .toString();
  }
}

class VaccinationDtoBuilder
    implements Builder<VaccinationDto, VaccinationDtoBuilder> {
  _$VaccinationDto? _$v;

  int? _id;
  int? get id => _$this._id;
  set id(int? id) => _$this._id = id;

  String? _name;
  String? get name => _$this._name;
  set name(String? name) => _$this._name = name;

  int? _cowId;
  int? get cowId => _$this._cowId;
  set cowId(int? cowId) => _$this._cowId = cowId;

  DateTime? _date;
  DateTime? get date => _$this._date;
  set date(DateTime? date) => _$this._date = date;

  VaccinationDtoBuilder() {
    VaccinationDto._defaults(this);
  }

  VaccinationDtoBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _id = $v.id;
      _name = $v.name;
      _cowId = $v.cowId;
      _date = $v.date;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(VaccinationDto other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$VaccinationDto;
  }

  @override
  void update(void Function(VaccinationDtoBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  VaccinationDto build() => _build();

  _$VaccinationDto _build() {
    final _$result = _$v ??
        new _$VaccinationDto._(
          id: id,
          name: name,
          cowId: cowId,
          date: date,
        );
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
