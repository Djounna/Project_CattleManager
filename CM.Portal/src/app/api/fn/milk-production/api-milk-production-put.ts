/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MilkProductionDto } from '../../models/milk-production-dto';

export interface ApiMilkProductionPut$Params {
      body?: MilkProductionDto
}

export function apiMilkProductionPut(http: HttpClient, rootUrl: string, params?: ApiMilkProductionPut$Params, context?: HttpContext): Observable<StrictHttpResponse<MilkProductionDto>> {
  const rb = new RequestBuilder(rootUrl, apiMilkProductionPut.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/*+json');
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

apiMilkProductionPut.PATH = '/api/MilkProduction';
