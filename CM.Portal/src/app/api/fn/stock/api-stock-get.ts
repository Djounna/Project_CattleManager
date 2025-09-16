/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StockDto } from '../../models/stock-dto';

export interface ApiStockGet$Params {
}

export function apiStockGet(http: HttpClient, rootUrl: string, params?: ApiStockGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<StockDto>>> {
  const rb = new RequestBuilder(rootUrl, apiStockGet.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<StockDto>>;
    })
  );
}

apiStockGet.PATH = '/api/Stock';
