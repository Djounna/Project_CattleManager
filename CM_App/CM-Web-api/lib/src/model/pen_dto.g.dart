// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'pen_dto.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$PenDto extends PenDto {
  @override
  final int? id;
  @override
  final String? name;
  @override
  final int? size;
  @override
  final String? coordinates;

  factory _$PenDto([void Function(PenDtoBuilder)? updates]) =>
      (new PenDtoBuilder()..update(updates))._build();

  _$PenDto._({this.id, this.name, this.size, this.coordinates}) : super._();

  @override
  PenDto rebuild(void Function(PenDtoBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  PenDtoBuilder toBuilder() => new PenDtoBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is PenDto &&
        id == other.id &&
        name == other.name &&
        size == other.size &&
        coordinates == other.coordinates;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, id.hashCode);
    _$hash = $jc(_$hash, name.hashCode);
    _$hash = $jc(_$hash, size.hashCode);
    _$hash = $jc(_$hash, coordinates.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'PenDto')
          ..add('id', id)
          ..add('name', name)
          ..add('size', size)
          ..add('coordinates', coordinates))
        .toString();
  }
}

class PenDtoBuilder implements Builder<PenDto, PenDtoBuilder> {
  _$PenDto? _$v;

  int? _id;
  int? get id => _$this._id;
  set id(int? id) => _$this._id = id;

  String? _name;
  String? get name => _$this._name;
  set name(String? name) => _$this._name = name;

  int? _size;
  int? get size => _$this._size;
  set size(int? size) => _$this._size = size;

  String? _coordinates;
  String? get coordinates => _$this._coordinates;
  set coordinates(String? coordinates) => _$this._coordinates = coordinates;

  PenDtoBuilder() {
    PenDto._defaults(this);
  }

  PenDtoBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _id = $v.id;
      _name = $v.name;
      _size = $v.size;
      _coordinates = $v.coordinates;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(PenDto other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$PenDto;
  }

  @override
  void update(void Function(PenDtoBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  PenDto build() => _build();

  _$PenDto _build() {
    final _$result = _$v ??
        new _$PenDto._(
          id: id,
          name: name,
          size: size,
          coordinates: coordinates,
        );
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
