// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'stock_dto.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$StockDto extends StockDto {
  @override
  final int? id;
  @override
  final String? type;
  @override
  final int? volume;

  factory _$StockDto([void Function(StockDtoBuilder)? updates]) =>
      (new StockDtoBuilder()..update(updates))._build();

  _$StockDto._({this.id, this.type, this.volume}) : super._();

  @override
  StockDto rebuild(void Function(StockDtoBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  StockDtoBuilder toBuilder() => new StockDtoBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is StockDto &&
        id == other.id &&
        type == other.type &&
        volume == other.volume;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, id.hashCode);
    _$hash = $jc(_$hash, type.hashCode);
    _$hash = $jc(_$hash, volume.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'StockDto')
          ..add('id', id)
          ..add('type', type)
          ..add('volume', volume))
        .toString();
  }
}

class StockDtoBuilder implements Builder<StockDto, StockDtoBuilder> {
  _$StockDto? _$v;

  int? _id;
  int? get id => _$this._id;
  set id(int? id) => _$this._id = id;

  String? _type;
  String? get type => _$this._type;
  set type(String? type) => _$this._type = type;

  int? _volume;
  int? get volume => _$this._volume;
  set volume(int? volume) => _$this._volume = volume;

  StockDtoBuilder() {
    StockDto._defaults(this);
  }

  StockDtoBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _id = $v.id;
      _type = $v.type;
      _volume = $v.volume;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(StockDto other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$StockDto;
  }

  @override
  void update(void Function(StockDtoBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  StockDto build() => _build();

  _$StockDto _build() {
    final _$result = _$v ??
        new _$StockDto._(
          id: id,
          type: type,
          volume: volume,
        );
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
