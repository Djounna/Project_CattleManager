/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DashboardInfoDto } from '../../models/dashboard-info-dto';

export interface ApiTestGet$Params {
}

export function apiTestGet(http: HttpClient, rootUrl: string, params?: ApiTestGet$Params, context?: HttpContext): Observable<StrictHttpResponse<DashboardInfoDto>> {
  const rb = new RequestBuilder(rootUrl, apiTestGet.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<DashboardInfoDto>;
    })
  );
}

apiTestGet.PATH = '/api/Test';
