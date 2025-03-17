// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'group_statistic_dto.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$GroupStatisticDto extends GroupStatisticDto {
  @override
  final int? groupId;
  @override
  final String? groupName;
  @override
  final int? number;

  factory _$GroupStatisticDto(
          [void Function(GroupStatisticDtoBuilder)? updates]) =>
      (new GroupStatisticDtoBuilder()..update(updates))._build();

  _$GroupStatisticDto._({this.groupId, this.groupName, this.number})
      : super._();

  @override
  GroupStatisticDto rebuild(void Function(GroupStatisticDtoBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  GroupStatisticDtoBuilder toBuilder() =>
      new GroupStatisticDtoBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is GroupStatisticDto &&
        groupId == other.groupId &&
        groupName == other.groupName &&
        number == other.number;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, groupId.hashCode);
    _$hash = $jc(_$hash, groupName.hashCode);
    _$hash = $jc(_$hash, number.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'GroupStatisticDto')
          ..add('groupId', groupId)
          ..add('groupName', groupName)
          ..add('number', number))
        .toString();
  }
}

class GroupStatisticDtoBuilder
    implements Builder<GroupStatisticDto, GroupStatisticDtoBuilder> {
  _$GroupStatisticDto? _$v;

  int? _groupId;
  int? get groupId => _$this._groupId;
  set groupId(int? groupId) => _$this._groupId = groupId;

  String? _groupName;
  String? get groupName => _$this._groupName;
  set groupName(String? groupName) => _$this._groupName = groupName;

  int? _number;
  int? get number => _$this._number;
  set number(int? number) => _$this._number = number;

  GroupStatisticDtoBuilder() {
    GroupStatisticDto._defaults(this);
  }

  GroupStatisticDtoBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _groupId = $v.groupId;
      _groupName = $v.groupName;
      _number = $v.number;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(GroupStatisticDto other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$GroupStatisticDto;
  }

  @override
  void update(void Function(GroupStatisticDtoBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  GroupStatisticDto build() => _build();

  _$GroupStatisticDto _build() {
    final _$result = _$v ??
        new _$GroupStatisticDto._(
          groupId: groupId,
          groupName: groupName,
          number: number,
        );
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
