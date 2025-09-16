/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MilkingDto } from '../../models/milking-dto';

export interface ApiMilkingPut$Params {
      body?: MilkingDto
}

export function apiMilkingPut(http: HttpClient, rootUrl: string, params?: ApiMilkingPut$Params, context?: HttpContext): Observable<StrictHttpResponse<MilkingDto>> {
  const rb = new RequestBuilder(rootUrl, apiMilkingPut.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<MilkingDto>;
    })
  );
}

apiMilkingPut.PATH = '/api/Milking';
