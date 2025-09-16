/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { JobDetailsDto } from '../../models/job-details-dto';

export interface ApiJobDetailsDateGet$Params {
  date?: string;
}

export function apiJobDetailsDateGet(http: HttpClient, rootUrl: string, params?: ApiJobDetailsDateGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<JobDetailsDto>>> {
  const rb = new RequestBuilder(rootUrl, apiJobDetailsDateGet.PATH, 'get');
  if (params) {
    rb.query('date', params.date, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<JobDetailsDto>>;
    })
  );
}

apiJobDetailsDateGet.PATH = '/api/Job/details/date';
