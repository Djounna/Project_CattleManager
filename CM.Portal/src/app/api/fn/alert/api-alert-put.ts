/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AlertDto } from '../../models/alert-dto';

export interface ApiAlertPut$Params {
      body?: AlertDto
}

export function apiAlertPut(http: HttpClient, rootUrl: string, params?: ApiAlertPut$Params, context?: HttpContext): Observable<StrictHttpResponse<AlertDto>> {
  const rb = new RequestBuilder(rootUrl, apiAlertPut.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AlertDto>;
    })
  );
}

apiAlertPut.PATH = '/api/Alert';
