/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ConditionDto } from '../../models/condition-dto';

export interface ApiConditionPut$Params {
      body?: ConditionDto
}

export function apiConditionPut(http: HttpClient, rootUrl: string, params?: ApiConditionPut$Params, context?: HttpContext): Observable<StrictHttpResponse<ConditionDto>> {
  const rb = new RequestBuilder(rootUrl, apiConditionPut.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ConditionDto>;
    })
  );
}

apiConditionPut.PATH = '/api/Condition';
