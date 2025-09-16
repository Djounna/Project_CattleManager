/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MilkProductionDto } from '../../models/milk-production-dto';

export interface ApiMilkProductionGet$Params {
}

export function apiMilkProductionGet(http: HttpClient, rootUrl: string, params?: ApiMilkProductionGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MilkProductionDto>>> {
  const rb = new RequestBuilder(rootUrl, apiMilkProductionGet.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<MilkProductionDto>>;
    })
  );
}

apiMilkProductionGet.PATH = '/api/MilkProduction';
