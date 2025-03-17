// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'job_details_dto.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$JobDetailsDto extends JobDetailsDto {
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
  final PenDto? pen;
  @override
  final CowDto? cow;
  @override
  final BuiltList<UserDto>? workers;

  factory _$JobDetailsDto([void Function(JobDetailsDtoBuilder)? updates]) =>
      (new JobDetailsDtoBuilder()..update(updates))._build();

  _$JobDetailsDto._(
      {this.id,
      this.title,
      this.description,
      this.status,
      this.length,
      this.pen,
      this.cow,
      this.workers})
      : super._();

  @override
  JobDetailsDto rebuild(void Function(JobDetailsDtoBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  JobDetailsDtoBuilder toBuilder() => new JobDetailsDtoBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is JobDetailsDto &&
        id == other.id &&
        title == other.title &&
        description == other.description &&
        status == other.status &&
        length == other.length &&
        pen == other.pen &&
        cow == other.cow &&
        workers == other.workers;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, id.hashCode);
    _$hash = $jc(_$hash, title.hashCode);
    _$hash = $jc(_$hash, description.hashCode);
    _$hash = $jc(_$hash, status.hashCode);
    _$hash = $jc(_$hash, length.hashCode);
    _$hash = $jc(_$hash, pen.hashCode);
    _$hash = $jc(_$hash, cow.hashCode);
    _$hash = $jc(_$hash, workers.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'JobDetailsDto')
          ..add('id', id)
          ..add('title', title)
          ..add('description', description)
          ..add('status', status)
          ..add('length', length)
          ..add('pen', pen)
          ..add('cow', cow)
          ..add('workers', workers))
        .toString();
  }
}

class JobDetailsDtoBuilder
    implements Builder<JobDetailsDto, JobDetailsDtoBuilder> {
  _$JobDetailsDto? _$v;

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

  PenDtoBuilder? _pen;
  PenDtoBuilder get pen => _$this._pen ??= new PenDtoBuilder();
  set pen(PenDtoBuilder? pen) => _$this._pen = pen;

  CowDtoBuilder? _cow;
  CowDtoBuilder get cow => _$this._cow ??= new CowDtoBuilder();
  set cow(CowDtoBuilder? cow) => _$this._cow = cow;

  ListBuilder<UserDto>? _workers;
  ListBuilder<UserDto> get workers =>
      _$this._workers ??= new ListBuilder<UserDto>();
  set workers(ListBuilder<UserDto>? workers) => _$this._workers = workers;

  JobDetailsDtoBuilder() {
    JobDetailsDto._defaults(this);
  }

  JobDetailsDtoBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _id = $v.id;
      _title = $v.title;
      _description = $v.description;
      _status = $v.status;
      _length = $v.length;
      _pen = $v.pen?.toBuilder();
      _cow = $v.cow?.toBuilder();
      _workers = $v.workers?.toBuilder();
      _$v = null;
    }
    return this;
  }

  @override
  void replace(JobDetailsDto other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$JobDetailsDto;
  }

  @override
  void update(void Function(JobDetailsDtoBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  JobDetailsDto build() => _build();

  _$JobDetailsDto _build() {
    _$JobDetailsDto _$result;
    try {
      _$result = _$v ??
          new _$JobDetailsDto._(
            id: id,
            title: title,
            description: description,
            status: status,
            length: length,
            pen: _pen?.build(),
            cow: _cow?.build(),
            workers: _workers?.build(),
          );
    } catch (_) {
      late String _$failedField;
      try {
        _$failedField = 'pen';
        _pen?.build();
        _$failedField = 'cow';
        _cow?.build();
        _$failedField = 'workers';
        _workers?.build();
      } catch (e) {
        throw new BuiltValueNestedFieldError(
            r'JobDetailsDto', _$failedField, e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
