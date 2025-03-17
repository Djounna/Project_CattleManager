//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:CM_api/src/model/genealogy_dto.dart';
import 'package:CM_api/src/model/pen_dto.dart';
import 'package:CM_api/src/model/pen_move_dto.dart';
import 'package:CM_api/src/model/cow_dto.dart';
import 'package:built_collection/built_collection.dart';
import 'package:CM_api/src/model/group_move_dto.dart';
import 'package:CM_api/src/model/intervention_dto.dart';
import 'package:CM_api/src/model/milking_dto.dart';
import 'package:CM_api/src/model/vaccination_dto.dart';
import 'package:CM_api/src/model/group_dto.dart';
import 'package:CM_api/src/model/gestation_dto.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'cow_details_dto.g.dart';

/// CowDetailsDto
///
/// Properties:
/// * [id]
/// * [identifier]
/// * [name]
/// * [milkCow]
/// * [birthDate]
/// * [race]
/// * [gender]
/// * [imgLink]
/// * [pen]
/// * [group]
/// * [milkings]
/// * [interventions]
/// * [vaccinations]
/// * [gestations]
/// * [genealogy]
/// * [children]
/// * [penMoves]
/// * [groupMoves]
@BuiltValue()
abstract class CowDetailsDto
    implements Built<CowDetailsDto, CowDetailsDtoBuilder> {
  @BuiltValueField(wireName: r'id')
  int? get id;

  @BuiltValueField(wireName: r'identifier')
  String? get identifier;

  @BuiltValueField(wireName: r'name')
  String? get name;

  @BuiltValueField(wireName: r'milkCow')
  bool? get milkCow;

  @BuiltValueField(wireName: r'birthDate')
  DateTime? get birthDate;

  @BuiltValueField(wireName: r'race')
  String? get race;

  @BuiltValueField(wireName: r'gender')
  String? get gender;

  @BuiltValueField(wireName: r'imgLink')
  String? get imgLink;

  @BuiltValueField(wireName: r'pen')
  PenDto? get pen;

  @BuiltValueField(wireName: r'group')
  GroupDto? get group;

  @BuiltValueField(wireName: r'milkings')
  BuiltList<MilkingDto>? get milkings;

  @BuiltValueField(wireName: r'interventions')
  BuiltList<InterventionDto>? get interventions;

  @BuiltValueField(wireName: r'vaccinations')
  BuiltList<VaccinationDto>? get vaccinations;

  @BuiltValueField(wireName: r'gestations')
  BuiltList<GestationDto>? get gestations;

  @BuiltValueField(wireName: r'genealogy')
  GenealogyDto? get genealogy;

  @BuiltValueField(wireName: r'children')
  BuiltList<CowDto>? get children;

  @BuiltValueField(wireName: r'penMoves')
  BuiltList<PenMoveDto>? get penMoves;

  @BuiltValueField(wireName: r'groupMoves')
  BuiltList<GroupMoveDto>? get groupMoves;

  CowDetailsDto._();

  factory CowDetailsDto([void updates(CowDetailsDtoBuilder b)]) =
      _$CowDetailsDto;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(CowDetailsDtoBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<CowDetailsDto> get serializer =>
      _$CowDetailsDtoSerializer();
}

class _$CowDetailsDtoSerializer implements PrimitiveSerializer<CowDetailsDto> {
  @override
  final Iterable<Type> types = const [CowDetailsDto, _$CowDetailsDto];

  @override
  final String wireName = r'CowDetailsDto';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    CowDetailsDto object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    if (object.id != null) {
      yield r'id';
      yield serializers.serialize(
        object.id,
        specifiedType: const FullType(int),
      );
    }
    if (object.identifier != null) {
      yield r'identifier';
      yield serializers.serialize(
        object.identifier,
        specifiedType: const FullType.nullable(String),
      );
    }
    if (object.name != null) {
      yield r'name';
      yield serializers.serialize(
        object.name,
        specifiedType: const FullType.nullable(String),
      );
    }
    if (object.milkCow != null) {
      yield r'milkCow';
      yield serializers.serialize(
        object.milkCow,
        specifiedType: const FullType(bool),
      );
    }
    if (object.birthDate != null) {
      yield r'birthDate';
      yield serializers.serialize(
        object.birthDate,
        specifiedType: const FullType(DateTime),
      );
    }
    if (object.race != null) {
      yield r'race';
      yield serializers.serialize(
        object.race,
        specifiedType: const FullType.nullable(String),
      );
    }
    if (object.gender != null) {
      yield r'gender';
      yield serializers.serialize(
        object.gender,
        specifiedType: const FullType.nullable(String),
      );
    }
    if (object.imgLink != null) {
      yield r'imgLink';
      yield serializers.serialize(
        object.imgLink,
        specifiedType: const FullType.nullable(String),
      );
    }
    if (object.pen != null) {
      yield r'pen';
      yield serializers.serialize(
        object.pen,
        specifiedType: const FullType(PenDto),
      );
    }
    if (object.group != null) {
      yield r'group';
      yield serializers.serialize(
        object.group,
        specifiedType: const FullType(GroupDto),
      );
    }
    if (object.milkings != null) {
      yield r'milkings';
      yield serializers.serialize(
        object.milkings,
        specifiedType:
            const FullType.nullable(BuiltList, [FullType(MilkingDto)]),
      );
    }
    if (object.interventions != null) {
      yield r'interventions';
      yield serializers.serialize(
        object.interventions,
        specifiedType:
            const FullType.nullable(BuiltList, [FullType(InterventionDto)]),
      );
    }
    if (object.vaccinations != null) {
      yield r'vaccinations';
      yield serializers.serialize(
        object.vaccinations,
        specifiedType:
            const FullType.nullable(BuiltList, [FullType(VaccinationDto)]),
      );
    }
    if (object.gestations != null) {
      yield r'gestations';
      yield serializers.serialize(
        object.gestations,
        specifiedType:
            const FullType.nullable(BuiltList, [FullType(GestationDto)]),
      );
    }
    if (object.genealogy != null) {
      yield r'genealogy';
      yield serializers.serialize(
        object.genealogy,
        specifiedType: const FullType(GenealogyDto),
      );
    }
    if (object.children != null) {
      yield r'children';
      yield serializers.serialize(
        object.children,
        specifiedType: const FullType.nullable(BuiltList, [FullType(CowDto)]),
      );
    }
    if (object.penMoves != null) {
      yield r'penMoves';
      yield serializers.serialize(
        object.penMoves,
        specifiedType:
            const FullType.nullable(BuiltList, [FullType(PenMoveDto)]),
      );
    }
    if (object.groupMoves != null) {
      yield r'groupMoves';
      yield serializers.serialize(
        object.groupMoves,
        specifiedType:
            const FullType.nullable(BuiltList, [FullType(GroupMoveDto)]),
      );
    }
  }

  @override
  Object serialize(
    Serializers serializers,
    CowDetailsDto object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object,
            specifiedType: specifiedType)
        .toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required CowDetailsDtoBuilder result,
    required List<Object?> unhandled,
  }) {
    for (var i = 0; i < serializedList.length; i += 2) {
      final key = serializedList[i] as String;
      final value = serializedList[i + 1];
      switch (key) {
        case r'id':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(int),
          ) as int;
          result.id = valueDes;
          break;
        case r'identifier':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(String),
          ) as String?;
          if (valueDes == null) continue;
          result.identifier = valueDes;
          break;
        case r'name':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(String),
          ) as String?;
          if (valueDes == null) continue;
          result.name = valueDes;
          break;
        case r'milkCow':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(bool),
          ) as bool;
          result.milkCow = valueDes;
          break;
        case r'birthDate':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(DateTime),
          ) as DateTime;
          result.birthDate = valueDes;
          break;
        case r'race':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(String),
          ) as String?;
          if (valueDes == null) continue;
          result.race = valueDes;
          break;
        case r'gender':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(String),
          ) as String?;
          if (valueDes == null) continue;
          result.gender = valueDes;
          break;
        case r'imgLink':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(String),
          ) as String?;
          if (valueDes == null) continue;
          result.imgLink = valueDes;
          break;
        case r'pen':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(PenDto),
          ) as PenDto;
          result.pen.replace(valueDes);
          break;
        case r'group':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(GroupDto),
          ) as GroupDto;
          result.group.replace(valueDes);
          break;
        case r'milkings':
          final valueDes = serializers.deserialize(
            value,
            specifiedType:
                const FullType.nullable(BuiltList, [FullType(MilkingDto)]),
          ) as BuiltList<MilkingDto>?;
          if (valueDes == null) continue;
          result.milkings.replace(valueDes);
          break;
        case r'interventions':
          final valueDes = serializers.deserialize(
            value,
            specifiedType:
                const FullType.nullable(BuiltList, [FullType(InterventionDto)]),
          ) as BuiltList<InterventionDto>?;
          if (valueDes == null) continue;
          result.interventions.replace(valueDes);
          break;
        case r'vaccinations':
          final valueDes = serializers.deserialize(
            value,
            specifiedType:
                const FullType.nullable(BuiltList, [FullType(VaccinationDto)]),
          ) as BuiltList<VaccinationDto>?;
          if (valueDes == null) continue;
          result.vaccinations.replace(valueDes);
          break;
        case r'gestations':
          final valueDes = serializers.deserialize(
            value,
            specifiedType:
                const FullType.nullable(BuiltList, [FullType(GestationDto)]),
          ) as BuiltList<GestationDto>?;
          if (valueDes == null) continue;
          result.gestations.replace(valueDes);
          break;
        case r'genealogy':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(GenealogyDto),
          ) as GenealogyDto;
          result.genealogy.replace(valueDes);
          break;
        case r'children':
          final valueDes = serializers.deserialize(
            value,
            specifiedType:
                const FullType.nullable(BuiltList, [FullType(CowDto)]),
          ) as BuiltList<CowDto>?;
          if (valueDes == null) continue;
          result.children.replace(valueDes);
          break;
        case r'penMoves':
          final valueDes = serializers.deserialize(
            value,
            specifiedType:
                const FullType.nullable(BuiltList, [FullType(PenMoveDto)]),
          ) as BuiltList<PenMoveDto>?;
          if (valueDes == null) continue;
          result.penMoves.replace(valueDes);
          break;
        case r'groupMoves':
          final valueDes = serializers.deserialize(
            value,
            specifiedType:
                const FullType.nullable(BuiltList, [FullType(GroupMoveDto)]),
          ) as BuiltList<GroupMoveDto>?;
          if (valueDes == null) continue;
          result.groupMoves.replace(valueDes);
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  CowDetailsDto deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = CowDetailsDtoBuilder();
    final serializedList = (serialized as Iterable<Object?>).toList();
    final unhandled = <Object?>[];
    _deserializeProperties(
      serializers,
      serialized,
      specifiedType: specifiedType,
      serializedList: serializedList,
      unhandled: unhandled,
      result: result,
    );
    return result.build();
  }
}
