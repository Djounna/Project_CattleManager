/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StockDto } from '../../models/stock-dto';

export interface ApiStockIdGet$Params {
  id: number;
}

export function apiStockIdGet(http: HttpClient, rootUrl: string, params: ApiStockIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<StockDto>> {
  const rb = new RequestBuilder(rootUrl, apiStockIdGet.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

apiStockIdGet.PATH = '/api/Stock/{id}';
