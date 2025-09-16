/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AssignPenDetailsDto } from '../../models/assign-pen-details-dto';
import { ProblemDetails } from '../../models/problem-details';

export interface ApiPenAssignPost$Params {
      body?: AssignPenDetailsDto
}

export function apiPenAssignPost(http: HttpClient, rootUrl: string, params?: ApiPenAssignPost$Params, context?: HttpContext): Observable<StrictHttpResponse<ProblemDetails>> {
  const rb = new RequestBuilder(rootUrl, apiPenAssignPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ProblemDetails>;
    })
  );
}

apiPenAssignPost.PATH = '/api/Pen/assign';
