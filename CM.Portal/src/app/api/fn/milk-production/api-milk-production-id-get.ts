/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MilkProductionDto } from '../../models/milk-production-dto';

export interface ApiMilkProductionIdGet$Params {
  id: number;
}

export function apiMilkProductionIdGet(http: HttpClient, rootUrl: string, params: ApiMilkProductionIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<MilkProductionDto>> {
  const rb = new RequestBuilder(rootUrl, apiMilkProductionIdGet.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<MilkProductionDto>;
    })
  );
}

apiMilkProductionIdGet.PATH = '/api/MilkProduction/{id}';
