// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'gestation_dto.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$GestationDto extends GestationDto {
  @override
  final int? id;
  @override
  final int? cowId;
  @override
  final String? status;
  @override
  final DateTime? startDate;
  @override
  final DateTime? calvingDate;

  factory _$GestationDto([void Function(GestationDtoBuilder)? updates]) =>
      (new GestationDtoBuilder()..update(updates))._build();

  _$GestationDto._(
      {this.id, this.cowId, this.status, this.startDate, this.calvingDate})
      : super._();

  @override
  GestationDto rebuild(void Function(GestationDtoBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  GestationDtoBuilder toBuilder() => new GestationDtoBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is GestationDto &&
        id == other.id &&
        cowId == other.cowId &&
        status == other.status &&
        startDate == other.startDate &&
        calvingDate == other.calvingDate;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, id.hashCode);
    _$hash = $jc(_$hash, cowId.hashCode);
    _$hash = $jc(_$hash, status.hashCode);
    _$hash = $jc(_$hash, startDate.hashCode);
    _$hash = $jc(_$hash, calvingDate.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'GestationDto')
          ..add('id', id)
          ..add('cowId', cowId)
          ..add('status', status)
          ..add('startDate', startDate)
          ..add('calvingDate', calvingDate))
        .toString();
  }
}

class GestationDtoBuilder
    implements Builder<GestationDto, GestationDtoBuilder> {
  _$GestationDto? _$v;

  int? _id;
  int? get id => _$this._id;
  set id(int? id) => _$this._id = id;

  int? _cowId;
  int? get cowId => _$this._cowId;
  set cowId(int? cowId) => _$this._cowId = cowId;

  String? _status;
  String? get status => _$this._status;
  set status(String? status) => _$this._status = status;

  DateTime? _startDate;
  DateTime? get startDate => _$this._startDate;
  set startDate(DateTime? startDate) => _$this._startDate = startDate;

  DateTime? _calvingDate;
  DateTime? get calvingDate => _$this._calvingDate;
  set calvingDate(DateTime? calvingDate) => _$this._calvingDate = calvingDate;

  GestationDtoBuilder() {
    GestationDto._defaults(this);
  }

  GestationDtoBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _id = $v.id;
      _cowId = $v.cowId;
      _status = $v.status;
      _startDate = $v.startDate;
      _calvingDate = $v.calvingDate;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(GestationDto other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$GestationDto;
  }

  @override
  void update(void Function(GestationDtoBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  GestationDto build() => _build();

  _$GestationDto _build() {
    final _$result = _$v ??
        new _$GestationDto._(
          id: id,
          cowId: cowId,
          status: status,
          startDate: startDate,
          calvingDate: calvingDate,
        );
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
