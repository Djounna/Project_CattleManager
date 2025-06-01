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

import { AlertDto } from '../models/alert-dto';

@Injectable({
  providedIn: 'root',
})
export class AlertService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiAlertGet
   */
  static readonly ApiAlertGetPath = '/api/Alert';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlertGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertGet$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<AlertDto>>> {

    const rb = new RequestBuilder(this.rootUrl, AlertService.ApiAlertGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AlertDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAlertGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertGet(params?: {
    context?: HttpContext
  }
): Observable<Array<AlertDto>> {

    return this.apiAlertGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<AlertDto>>) => r.body as Array<AlertDto>)
    );
  }

  /**
   * Path part for operation apiAlertPut
   */
  static readonly ApiAlertPutPath = '/api/Alert';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlertPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAlertPut$Response(params?: {
    context?: HttpContext
    body?: AlertDto
  }
): Observable<StrictHttpResponse<AlertDto>> {

    const rb = new RequestBuilder(this.rootUrl, AlertService.ApiAlertPutPath, 'put');
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
        return r as StrictHttpResponse<AlertDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAlertPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAlertPut(params?: {
    context?: HttpContext
    body?: AlertDto
  }
): Observable<AlertDto> {

    return this.apiAlertPut$Response(params).pipe(
      map((r: StrictHttpResponse<AlertDto>) => r.body as AlertDto)
    );
  }

  /**
   * Path part for operation apiAlertPost
   */
  static readonly ApiAlertPostPath = '/api/Alert';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlertPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAlertPost$Response(params?: {
    context?: HttpContext
    body?: AlertDto
  }
): Observable<StrictHttpResponse<AlertDto>> {

    const rb = new RequestBuilder(this.rootUrl, AlertService.ApiAlertPostPath, 'post');
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
        return r as StrictHttpResponse<AlertDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAlertPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAlertPost(params?: {
    context?: HttpContext
    body?: AlertDto
  }
): Observable<AlertDto> {

    return this.apiAlertPost$Response(params).pipe(
      map((r: StrictHttpResponse<AlertDto>) => r.body as AlertDto)
    );
  }

  /**
   * Path part for operation apiAlertDelete
   */
  static readonly ApiAlertDeletePath = '/api/Alert';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlertDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertDelete$Response(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AlertService.ApiAlertDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiAlertDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertDelete(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiAlertDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAlertActiveGet
   */
  static readonly ApiAlertActiveGetPath = '/api/Alert/active';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlertActiveGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertActiveGet$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<AlertDto>>> {

    const rb = new RequestBuilder(this.rootUrl, AlertService.ApiAlertActiveGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AlertDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAlertActiveGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertActiveGet(params?: {
    context?: HttpContext
  }
): Observable<Array<AlertDto>> {

    return this.apiAlertActiveGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<AlertDto>>) => r.body as Array<AlertDto>)
    );
  }

  /**
   * Path part for operation apiAlertIdGet
   */
  static readonly ApiAlertIdGetPath = '/api/Alert/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlertIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertIdGet$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<AlertDto>> {

    const rb = new RequestBuilder(this.rootUrl, AlertService.ApiAlertIdGetPath, 'get');
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
        return r as StrictHttpResponse<AlertDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAlertIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertIdGet(params: {
    id: number;
    context?: HttpContext
  }
): Observable<AlertDto> {

    return this.apiAlertIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<AlertDto>) => r.body as AlertDto)
    );
  }

}
