/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DashboardInfoDto } from '../../models/dashboard-info-dto';

export interface ApiDashboardGet$Params {
}

export function apiDashboardGet(http: HttpClient, rootUrl: string, params?: ApiDashboardGet$Params, context?: HttpContext): Observable<StrictHttpResponse<DashboardInfoDto>> {
  const rb = new RequestBuilder(rootUrl, apiDashboardGet.PATH, 'get');
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

apiDashboardGet.PATH = '/api/Dashboard';
