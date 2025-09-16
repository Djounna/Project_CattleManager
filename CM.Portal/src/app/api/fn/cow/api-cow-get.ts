/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CowDto } from '../../models/cow-dto';

export interface ApiCowGet$Params {
}

export function apiCowGet(http: HttpClient, rootUrl: string, params?: ApiCowGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CowDto>>> {
  const rb = new RequestBuilder(rootUrl, apiCowGet.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<CowDto>>;
    })
  );
}

apiCowGet.PATH = '/api/Cow';
