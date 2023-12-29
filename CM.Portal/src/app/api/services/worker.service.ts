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

import { WorkerDto } from '../models/worker-dto';

@Injectable({
  providedIn: 'root',
})
export class WorkerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiWorkerGet
   */
  static readonly ApiWorkerGetPath = '/api/Worker';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiWorkerGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWorkerGet$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<WorkerDto>>> {

    const rb = new RequestBuilder(this.rootUrl, WorkerService.ApiWorkerGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<WorkerDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiWorkerGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWorkerGet(params?: {
    context?: HttpContext
  }
): Observable<Array<WorkerDto>> {

    return this.apiWorkerGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<WorkerDto>>) => r.body as Array<WorkerDto>)
    );
  }

  /**
   * Path part for operation apiWorkerPut
   */
  static readonly ApiWorkerPutPath = '/api/Worker';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiWorkerPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiWorkerPut$Response(params?: {
    context?: HttpContext
    body?: WorkerDto
  }
): Observable<StrictHttpResponse<WorkerDto>> {

    const rb = new RequestBuilder(this.rootUrl, WorkerService.ApiWorkerPutPath, 'put');
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
        return r as StrictHttpResponse<WorkerDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiWorkerPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiWorkerPut(params?: {
    context?: HttpContext
    body?: WorkerDto
  }
): Observable<WorkerDto> {

    return this.apiWorkerPut$Response(params).pipe(
      map((r: StrictHttpResponse<WorkerDto>) => r.body as WorkerDto)
    );
  }

  /**
   * Path part for operation apiWorkerPost
   */
  static readonly ApiWorkerPostPath = '/api/Worker';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiWorkerPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiWorkerPost$Response(params?: {
    context?: HttpContext
    body?: WorkerDto
  }
): Observable<StrictHttpResponse<WorkerDto>> {

    const rb = new RequestBuilder(this.rootUrl, WorkerService.ApiWorkerPostPath, 'post');
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
        return r as StrictHttpResponse<WorkerDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiWorkerPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiWorkerPost(params?: {
    context?: HttpContext
    body?: WorkerDto
  }
): Observable<WorkerDto> {

    return this.apiWorkerPost$Response(params).pipe(
      map((r: StrictHttpResponse<WorkerDto>) => r.body as WorkerDto)
    );
  }

  /**
   * Path part for operation apiWorkerDelete
   */
  static readonly ApiWorkerDeletePath = '/api/Worker';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiWorkerDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWorkerDelete$Response(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, WorkerService.ApiWorkerDeletePath, 'delete');
    if (params) {
      rb.query('id', params.id, {});
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
   * To access the full response (for headers, for example), `apiWorkerDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWorkerDelete(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiWorkerDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiWorkerIdGet
   */
  static readonly ApiWorkerIdGetPath = '/api/Worker/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiWorkerIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWorkerIdGet$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<WorkerDto>> {

    const rb = new RequestBuilder(this.rootUrl, WorkerService.ApiWorkerIdGetPath, 'get');
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
        return r as StrictHttpResponse<WorkerDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiWorkerIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWorkerIdGet(params: {
    id: number;
    context?: HttpContext
  }
): Observable<WorkerDto> {

    return this.apiWorkerIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<WorkerDto>) => r.body as WorkerDto)
    );
  }

}
