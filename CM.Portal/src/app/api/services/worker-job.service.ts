/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiWorkerJobApiWorkerJobAssignJobPost } from '../fn/worker-job/api-worker-job-api-worker-job-assign-job-post';
import { ApiWorkerJobApiWorkerJobAssignJobPost$Params } from '../fn/worker-job/api-worker-job-api-worker-job-assign-job-post';
import { apiWorkerJobApiWorkerJobGetAssignedWorkersIdGet } from '../fn/worker-job/api-worker-job-api-worker-job-get-assigned-workers-id-get';
import { ApiWorkerJobApiWorkerJobGetAssignedWorkersIdGet$Params } from '../fn/worker-job/api-worker-job-api-worker-job-get-assigned-workers-id-get';
import { apiWorkerJobApiWorkerJobUnassignJobIdDelete } from '../fn/worker-job/api-worker-job-api-worker-job-unassign-job-id-delete';
import { ApiWorkerJobApiWorkerJobUnassignJobIdDelete$Params } from '../fn/worker-job/api-worker-job-api-worker-job-unassign-job-id-delete';
import { UserDto } from '../models/user-dto';
import { WorkerJobDto } from '../models/worker-job-dto';

@Injectable({ providedIn: 'root' })
export class WorkerJobService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiWorkerJobApiWorkerJobGetAssignedWorkersIdGet()` */
  static readonly ApiWorkerJobApiWorkerJobGetAssignedWorkersIdGetPath = '/api/WorkerJob/api/WorkerJob/GetAssignedWorkers/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiWorkerJobApiWorkerJobGetAssignedWorkersIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWorkerJobApiWorkerJobGetAssignedWorkersIdGet$Response(params: ApiWorkerJobApiWorkerJobGetAssignedWorkersIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<UserDto>>> {
    return apiWorkerJobApiWorkerJobGetAssignedWorkersIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiWorkerJobApiWorkerJobGetAssignedWorkersIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWorkerJobApiWorkerJobGetAssignedWorkersIdGet(params: ApiWorkerJobApiWorkerJobGetAssignedWorkersIdGet$Params, context?: HttpContext): Observable<Array<UserDto>> {
    return this.apiWorkerJobApiWorkerJobGetAssignedWorkersIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<UserDto>>): Array<UserDto> => r.body)
    );
  }

  /** Path part for operation `apiWorkerJobApiWorkerJobAssignJobPost()` */
  static readonly ApiWorkerJobApiWorkerJobAssignJobPostPath = '/api/WorkerJob/api/WorkerJob/AssignJob';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiWorkerJobApiWorkerJobAssignJobPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiWorkerJobApiWorkerJobAssignJobPost$Response(params?: ApiWorkerJobApiWorkerJobAssignJobPost$Params, context?: HttpContext): Observable<StrictHttpResponse<WorkerJobDto>> {
    return apiWorkerJobApiWorkerJobAssignJobPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiWorkerJobApiWorkerJobAssignJobPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiWorkerJobApiWorkerJobAssignJobPost(params?: ApiWorkerJobApiWorkerJobAssignJobPost$Params, context?: HttpContext): Observable<WorkerJobDto> {
    return this.apiWorkerJobApiWorkerJobAssignJobPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<WorkerJobDto>): WorkerJobDto => r.body)
    );
  }

  /** Path part for operation `apiWorkerJobApiWorkerJobUnassignJobIdDelete()` */
  static readonly ApiWorkerJobApiWorkerJobUnassignJobIdDeletePath = '/api/WorkerJob/api/WorkerJob/UnassignJob/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiWorkerJobApiWorkerJobUnassignJobIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWorkerJobApiWorkerJobUnassignJobIdDelete$Response(params: ApiWorkerJobApiWorkerJobUnassignJobIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiWorkerJobApiWorkerJobUnassignJobIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiWorkerJobApiWorkerJobUnassignJobIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWorkerJobApiWorkerJobUnassignJobIdDelete(params: ApiWorkerJobApiWorkerJobUnassignJobIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiWorkerJobApiWorkerJobUnassignJobIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
