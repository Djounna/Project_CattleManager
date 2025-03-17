// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'intervention_dto.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$InterventionDto extends InterventionDto {
  @override
  final int? id;
  @override
  final int? cowId;
  @override
  final int? intervenantId;
  @override
  final String? type;
  @override
  final String? status;
  @override
  final DateTime? date;
  @override
  final String? description;

  factory _$InterventionDto([void Function(InterventionDtoBuilder)? updates]) =>
      (new InterventionDtoBuilder()..update(updates))._build();

  _$InterventionDto._(
      {this.id,
      this.cowId,
      this.intervenantId,
      this.type,
      this.status,
      this.date,
      this.description})
      : super._();

  @override
  InterventionDto rebuild(void Function(InterventionDtoBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  InterventionDtoBuilder toBuilder() =>
      new InterventionDtoBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is InterventionDto &&
        id == other.id &&
        cowId == other.cowId &&
        intervenantId == other.intervenantId &&
        type == other.type &&
        status == other.status &&
        date == other.date &&
        description == other.description;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, id.hashCode);
    _$hash = $jc(_$hash, cowId.hashCode);
    _$hash = $jc(_$hash, intervenantId.hashCode);
    _$hash = $jc(_$hash, type.hashCode);
    _$hash = $jc(_$hash, status.hashCode);
    _$hash = $jc(_$hash, date.hashCode);
    _$hash = $jc(_$hash, description.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'InterventionDto')
          ..add('id', id)
          ..add('cowId', cowId)
          ..add('intervenantId', intervenantId)
          ..add('type', type)
          ..add('status', status)
          ..add('date', date)
          ..add('description', description))
        .toString();
  }
}

class InterventionDtoBuilder
    implements Builder<InterventionDto, InterventionDtoBuilder> {
  _$InterventionDto? _$v;

  int? _id;
  int? get id => _$this._id;
  set id(int? id) => _$this._id = id;

  int? _cowId;
  int? get cowId => _$this._cowId;
  set cowId(int? cowId) => _$this._cowId = cowId;

  int? _intervenantId;
  int? get intervenantId => _$this._intervenantId;
  set intervenantId(int? intervenantId) =>
      _$this._intervenantId = intervenantId;

  String? _type;
  String? get type => _$this._type;
  set type(String? type) => _$this._type = type;

  String? _status;
  String? get status => _$this._status;
  set status(String? status) => _$this._status = status;

  DateTime? _date;
  DateTime? get date => _$this._date;
  set date(DateTime? date) => _$this._date = date;

  String? _description;
  String? get description => _$this._description;
  set description(String? description) => _$this._description = description;

  InterventionDtoBuilder() {
    InterventionDto._defaults(this);
  }

  InterventionDtoBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _id = $v.id;
      _cowId = $v.cowId;
      _intervenantId = $v.intervenantId;
      _type = $v.type;
      _status = $v.status;
      _date = $v.date;
      _description = $v.description;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(InterventionDto other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$InterventionDto;
  }

  @override
  void update(void Function(InterventionDtoBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  InterventionDto build() => _build();

  _$InterventionDto _build() {
    final _$result = _$v ??
        new _$InterventionDto._(
          id: id,
          cowId: cowId,
          intervenantId: intervenantId,
          type: type,
          status: status,
          date: date,
          description: description,
        );
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
