// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'assign_group_details_dto.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$AssignGroupDetailsDto extends AssignGroupDetailsDto {
  @override
  final GroupDetailsDto? group1;
  @override
  final GroupDetailsDto? group2;

  factory _$AssignGroupDetailsDto(
          [void Function(AssignGroupDetailsDtoBuilder)? updates]) =>
      (new AssignGroupDetailsDtoBuilder()..update(updates))._build();

  _$AssignGroupDetailsDto._({this.group1, this.group2}) : super._();

  @override
  AssignGroupDetailsDto rebuild(
          void Function(AssignGroupDetailsDtoBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  AssignGroupDetailsDtoBuilder toBuilder() =>
      new AssignGroupDetailsDtoBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is AssignGroupDetailsDto &&
        group1 == other.group1 &&
        group2 == other.group2;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, group1.hashCode);
    _$hash = $jc(_$hash, group2.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'AssignGroupDetailsDto')
          ..add('group1', group1)
          ..add('group2', group2))
        .toString();
  }
}

class AssignGroupDetailsDtoBuilder
    implements Builder<AssignGroupDetailsDto, AssignGroupDetailsDtoBuilder> {
  _$AssignGroupDetailsDto? _$v;

  GroupDetailsDtoBuilder? _group1;
  GroupDetailsDtoBuilder get group1 =>
      _$this._group1 ??= new GroupDetailsDtoBuilder();
  set group1(GroupDetailsDtoBuilder? group1) => _$this._group1 = group1;

  GroupDetailsDtoBuilder? _group2;
  GroupDetailsDtoBuilder get group2 =>
      _$this._group2 ??= new GroupDetailsDtoBuilder();
  set group2(GroupDetailsDtoBuilder? group2) => _$this._group2 = group2;

  AssignGroupDetailsDtoBuilder() {
    AssignGroupDetailsDto._defaults(this);
  }

  AssignGroupDetailsDtoBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _group1 = $v.group1?.toBuilder();
      _group2 = $v.group2?.toBuilder();
      _$v = null;
    }
    return this;
  }

  @override
  void replace(AssignGroupDetailsDto other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$AssignGroupDetailsDto;
  }

  @override
  void update(void Function(AssignGroupDetailsDtoBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  AssignGroupDetailsDto build() => _build();

  _$AssignGroupDetailsDto _build() {
    _$AssignGroupDetailsDto _$result;
    try {
      _$result = _$v ??
          new _$AssignGroupDetailsDto._(
            group1: _group1?.build(),
            group2: _group2?.build(),
          );
    } catch (_) {
      late String _$failedField;
      try {
        _$failedField = 'group1';
        _group1?.build();
        _$failedField = 'group2';
        _group2?.build();
      } catch (e) {
        throw new BuiltValueNestedFieldError(
            r'AssignGroupDetailsDto', _$failedField, e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
