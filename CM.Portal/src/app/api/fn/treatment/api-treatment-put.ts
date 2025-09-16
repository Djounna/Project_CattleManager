/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TreatmentDto } from '../../models/treatment-dto';

export interface ApiTreatmentPut$Params {
      body?: TreatmentDto
}

export function apiTreatmentPut(http: HttpClient, rootUrl: string, params?: ApiTreatmentPut$Params, context?: HttpContext): Observable<StrictHttpResponse<TreatmentDto>> {
  const rb = new RequestBuilder(rootUrl, apiTreatmentPut.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<TreatmentDto>;
    })
  );
}

apiTreatmentPut.PATH = '/api/Treatment';
