// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'milking_inputs_dto.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$MilkingInputsDto extends MilkingInputsDto {
  @override
  final DateOnly? date;
  @override
  final BuiltList<MilkingInputDto>? milkingInputs;

  factory _$MilkingInputsDto(
          [void Function(MilkingInputsDtoBuilder)? updates]) =>
      (new MilkingInputsDtoBuilder()..update(updates))._build();

  _$MilkingInputsDto._({this.date, this.milkingInputs}) : super._();

  @override
  MilkingInputsDto rebuild(void Function(MilkingInputsDtoBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  MilkingInputsDtoBuilder toBuilder() =>
      new MilkingInputsDtoBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is MilkingInputsDto &&
        date == other.date &&
        milkingInputs == other.milkingInputs;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, date.hashCode);
    _$hash = $jc(_$hash, milkingInputs.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'MilkingInputsDto')
          ..add('date', date)
          ..add('milkingInputs', milkingInputs))
        .toString();
  }
}

class MilkingInputsDtoBuilder
    implements Builder<MilkingInputsDto, MilkingInputsDtoBuilder> {
  _$MilkingInputsDto? _$v;

  DateOnlyBuilder? _date;
  DateOnlyBuilder get date => _$this._date ??= new DateOnlyBuilder();
  set date(DateOnlyBuilder? date) => _$this._date = date;

  ListBuilder<MilkingInputDto>? _milkingInputs;
  ListBuilder<MilkingInputDto> get milkingInputs =>
      _$this._milkingInputs ??= new ListBuilder<MilkingInputDto>();
  set milkingInputs(ListBuilder<MilkingInputDto>? milkingInputs) =>
      _$this._milkingInputs = milkingInputs;

  MilkingInputsDtoBuilder() {
    MilkingInputsDto._defaults(this);
  }

  MilkingInputsDtoBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _date = $v.date?.toBuilder();
      _milkingInputs = $v.milkingInputs?.toBuilder();
      _$v = null;
    }
    return this;
  }

  @override
  void replace(MilkingInputsDto other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$MilkingInputsDto;
  }

  @override
  void update(void Function(MilkingInputsDtoBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  MilkingInputsDto build() => _build();

  _$MilkingInputsDto _build() {
    _$MilkingInputsDto _$result;
    try {
      _$result = _$v ??
          new _$MilkingInputsDto._(
            date: _date?.build(),
            milkingInputs: _milkingInputs?.build(),
          );
    } catch (_) {
      late String _$failedField;
      try {
        _$failedField = 'date';
        _date?.build();
        _$failedField = 'milkingInputs';
        _milkingInputs?.build();
      } catch (e) {
        throw new BuiltValueNestedFieldError(
            r'MilkingInputsDto', _$failedField, e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
