/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { JobDto } from '../../models/job-dto';

export interface ApiJobIdGet$Params {
  id: number;
}

export function apiJobIdGet(http: HttpClient, rootUrl: string, params: ApiJobIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<JobDto>> {
  const rb = new RequestBuilder(rootUrl, apiJobIdGet.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

apiJobIdGet.PATH = '/api/Job/{id}';
