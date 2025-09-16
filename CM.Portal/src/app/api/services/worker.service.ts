/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiWorkerGet } from '../fn/worker/api-worker-get';
import { ApiWorkerGet$Params } from '../fn/worker/api-worker-get';
import { UserDto } from '../models/user-dto';

@Injectable({ providedIn: 'root' })
export class WorkerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiWorkerGet()` */
  static readonly ApiWorkerGetPath = '/api/Worker';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiWorkerGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWorkerGet$Response(params?: ApiWorkerGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<UserDto>>> {
    return apiWorkerGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiWorkerGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWorkerGet(params?: ApiWorkerGet$Params, context?: HttpContext): Observable<Array<UserDto>> {
    return this.apiWorkerGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<UserDto>>): Array<UserDto> => r.body)
    );
  }

}
