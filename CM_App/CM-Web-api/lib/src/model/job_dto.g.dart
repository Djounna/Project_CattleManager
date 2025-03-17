// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'job_dto.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$JobDto extends JobDto {
  @override
  final int? id;
  @override
  final String? title;
  @override
  final String? description;
  @override
  final String? status;
  @override
  final int? length;
  @override
  final int? recurringJobId;
  @override
  final String? infos;
  @override
  final int? penId;
  @override
  final int? cowId;

  factory _$JobDto([void Function(JobDtoBuilder)? updates]) =>
      (new JobDtoBuilder()..update(updates))._build();

  _$JobDto._(
      {this.id,
      this.title,
      this.description,
      this.status,
      this.length,
      this.recurringJobId,
      this.infos,
      this.penId,
      this.cowId})
      : super._();

  @override
  JobDto rebuild(void Function(JobDtoBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  JobDtoBuilder toBuilder() => new JobDtoBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is JobDto &&
        id == other.id &&
        title == other.title &&
        description == other.description &&
        status == other.status &&
        length == other.length &&
        recurringJobId == other.recurringJobId &&
        infos == other.infos &&
        penId == other.penId &&
        cowId == other.cowId;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, id.hashCode);
    _$hash = $jc(_$hash, title.hashCode);
    _$hash = $jc(_$hash, description.hashCode);
    _$hash = $jc(_$hash, status.hashCode);
    _$hash = $jc(_$hash, length.hashCode);
    _$hash = $jc(_$hash, recurringJobId.hashCode);
    _$hash = $jc(_$hash, infos.hashCode);
    _$hash = $jc(_$hash, penId.hashCode);
    _$hash = $jc(_$hash, cowId.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'JobDto')
          ..add('id', id)
          ..add('title', title)
          ..add('description', description)
          ..add('status', status)
          ..add('length', length)
          ..add('recurringJobId', recurringJobId)
          ..add('infos', infos)
          ..add('penId', penId)
          ..add('cowId', cowId))
        .toString();
  }
}

class JobDtoBuilder implements Builder<JobDto, JobDtoBuilder> {
  _$JobDto? _$v;

  int? _id;
  int? get id => _$this._id;
  set id(int? id) => _$this._id = id;

  String? _title;
  String? get title => _$this._title;
  set title(String? title) => _$this._title = title;

  String? _description;
  String? get description => _$this._description;
  set description(String? description) => _$this._description = description;

  String? _status;
  String? get status => _$this._status;
  set status(String? status) => _$this._status = status;

  int? _length;
  int? get length => _$this._length;
  set length(int? length) => _$this._length = length;

  int? _recurringJobId;
  int? get recurringJobId => _$this._recurringJobId;
  set recurringJobId(int? recurringJobId) =>
      _$this._recurringJobId = recurringJobId;

  String? _infos;
  String? get infos => _$this._infos;
  set infos(String? infos) => _$this._infos = infos;

  int? _penId;
  int? get penId => _$this._penId;
  set penId(int? penId) => _$this._penId = penId;

  int? _cowId;
  int? get cowId => _$this._cowId;
  set cowId(int? cowId) => _$this._cowId = cowId;

  JobDtoBuilder() {
    JobDto._defaults(this);
  }

  JobDtoBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _id = $v.id;
      _title = $v.title;
      _description = $v.description;
      _status = $v.status;
      _length = $v.length;
      _recurringJobId = $v.recurringJobId;
      _infos = $v.infos;
      _penId = $v.penId;
      _cowId = $v.cowId;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(JobDto other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$JobDto;
  }

  @override
  void update(void Function(JobDtoBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  JobDto build() => _build();

  _$JobDto _build() {
    final _$result = _$v ??
        new _$JobDto._(
          id: id,
          title: title,
          description: description,
          status: status,
          length: length,
          recurringJobId: recurringJobId,
          infos: infos,
          penId: penId,
          cowId: cowId,
        );
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
