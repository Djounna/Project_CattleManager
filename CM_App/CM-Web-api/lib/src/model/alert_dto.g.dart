// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'alert_dto.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$AlertDto extends AlertDto {
  @override
  final int? id;
  @override
  final String? title;
  @override
  final String? description;
  @override
  final String? level;
  @override
  final String? infos;
  @override
  final int? cowId;
  @override
  final int? penId;

  factory _$AlertDto([void Function(AlertDtoBuilder)? updates]) =>
      (new AlertDtoBuilder()..update(updates))._build();

  _$AlertDto._(
      {this.id,
      this.title,
      this.description,
      this.level,
      this.infos,
      this.cowId,
      this.penId})
      : super._();

  @override
  AlertDto rebuild(void Function(AlertDtoBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  AlertDtoBuilder toBuilder() => new AlertDtoBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is AlertDto &&
        id == other.id &&
        title == other.title &&
        description == other.description &&
        level == other.level &&
        infos == other.infos &&
        cowId == other.cowId &&
        penId == other.penId;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, id.hashCode);
    _$hash = $jc(_$hash, title.hashCode);
    _$hash = $jc(_$hash, description.hashCode);
    _$hash = $jc(_$hash, level.hashCode);
    _$hash = $jc(_$hash, infos.hashCode);
    _$hash = $jc(_$hash, cowId.hashCode);
    _$hash = $jc(_$hash, penId.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'AlertDto')
          ..add('id', id)
          ..add('title', title)
          ..add('description', description)
          ..add('level', level)
          ..add('infos', infos)
          ..add('cowId', cowId)
          ..add('penId', penId))
        .toString();
  }
}

class AlertDtoBuilder implements Builder<AlertDto, AlertDtoBuilder> {
  _$AlertDto? _$v;

  int? _id;
  int? get id => _$this._id;
  set id(int? id) => _$this._id = id;

  String? _title;
  String? get title => _$this._title;
  set title(String? title) => _$this._title = title;

  String? _description;
  String? get description => _$this._description;
  set description(String? description) => _$this._description = description;

  String? _level;
  String? get level => _$this._level;
  set level(String? level) => _$this._level = level;

  String? _infos;
  String? get infos => _$this._infos;
  set infos(String? infos) => _$this._infos = infos;

  int? _cowId;
  int? get cowId => _$this._cowId;
  set cowId(int? cowId) => _$this._cowId = cowId;

  int? _penId;
  int? get penId => _$this._penId;
  set penId(int? penId) => _$this._penId = penId;

  AlertDtoBuilder() {
    AlertDto._defaults(this);
  }

  AlertDtoBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _id = $v.id;
      _title = $v.title;
      _description = $v.description;
      _level = $v.level;
      _infos = $v.infos;
      _cowId = $v.cowId;
      _penId = $v.penId;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(AlertDto other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$AlertDto;
  }

  @override
  void update(void Function(AlertDtoBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  AlertDto build() => _build();

  _$AlertDto _build() {
    final _$result = _$v ??
        new _$AlertDto._(
          id: id,
          title: title,
          description: description,
          level: level,
          infos: infos,
          cowId: cowId,
          penId: penId,
        );
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
