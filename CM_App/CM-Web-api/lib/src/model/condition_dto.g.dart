// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'condition_dto.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$ConditionDto extends ConditionDto {
  @override
  final int? id;
  @override
  final int? cowId;
  @override
  final String? name;
  @override
  final String? type;
  @override
  final String? status;
  @override
  final String? comment;
  @override
  final DateTime? startDate;
  @override
  final DateTime? endDate;

  factory _$ConditionDto([void Function(ConditionDtoBuilder)? updates]) =>
      (new ConditionDtoBuilder()..update(updates))._build();

  _$ConditionDto._(
      {this.id,
      this.cowId,
      this.name,
      this.type,
      this.status,
      this.comment,
      this.startDate,
      this.endDate})
      : super._();

  @override
  ConditionDto rebuild(void Function(ConditionDtoBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  ConditionDtoBuilder toBuilder() => new ConditionDtoBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is ConditionDto &&
        id == other.id &&
        cowId == other.cowId &&
        name == other.name &&
        type == other.type &&
        status == other.status &&
        comment == other.comment &&
        startDate == other.startDate &&
        endDate == other.endDate;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, id.hashCode);
    _$hash = $jc(_$hash, cowId.hashCode);
    _$hash = $jc(_$hash, name.hashCode);
    _$hash = $jc(_$hash, type.hashCode);
    _$hash = $jc(_$hash, status.hashCode);
    _$hash = $jc(_$hash, comment.hashCode);
    _$hash = $jc(_$hash, startDate.hashCode);
    _$hash = $jc(_$hash, endDate.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'ConditionDto')
          ..add('id', id)
          ..add('cowId', cowId)
          ..add('name', name)
          ..add('type', type)
          ..add('status', status)
          ..add('comment', comment)
          ..add('startDate', startDate)
          ..add('endDate', endDate))
        .toString();
  }
}

class ConditionDtoBuilder
    implements Builder<ConditionDto, ConditionDtoBuilder> {
  _$ConditionDto? _$v;

  int? _id;
  int? get id => _$this._id;
  set id(int? id) => _$this._id = id;

  int? _cowId;
  int? get cowId => _$this._cowId;
  set cowId(int? cowId) => _$this._cowId = cowId;

  String? _name;
  String? get name => _$this._name;
  set name(String? name) => _$this._name = name;

  String? _type;
  String? get type => _$this._type;
  set type(String? type) => _$this._type = type;

  String? _status;
  String? get status => _$this._status;
  set status(String? status) => _$this._status = status;

  String? _comment;
  String? get comment => _$this._comment;
  set comment(String? comment) => _$this._comment = comment;

  DateTime? _startDate;
  DateTime? get startDate => _$this._startDate;
  set startDate(DateTime? startDate) => _$this._startDate = startDate;

  DateTime? _endDate;
  DateTime? get endDate => _$this._endDate;
  set endDate(DateTime? endDate) => _$this._endDate = endDate;

  ConditionDtoBuilder() {
    ConditionDto._defaults(this);
  }

  ConditionDtoBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _id = $v.id;
      _cowId = $v.cowId;
      _name = $v.name;
      _type = $v.type;
      _status = $v.status;
      _comment = $v.comment;
      _startDate = $v.startDate;
      _endDate = $v.endDate;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(ConditionDto other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$ConditionDto;
  }

  @override
  void update(void Function(ConditionDtoBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  ConditionDto build() => _build();

  _$ConditionDto _build() {
    final _$result = _$v ??
        new _$ConditionDto._(
          id: id,
          cowId: cowId,
          name: name,
          type: type,
          status: status,
          comment: comment,
          startDate: startDate,
          endDate: endDate,
        );
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
