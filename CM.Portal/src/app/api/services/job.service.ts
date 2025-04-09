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

import { JobDetailsDto } from '../models/job-details-dto';
import { JobDto } from '../models/job-dto';

@Injectable({
  providedIn: 'root',
})
export class JobService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiJobGet
   */
  static readonly ApiJobGetPath = '/api/Job';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiJobGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiJobGet$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<JobDto>>> {

    const rb = new RequestBuilder(this.rootUrl, JobService.ApiJobGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<JobDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiJobGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiJobGet(params?: {
    context?: HttpContext
  }
): Observable<Array<JobDto>> {

    return this.apiJobGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<JobDto>>) => r.body as Array<JobDto>)
    );
  }

  /**
   * Path part for operation apiJobPut
   */
  static readonly ApiJobPutPath = '/api/Job';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiJobPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiJobPut$Response(params?: {
    context?: HttpContext
    body?: JobDto
  }
): Observable<StrictHttpResponse<JobDto>> {

    const rb = new RequestBuilder(this.rootUrl, JobService.ApiJobPutPath, 'put');
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
        return r as StrictHttpResponse<JobDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiJobPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiJobPut(params?: {
    context?: HttpContext
    body?: JobDto
  }
): Observable<JobDto> {

    return this.apiJobPut$Response(params).pipe(
      map((r: StrictHttpResponse<JobDto>) => r.body as JobDto)
    );
  }

  /**
   * Path part for operation apiJobPost
   */
  static readonly ApiJobPostPath = '/api/Job';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiJobPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiJobPost$Response(params?: {
    context?: HttpContext
    body?: JobDto
  }
): Observable<StrictHttpResponse<JobDto>> {

    const rb = new RequestBuilder(this.rootUrl, JobService.ApiJobPostPath, 'post');
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
        return r as StrictHttpResponse<JobDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiJobPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiJobPost(params?: {
    context?: HttpContext
    body?: JobDto
  }
): Observable<JobDto> {

    return this.apiJobPost$Response(params).pipe(
      map((r: StrictHttpResponse<JobDto>) => r.body as JobDto)
    );
  }

  /**
   * Path part for operation apiJobDelete
   */
  static readonly ApiJobDeletePath = '/api/Job';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiJobDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiJobDelete$Response(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, JobService.ApiJobDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiJobDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiJobDelete(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiJobDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiJobDateGet
   */
  static readonly ApiJobDateGetPath = '/api/Job/date';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiJobDateGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiJobDateGet$Response(params?: {
    date?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<JobDto>>> {

    const rb = new RequestBuilder(this.rootUrl, JobService.ApiJobDateGetPath, 'get');
    if (params) {
      rb.query('date', params.date, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<JobDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiJobDateGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiJobDateGet(params?: {
    date?: string;
    context?: HttpContext
  }
): Observable<Array<JobDto>> {

    return this.apiJobDateGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<JobDto>>) => r.body as Array<JobDto>)
    );
  }

  /**
   * Path part for operation apiJobDetailsGet
   */
  static readonly ApiJobDetailsGetPath = '/api/Job/details';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiJobDetailsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiJobDetailsGet$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<JobDetailsDto>>> {

    const rb = new RequestBuilder(this.rootUrl, JobService.ApiJobDetailsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<JobDetailsDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiJobDetailsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiJobDetailsGet(params?: {
    context?: HttpContext
  }
): Observable<Array<JobDetailsDto>> {

    return this.apiJobDetailsGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<JobDetailsDto>>) => r.body as Array<JobDetailsDto>)
    );
  }

  /**
   * Path part for operation apiJobDetailsDateGet
   */
  static readonly ApiJobDetailsDateGetPath = '/api/Job/details/date';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiJobDetailsDateGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiJobDetailsDateGet$Response(params?: {
    date?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<JobDetailsDto>>> {

    const rb = new RequestBuilder(this.rootUrl, JobService.ApiJobDetailsDateGetPath, 'get');
    if (params) {
      rb.query('date', params.date, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<JobDetailsDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiJobDetailsDateGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiJobDetailsDateGet(params?: {
    date?: string;
    context?: HttpContext
  }
): Observable<Array<JobDetailsDto>> {

    return this.apiJobDetailsDateGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<JobDetailsDto>>) => r.body as Array<JobDetailsDto>)
    );
  }

  /**
   * Path part for operation apiJobIdGet
   */
  static readonly ApiJobIdGetPath = '/api/Job/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiJobIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiJobIdGet$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<JobDto>> {

    const rb = new RequestBuilder(this.rootUrl, JobService.ApiJobIdGetPath, 'get');
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
        return r as StrictHttpResponse<JobDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiJobIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiJobIdGet(params: {
    id: number;
    context?: HttpContext
  }
): Observable<JobDto> {

    return this.apiJobIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<JobDto>) => r.body as JobDto)
    );
  }

}
