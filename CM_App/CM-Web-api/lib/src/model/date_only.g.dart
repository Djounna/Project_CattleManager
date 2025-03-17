// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'date_only.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$DateOnly extends DateOnly {
  @override
  final int? year;
  @override
  final int? month;
  @override
  final int? day;
  @override
  final DayOfWeek? dayOfWeek;
  @override
  final int? dayOfYear;
  @override
  final int? dayNumber;

  factory _$DateOnly([void Function(DateOnlyBuilder)? updates]) =>
      (new DateOnlyBuilder()..update(updates))._build();

  _$DateOnly._(
      {this.year,
      this.month,
      this.day,
      this.dayOfWeek,
      this.dayOfYear,
      this.dayNumber})
      : super._();

  @override
  DateOnly rebuild(void Function(DateOnlyBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  DateOnlyBuilder toBuilder() => new DateOnlyBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is DateOnly &&
        year == other.year &&
        month == other.month &&
        day == other.day &&
        dayOfWeek == other.dayOfWeek &&
        dayOfYear == other.dayOfYear &&
        dayNumber == other.dayNumber;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, year.hashCode);
    _$hash = $jc(_$hash, month.hashCode);
    _$hash = $jc(_$hash, day.hashCode);
    _$hash = $jc(_$hash, dayOfWeek.hashCode);
    _$hash = $jc(_$hash, dayOfYear.hashCode);
    _$hash = $jc(_$hash, dayNumber.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'DateOnly')
          ..add('year', year)
          ..add('month', month)
          ..add('day', day)
          ..add('dayOfWeek', dayOfWeek)
          ..add('dayOfYear', dayOfYear)
          ..add('dayNumber', dayNumber))
        .toString();
  }
}

class DateOnlyBuilder implements Builder<DateOnly, DateOnlyBuilder> {
  _$DateOnly? _$v;

  int? _year;
  int? get year => _$this._year;
  set year(int? year) => _$this._year = year;

  int? _month;
  int? get month => _$this._month;
  set month(int? month) => _$this._month = month;

  int? _day;
  int? get day => _$this._day;
  set day(int? day) => _$this._day = day;

  DayOfWeek? _dayOfWeek;
  DayOfWeek? get dayOfWeek => _$this._dayOfWeek;
  set dayOfWeek(DayOfWeek? dayOfWeek) => _$this._dayOfWeek = dayOfWeek;

  int? _dayOfYear;
  int? get dayOfYear => _$this._dayOfYear;
  set dayOfYear(int? dayOfYear) => _$this._dayOfYear = dayOfYear;

  int? _dayNumber;
  int? get dayNumber => _$this._dayNumber;
  set dayNumber(int? dayNumber) => _$this._dayNumber = dayNumber;

  DateOnlyBuilder() {
    DateOnly._defaults(this);
  }

  DateOnlyBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _year = $v.year;
      _month = $v.month;
      _day = $v.day;
      _dayOfWeek = $v.dayOfWeek;
      _dayOfYear = $v.dayOfYear;
      _dayNumber = $v.dayNumber;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(DateOnly other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$DateOnly;
  }

  @override
  void update(void Function(DateOnlyBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  DateOnly build() => _build();

  _$DateOnly _build() {
    final _$result = _$v ??
        new _$DateOnly._(
          year: year,
          month: month,
          day: day,
          dayOfWeek: dayOfWeek,
          dayOfYear: dayOfYear,
          dayNumber: dayNumber,
        );
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
