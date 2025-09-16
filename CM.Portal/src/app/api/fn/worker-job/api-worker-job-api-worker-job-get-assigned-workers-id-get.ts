/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UserDto } from '../../models/user-dto';

export interface ApiWorkerJobApiWorkerJobGetAssignedWorkersIdGet$Params {
  id: number;
}

export function apiWorkerJobApiWorkerJobGetAssignedWorkersIdGet(http: HttpClient, rootUrl: string, params: ApiWorkerJobApiWorkerJobGetAssignedWorkersIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<UserDto>>> {
  const rb = new RequestBuilder(rootUrl, apiWorkerJobApiWorkerJobGetAssignedWorkersIdGet.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<UserDto>>;
    })
  );
}

apiWorkerJobApiWorkerJobGetAssignedWorkersIdGet.PATH = '/api/WorkerJob/api/WorkerJob/GetAssignedWorkers/{id}';
