/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ConditionDto } from '../../models/condition-dto';

export interface ApiConditionCowIdGet$Params {
  cowId: number;
}

export function apiConditionCowIdGet(http: HttpClient, rootUrl: string, params: ApiConditionCowIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ConditionDto>>> {
  const rb = new RequestBuilder(rootUrl, apiConditionCowIdGet.PATH, 'get');
  if (params) {
    rb.path('cowId', params.cowId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ConditionDto>>;
    })
  );
}

apiConditionCowIdGet.PATH = '/api/Condition/{cowId}';
