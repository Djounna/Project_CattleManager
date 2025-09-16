/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StockDto } from '../../models/stock-dto';

export interface ApiStockPut$Params {
      body?: StockDto
}

export function apiStockPut(http: HttpClient, rootUrl: string, params?: ApiStockPut$Params, context?: HttpContext): Observable<StrictHttpResponse<StockDto>> {
  const rb = new RequestBuilder(rootUrl, apiStockPut.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<StockDto>;
    })
  );
}

apiStockPut.PATH = '/api/Stock';
