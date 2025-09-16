/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { JobDetailsDto } from '../../models/job-details-dto';

export interface ApiJobDetailsGet$Params {
}

export function apiJobDetailsGet(http: HttpClient, rootUrl: string, params?: ApiJobDetailsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<JobDetailsDto>>> {
  const rb = new RequestBuilder(rootUrl, apiJobDetailsGet.PATH, 'get');
  if (params) {
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

apiJobDetailsGet.PATH = '/api/Job/details';
