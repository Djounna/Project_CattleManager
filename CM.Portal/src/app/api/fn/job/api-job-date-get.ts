/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { JobDto } from '../../models/job-dto';

export interface ApiJobDateGet$Params {
  date?: string;
}

export function apiJobDateGet(http: HttpClient, rootUrl: string, params?: ApiJobDateGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<JobDto>>> {
  const rb = new RequestBuilder(rootUrl, apiJobDateGet.PATH, 'get');
  if (params) {
    rb.query('date', params.date, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<JobDto>>;
    })
  );
}

apiJobDateGet.PATH = '/api/Job/date';
