/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { UserDto } from '../models/user-dto';
import { WorkerJobDto } from '../models/worker-job-dto';

@Injectable({
  providedIn: 'root',
})
export class WorkerJobService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiWorkerJobApiWorkerJobGetAssignedWorkersIdGet
   */
  static readonly ApiWorkerJobApiWorkerJobGetAssignedWorkersIdGetPath = '/api/WorkerJob/api/WorkerJob/GetAssignedWorkers/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiWorkerJobApiWorkerJobGetAssignedWorkersIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWorkerJobApiWorkerJobGetAssignedWorkersIdGet$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<UserDto>>> {

    const rb = new RequestBuilder(this.rootUrl, WorkerJobService.ApiWorkerJobApiWorkerJobGetAssignedWorkersIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiWorkerJobApiWorkerJobGetAssignedWorkersIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWorkerJobApiWorkerJobGetAssignedWorkersIdGet(params: {
    id: number;
    context?: HttpContext
  }
): Observable<Array<UserDto>> {

    return this.apiWorkerJobApiWorkerJobGetAssignedWorkersIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserDto>>) => r.body as Array<UserDto>)
    );
  }

  /**
   * Path part for operation apiWorkerJobApiWorkerJobAssignJobPost
   */
  static readonly ApiWorkerJobApiWorkerJobAssignJobPostPath = '/api/WorkerJob/api/WorkerJob/AssignJob';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiWorkerJobApiWorkerJobAssignJobPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiWorkerJobApiWorkerJobAssignJobPost$Response(params?: {
    context?: HttpContext
    body?: WorkerJobDto
  }
): Observable<StrictHttpResponse<WorkerJobDto>> {

    const rb = new RequestBuilder(this.rootUrl, WorkerJobService.ApiWorkerJobApiWorkerJobAssignJobPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WorkerJobDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiWorkerJobApiWorkerJobAssignJobPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiWorkerJobApiWorkerJobAssignJobPost(params?: {
    context?: HttpContext
    body?: WorkerJobDto
  }
): Observable<WorkerJobDto> {

    return this.apiWorkerJobApiWorkerJobAssignJobPost$Response(params).pipe(
      map((r: StrictHttpResponse<WorkerJobDto>) => r.body as WorkerJobDto)
    );
  }

  /**
   * Path part for operation apiWorkerJobApiWorkerJobUnassignJobIdDelete
   */
  static readonly ApiWorkerJobApiWorkerJobUnassignJobIdDeletePath = '/api/WorkerJob/api/WorkerJob/UnassignJob/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiWorkerJobApiWorkerJobUnassignJobIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWorkerJobApiWorkerJobUnassignJobIdDelete$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, WorkerJobService.ApiWorkerJobApiWorkerJobUnassignJobIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiWorkerJobApiWorkerJobUnassignJobIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWorkerJobApiWorkerJobUnassignJobIdDelete(params: {
    id: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiWorkerJobApiWorkerJobUnassignJobIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
