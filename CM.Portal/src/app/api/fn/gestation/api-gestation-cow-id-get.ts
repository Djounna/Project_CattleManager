/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GestationDto } from '../../models/gestation-dto';

export interface ApiGestationCowIdGet$Params {
  cowId: number;
}

export function apiGestationCowIdGet(http: HttpClient, rootUrl: string, params: ApiGestationCowIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<GestationDto>>> {
  const rb = new RequestBuilder(rootUrl, apiGestationCowIdGet.PATH, 'get');
  if (params) {
    rb.path('cowId', params.cowId, {});
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

apiGestationCowIdGet.PATH = '/api/Gestation/{cowId}';
