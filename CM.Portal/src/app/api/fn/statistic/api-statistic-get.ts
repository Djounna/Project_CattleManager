/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CattleStatisticsDto } from '../../models/cattle-statistics-dto';

export interface ApiStatisticGet$Params {
}

export function apiStatisticGet(http: HttpClient, rootUrl: string, params?: ApiStatisticGet$Params, context?: HttpContext): Observable<StrictHttpResponse<CattleStatisticsDto>> {
  const rb = new RequestBuilder(rootUrl, apiStatisticGet.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CattleStatisticsDto>;
    })
  );
}

apiStatisticGet.PATH = '/api/Statistic';
