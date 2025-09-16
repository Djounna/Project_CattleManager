/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AlertDto } from '../../models/alert-dto';

export interface ApiAlertPost$Params {
      body?: AlertDto
}

export function apiAlertPost(http: HttpClient, rootUrl: string, params?: ApiAlertPost$Params, context?: HttpContext): Observable<StrictHttpResponse<AlertDto>> {
  const rb = new RequestBuilder(rootUrl, apiAlertPost.PATH, 'post');
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

apiAlertPost.PATH = '/api/Alert';
