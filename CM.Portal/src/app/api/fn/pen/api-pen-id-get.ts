/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PenDto } from '../../models/pen-dto';

export interface ApiPenIdGet$Params {
  id: number;
}

export function apiPenIdGet(http: HttpClient, rootUrl: string, params: ApiPenIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<PenDto>> {
  const rb = new RequestBuilder(rootUrl, apiPenIdGet.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PenDto>;
    })
  );
}

apiPenIdGet.PATH = '/api/Pen/{id}';
