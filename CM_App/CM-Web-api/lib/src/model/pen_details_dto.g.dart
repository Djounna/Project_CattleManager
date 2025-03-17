// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'pen_details_dto.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$PenDetailsDto extends PenDetailsDto {
  @override
  final int? id;
  @override
  final String? name;
  @override
  final int? size;
  @override
  final BuiltList<CowDto>? cows;

  factory _$PenDetailsDto([void Function(PenDetailsDtoBuilder)? updates]) =>
      (new PenDetailsDtoBuilder()..update(updates))._build();

  _$PenDetailsDto._({this.id, this.name, this.size, this.cows}) : super._();

  @override
  PenDetailsDto rebuild(void Function(PenDetailsDtoBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  PenDetailsDtoBuilder toBuilder() => new PenDetailsDtoBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is PenDetailsDto &&
        id == other.id &&
        name == other.name &&
        size == other.size &&
        cows == other.cows;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, id.hashCode);
    _$hash = $jc(_$hash, name.hashCode);
    _$hash = $jc(_$hash, size.hashCode);
    _$hash = $jc(_$hash, cows.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'PenDetailsDto')
          ..add('id', id)
          ..add('name', name)
          ..add('size', size)
          ..add('cows', cows))
        .toString();
  }
}

class PenDetailsDtoBuilder
    implements Builder<PenDetailsDto, PenDetailsDtoBuilder> {
  _$PenDetailsDto? _$v;

  int? _id;
  int? get id => _$this._id;
  set id(int? id) => _$this._id = id;

  String? _name;
  String? get name => _$this._name;
  set name(String? name) => _$this._name = name;

  int? _size;
  int? get size => _$this._size;
  set size(int? size) => _$this._size = size;

  ListBuilder<CowDto>? _cows;
  ListBuilder<CowDto> get cows => _$this._cows ??= new ListBuilder<CowDto>();
  set cows(ListBuilder<CowDto>? cows) => _$this._cows = cows;

  PenDetailsDtoBuilder() {
    PenDetailsDto._defaults(this);
  }

  PenDetailsDtoBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _id = $v.id;
      _name = $v.name;
      _size = $v.size;
      _cows = $v.cows?.toBuilder();
      _$v = null;
    }
    return this;
  }

  @override
  void replace(PenDetailsDto other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$PenDetailsDto;
  }

  @override
  void update(void Function(PenDetailsDtoBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  PenDetailsDto build() => _build();

  _$PenDetailsDto _build() {
    _$PenDetailsDto _$result;
    try {
      _$result = _$v ??
          new _$PenDetailsDto._(
            id: id,
            name: name,
            size: size,
            cows: _cows?.build(),
          );
    } catch (_) {
      late String _$failedField;
      try {
        _$failedField = 'cows';
        _cows?.build();
      } catch (e) {
        throw new BuiltValueNestedFieldError(
            r'PenDetailsDto', _$failedField, e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
