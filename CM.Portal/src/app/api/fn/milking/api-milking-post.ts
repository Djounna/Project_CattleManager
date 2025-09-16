/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MilkingDto } from '../../models/milking-dto';

export interface ApiMilkingPost$Params {
      body?: MilkingDto
}

export function apiMilkingPost(http: HttpClient, rootUrl: string, params?: ApiMilkingPost$Params, context?: HttpContext): Observable<StrictHttpResponse<MilkingDto>> {
  const rb = new RequestBuilder(rootUrl, apiMilkingPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<MilkingDto>;
    })
  );
}

apiMilkingPost.PATH = '/api/Milking';
