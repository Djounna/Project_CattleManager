/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AlertDto } from '../../models/alert-dto';

export interface ApiAlertActiveGet$Params {
}

export function apiAlertActiveGet(http: HttpClient, rootUrl: string, params?: ApiAlertActiveGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AlertDto>>> {
  const rb = new RequestBuilder(rootUrl, apiAlertActiveGet.PATH, 'get');
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

apiAlertActiveGet.PATH = '/api/Alert/active';
