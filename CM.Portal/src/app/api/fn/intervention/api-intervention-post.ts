/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { InterventionDto } from '../../models/intervention-dto';

export interface ApiInterventionPost$Params {
      body?: InterventionDto
}

export function apiInterventionPost(http: HttpClient, rootUrl: string, params?: ApiInterventionPost$Params, context?: HttpContext): Observable<StrictHttpResponse<InterventionDto>> {
  const rb = new RequestBuilder(rootUrl, apiInterventionPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<InterventionDto>;
    })
  );
}

apiInterventionPost.PATH = '/api/Intervention';
