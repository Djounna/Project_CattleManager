/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PenDto } from '../../models/pen-dto';

export interface ApiPenGet$Params {
}

export function apiPenGet(http: HttpClient, rootUrl: string, params?: ApiPenGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PenDto>>> {
  const rb = new RequestBuilder(rootUrl, apiPenGet.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<PenDto>>;
    })
  );
}

apiPenGet.PATH = '/api/Pen';
