/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AssignGroupDetailsDto } from '../../models/assign-group-details-dto';
import { ProblemDetails } from '../../models/problem-details';

export interface ApiGroupAssignPost$Params {
      body?: AssignGroupDetailsDto
}

export function apiGroupAssignPost(http: HttpClient, rootUrl: string, params?: ApiGroupAssignPost$Params, context?: HttpContext): Observable<StrictHttpResponse<ProblemDetails>> {
  const rb = new RequestBuilder(rootUrl, apiGroupAssignPost.PATH, 'post');
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

apiGroupAssignPost.PATH = '/api/Group/assign';
