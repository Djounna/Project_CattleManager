// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'treatment_dto.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$TreatmentDto extends TreatmentDto {
  @override
  final int? conditionId;
  @override
  final String? name;
  @override
  final String? comment;
  @override
  final DateTime? date;

  factory _$TreatmentDto([void Function(TreatmentDtoBuilder)? updates]) =>
      (new TreatmentDtoBuilder()..update(updates))._build();

  _$TreatmentDto._({this.conditionId, this.name, this.comment, this.date})
      : super._();

  @override
  TreatmentDto rebuild(void Function(TreatmentDtoBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  TreatmentDtoBuilder toBuilder() => new TreatmentDtoBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is TreatmentDto &&
        conditionId == other.conditionId &&
        name == other.name &&
        comment == other.comment &&
        date == other.date;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, conditionId.hashCode);
    _$hash = $jc(_$hash, name.hashCode);
    _$hash = $jc(_$hash, comment.hashCode);
    _$hash = $jc(_$hash, date.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'TreatmentDto')
          ..add('conditionId', conditionId)
          ..add('name', name)
          ..add('comment', comment)
          ..add('date', date))
        .toString();
  }
}

class TreatmentDtoBuilder
    implements Builder<TreatmentDto, TreatmentDtoBuilder> {
  _$TreatmentDto? _$v;

  int? _conditionId;
  int? get conditionId => _$this._conditionId;
  set conditionId(int? conditionId) => _$this._conditionId = conditionId;

  String? _name;
  String? get name => _$this._name;
  set name(String? name) => _$this._name = name;

  String? _comment;
  String? get comment => _$this._comment;
  set comment(String? comment) => _$this._comment = comment;

  DateTime? _date;
  DateTime? get date => _$this._date;
  set date(DateTime? date) => _$this._date = date;

  TreatmentDtoBuilder() {
    TreatmentDto._defaults(this);
  }

  TreatmentDtoBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _conditionId = $v.conditionId;
      _name = $v.name;
      _comment = $v.comment;
      _date = $v.date;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(TreatmentDto other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$TreatmentDto;
  }

  @override
  void update(void Function(TreatmentDtoBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  TreatmentDto build() => _build();

  _$TreatmentDto _build() {
    final _$result = _$v ??
        new _$TreatmentDto._(
          conditionId: conditionId,
          name: name,
          comment: comment,
          date: date,
        );
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
