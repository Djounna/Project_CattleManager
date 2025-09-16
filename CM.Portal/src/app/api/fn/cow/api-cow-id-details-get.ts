/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CowDetailsDto } from '../../models/cow-details-dto';

export interface ApiCowIdDetailsGet$Params {
  id: number;
}

export function apiCowIdDetailsGet(http: HttpClient, rootUrl: string, params: ApiCowIdDetailsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<CowDetailsDto>> {
  const rb = new RequestBuilder(rootUrl, apiCowIdDetailsGet.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CowDetailsDto>;
    })
  );
}

apiCowIdDetailsGet.PATH = '/api/Cow/{id}/details';
