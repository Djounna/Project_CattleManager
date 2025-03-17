// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'day_of_week.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

const DayOfWeek _$number0 = const DayOfWeek._('number0');
const DayOfWeek _$number1 = const DayOfWeek._('number1');
const DayOfWeek _$number2 = const DayOfWeek._('number2');
const DayOfWeek _$number3 = const DayOfWeek._('number3');
const DayOfWeek _$number4 = const DayOfWeek._('number4');
const DayOfWeek _$number5 = const DayOfWeek._('number5');
const DayOfWeek _$number6 = const DayOfWeek._('number6');

DayOfWeek _$valueOf(String name) {
  switch (name) {
    case 'number0':
      return _$number0;
    case 'number1':
      return _$number1;
    case 'number2':
      return _$number2;
    case 'number3':
      return _$number3;
    case 'number4':
      return _$number4;
    case 'number5':
      return _$number5;
    case 'number6':
      return _$number6;
    default:
      throw new ArgumentError(name);
  }
}

final BuiltSet<DayOfWeek> _$values = new BuiltSet<DayOfWeek>(const <DayOfWeek>[
  _$number0,
  _$number1,
  _$number2,
  _$number3,
  _$number4,
  _$number5,
  _$number6,
]);

class _$DayOfWeekMeta {
  const _$DayOfWeekMeta();
  DayOfWeek get number0 => _$number0;
  DayOfWeek get number1 => _$number1;
  DayOfWeek get number2 => _$number2;
  DayOfWeek get number3 => _$number3;
  DayOfWeek get number4 => _$number4;
  DayOfWeek get number5 => _$number5;
  DayOfWeek get number6 => _$number6;
  DayOfWeek valueOf(String name) => _$valueOf(name);
  BuiltSet<DayOfWeek> get values => _$values;
}

abstract class _$DayOfWeekMixin {
  // ignore: non_constant_identifier_names
  _$DayOfWeekMeta get DayOfWeek => const _$DayOfWeekMeta();
}

Serializer<DayOfWeek> _$dayOfWeekSerializer = new _$DayOfWeekSerializer();

class _$DayOfWeekSerializer implements PrimitiveSerializer<DayOfWeek> {
  static const Map<String, Object> _toWire = const <String, Object>{
    'number0': 0,
    'number1': 1,
    'number2': 2,
    'number3': 3,
    'number4': 4,
    'number5': 5,
    'number6': 6,
  };
  static const Map<Object, String> _fromWire = const <Object, String>{
    0: 'number0',
    1: 'number1',
    2: 'number2',
    3: 'number3',
    4: 'number4',
    5: 'number5',
    6: 'number6',
  };

  @override
  final Iterable<Type> types = const <Type>[DayOfWeek];
  @override
  final String wireName = 'DayOfWeek';

  @override
  Object serialize(Serializers serializers, DayOfWeek object,
          {FullType specifiedType = FullType.unspecified}) =>
      _toWire[object.name] ?? object.name;

  @override
  DayOfWeek deserialize(Serializers serializers, Object serialized,
          {FullType specifiedType = FullType.unspecified}) =>
      DayOfWeek.valueOf(
          _fromWire[serialized] ?? (serialized is String ? serialized : ''));
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
