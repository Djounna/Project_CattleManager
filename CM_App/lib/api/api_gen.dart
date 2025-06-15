// Openapi Generator last run: : 2025-06-14T20:47:39.811827

import 'package:openapi_generator_annotations/openapi_generator_annotations.dart';

/*@Openapi(
  additionalProperties:
    AdditionalProperties(pubName: 'CM_api', pubAuthor: 'Corentin', useEnumExtension: true),
    inputSpec:
    RemoteSpec(path: 'https://localhost: /v1/swagger.json'),
    generatorName: Generator.dart,
    runSourceGenOnOutput: true,
    outputDirectory: 'CM_api')
class OtherApiGenerator {}*/

 @Openapi(
  additionalProperties:
  DioProperties(pubName: 'CM_api', pubAuthor: 'Corentin', useEnumExtension: true),
  inputSpec: InputSpec(path: 'lib/api/swagger.yaml'),
  generatorName: Generator.dart,
  runSourceGenOnOutput: true,
  outputDirectory: 'CM-api',
)
class OpenApiGenerator {}