/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GestationDto } from '../../models/gestation-dto';

export interface ApiGestationGet$Params {
}

export function apiGestationGet(http: HttpClient, rootUrl: string, params?: ApiGestationGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<GestationDto>>> {
  const rb = new RequestBuilder(rootUrl, apiGestationGet.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<GestationDto>>;
    })
  );
}

apiGestationGet.PATH = '/api/Gestation';
