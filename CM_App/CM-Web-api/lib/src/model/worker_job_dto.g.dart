// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'worker_job_dto.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$WorkerJobDto extends WorkerJobDto {
  @override
  final int? id;
  @override
  final int? userId;
  @override
  final int? jobId;

  factory _$WorkerJobDto([void Function(WorkerJobDtoBuilder)? updates]) =>
      (new WorkerJobDtoBuilder()..update(updates))._build();

  _$WorkerJobDto._({this.id, this.userId, this.jobId}) : super._();

  @override
  WorkerJobDto rebuild(void Function(WorkerJobDtoBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  WorkerJobDtoBuilder toBuilder() => new WorkerJobDtoBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is WorkerJobDto &&
        id == other.id &&
        userId == other.userId &&
        jobId == other.jobId;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, id.hashCode);
    _$hash = $jc(_$hash, userId.hashCode);
    _$hash = $jc(_$hash, jobId.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'WorkerJobDto')
          ..add('id', id)
          ..add('userId', userId)
          ..add('jobId', jobId))
        .toString();
  }
}

class WorkerJobDtoBuilder
    implements Builder<WorkerJobDto, WorkerJobDtoBuilder> {
  _$WorkerJobDto? _$v;

  int? _id;
  int? get id => _$this._id;
  set id(int? id) => _$this._id = id;

  int? _userId;
  int? get userId => _$this._userId;
  set userId(int? userId) => _$this._userId = userId;

  int? _jobId;
  int? get jobId => _$this._jobId;
  set jobId(int? jobId) => _$this._jobId = jobId;

  WorkerJobDtoBuilder() {
    WorkerJobDto._defaults(this);
  }

  WorkerJobDtoBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _id = $v.id;
      _userId = $v.userId;
      _jobId = $v.jobId;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(WorkerJobDto other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$WorkerJobDto;
  }

  @override
  void update(void Function(WorkerJobDtoBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  WorkerJobDto build() => _build();

  _$WorkerJobDto _build() {
    final _$result = _$v ??
        new _$WorkerJobDto._(
          id: id,
          userId: userId,
          jobId: jobId,
        );
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
