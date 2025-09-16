/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CowDto } from '../../models/cow-dto';

export interface ApiCowPost$Params {
      body?: CowDto
}

export function apiCowPost(http: HttpClient, rootUrl: string, params?: ApiCowPost$Params, context?: HttpContext): Observable<StrictHttpResponse<CowDto>> {
  const rb = new RequestBuilder(rootUrl, apiCowPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
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

apiCowPost.PATH = '/api/Cow';
