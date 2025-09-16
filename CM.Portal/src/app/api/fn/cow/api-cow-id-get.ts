/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CowDto } from '../../models/cow-dto';

export interface ApiCowIdGet$Params {
  id: number;
}

export function apiCowIdGet(http: HttpClient, rootUrl: string, params: ApiCowIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<CowDto>> {
  const rb = new RequestBuilder(rootUrl, apiCowIdGet.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CowDto>;
    })
  );
}

apiCowIdGet.PATH = '/api/Cow/{id}';
