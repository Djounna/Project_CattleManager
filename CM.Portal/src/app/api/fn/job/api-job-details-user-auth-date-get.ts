/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { JobDetailsDto } from '../../models/job-details-dto';

export interface ApiJobDetailsUserAuthDateGet$Params {
  date: string;
  userAuth: string;
}

export function apiJobDetailsUserAuthDateGet(http: HttpClient, rootUrl: string, params: ApiJobDetailsUserAuthDateGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<JobDetailsDto>>> {
  const rb = new RequestBuilder(rootUrl, apiJobDetailsUserAuthDateGet.PATH, 'get');
  if (params) {
    rb.path('date', params.date, {});
    rb.path('userAuth', params.userAuth, {});
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

apiJobDetailsUserAuthDateGet.PATH = '/api/Job/details/{userAuth}/{date}';
