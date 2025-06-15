# CM_api.model.CowDetailsDto

## Load the model package
```dart
import 'package:CM_api/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**identifier** | **String** |  | [optional] 
**name** | **String** |  | [optional] 
**milkCow** | **bool** |  | [optional] 
**birthDate** | [**DateTime**](DateTime.md) |  | [optional] 
**race** | **String** |  | [optional] 
**gender** | **String** |  | [optional] 
**imgLink** | **String** |  | [optional] 
**pen** | [**PenDto**](PenDto.md) |  | [optional] 
**group** | [**GroupDto**](GroupDto.md) |  | [optional] 
**interventions** | [**List<InterventionDto>**](InterventionDto.md) |  | [optional] [default to const []]
**vaccinations** | [**List<VaccinationDto>**](VaccinationDto.md) |  | [optional] [default to const []]
**gestations** | [**List<GestationDto>**](GestationDto.md) |  | [optional] [default to const []]
**conditions** | [**List<ConditionDto>**](ConditionDto.md) |  | [optional] [default to const []]
**treatments** | [**List<TreatmentDto>**](TreatmentDto.md) |  | [optional] [default to const []]
**children** | [**List<CowDto>**](CowDto.md) |  | [optional] [default to const []]
**penMoves** | [**List<PenMoveDto>**](PenMoveDto.md) |  | [optional] [default to const []]
**groupMoves** | [**List<GroupMoveDto>**](GroupMoveDto.md) |  | [optional] [default to const []]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


