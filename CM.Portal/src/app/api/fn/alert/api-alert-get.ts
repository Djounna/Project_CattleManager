/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AlertDto } from '../../models/alert-dto';

export interface ApiAlertGet$Params {
}

export function apiAlertGet(http: HttpClient, rootUrl: string, params?: ApiAlertGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AlertDto>>> {
  const rb = new RequestBuilder(rootUrl, apiAlertGet.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<AlertDto>>;
    })
  );
}

apiAlertGet.PATH = '/api/Alert';
