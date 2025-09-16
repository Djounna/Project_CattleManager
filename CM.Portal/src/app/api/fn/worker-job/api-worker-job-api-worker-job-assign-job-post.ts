/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { WorkerJobDto } from '../../models/worker-job-dto';

export interface ApiWorkerJobApiWorkerJobAssignJobPost$Params {
      body?: WorkerJobDto
}

export function apiWorkerJobApiWorkerJobAssignJobPost(http: HttpClient, rootUrl: string, params?: ApiWorkerJobApiWorkerJobAssignJobPost$Params, context?: HttpContext): Observable<StrictHttpResponse<WorkerJobDto>> {
  const rb = new RequestBuilder(rootUrl, apiWorkerJobApiWorkerJobAssignJobPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<WorkerJobDto>;
    })
  );
}

apiWorkerJobApiWorkerJobAssignJobPost.PATH = '/api/WorkerJob/api/WorkerJob/AssignJob';
