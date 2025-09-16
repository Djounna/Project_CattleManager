/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { JobDto } from '../../models/job-dto';

export interface ApiJobPut$Params {
      body?: JobDto
}

export function apiJobPut(http: HttpClient, rootUrl: string, params?: ApiJobPut$Params, context?: HttpContext): Observable<StrictHttpResponse<JobDto>> {
  const rb = new RequestBuilder(rootUrl, apiJobPut.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<JobDto>;
    })
  );
}

apiJobPut.PATH = '/api/Job';
