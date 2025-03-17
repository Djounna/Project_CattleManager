// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'group_move_dto.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$GroupMoveDto extends GroupMoveDto {
  @override
  final int? cowId;
  @override
  final DateOnly? date;
  @override
  final int? sourceGroupId;
  @override
  final int? destinationGroupId;

  factory _$GroupMoveDto([void Function(GroupMoveDtoBuilder)? updates]) =>
      (new GroupMoveDtoBuilder()..update(updates))._build();

  _$GroupMoveDto._(
      {this.cowId, this.date, this.sourceGroupId, this.destinationGroupId})
      : super._();

  @override
  GroupMoveDto rebuild(void Function(GroupMoveDtoBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  GroupMoveDtoBuilder toBuilder() => new GroupMoveDtoBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is GroupMoveDto &&
        cowId == other.cowId &&
        date == other.date &&
        sourceGroupId == other.sourceGroupId &&
        destinationGroupId == other.destinationGroupId;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, cowId.hashCode);
    _$hash = $jc(_$hash, date.hashCode);
    _$hash = $jc(_$hash, sourceGroupId.hashCode);
    _$hash = $jc(_$hash, destinationGroupId.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'GroupMoveDto')
          ..add('cowId', cowId)
          ..add('date', date)
          ..add('sourceGroupId', sourceGroupId)
          ..add('destinationGroupId', destinationGroupId))
        .toString();
  }
}

class GroupMoveDtoBuilder
    implements Builder<GroupMoveDto, GroupMoveDtoBuilder> {
  _$GroupMoveDto? _$v;

  int? _cowId;
  int? get cowId => _$this._cowId;
  set cowId(int? cowId) => _$this._cowId = cowId;

  DateOnlyBuilder? _date;
  DateOnlyBuilder get date => _$this._date ??= new DateOnlyBuilder();
  set date(DateOnlyBuilder? date) => _$this._date = date;

  int? _sourceGroupId;
  int? get sourceGroupId => _$this._sourceGroupId;
  set sourceGroupId(int? sourceGroupId) =>
      _$this._sourceGroupId = sourceGroupId;

  int? _destinationGroupId;
  int? get destinationGroupId => _$this._destinationGroupId;
  set destinationGroupId(int? destinationGroupId) =>
      _$this._destinationGroupId = destinationGroupId;

  GroupMoveDtoBuilder() {
    GroupMoveDto._defaults(this);
  }

  GroupMoveDtoBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _cowId = $v.cowId;
      _date = $v.date?.toBuilder();
      _sourceGroupId = $v.sourceGroupId;
      _destinationGroupId = $v.destinationGroupId;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(GroupMoveDto other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$GroupMoveDto;
  }

  @override
  void update(void Function(GroupMoveDtoBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  GroupMoveDto build() => _build();

  _$GroupMoveDto _build() {
    _$GroupMoveDto _$result;
    try {
      _$result = _$v ??
          new _$GroupMoveDto._(
            cowId: cowId,
            date: _date?.build(),
            sourceGroupId: sourceGroupId,
            destinationGroupId: destinationGroupId,
          );
    } catch (_) {
      late String _$failedField;
      try {
        _$failedField = 'date';
        _date?.build();
      } catch (e) {
        throw new BuiltValueNestedFieldError(
            r'GroupMoveDto', _$failedField, e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
