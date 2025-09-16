/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GestationDto } from '../../models/gestation-dto';

export interface ApiGestationIdGet$Params {
  id: number;
}

export function apiGestationIdGet(http: HttpClient, rootUrl: string, params: ApiGestationIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<GestationDto>> {
  const rb = new RequestBuilder(rootUrl, apiGestationIdGet.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GestationDto>;
    })
  );
}

apiGestationIdGet.PATH = '/api/Gestation/{id}';
