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

import { ConditionDto } from '../models/condition-dto';

@Injectable({
  providedIn: 'root',
})
export class ConditionService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiConditionIdGet
   */
  static readonly ApiConditionIdGetPath = '/api/Condition/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiConditionIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiConditionIdGet$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ConditionDto>> {

    const rb = new RequestBuilder(this.rootUrl, ConditionService.ApiConditionIdGetPath, 'get');
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
        return r as StrictHttpResponse<ConditionDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiConditionIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiConditionIdGet(params: {
    id: number;
    context?: HttpContext
  }
): Observable<ConditionDto> {

    return this.apiConditionIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<ConditionDto>) => r.body as ConditionDto)
    );
  }

  /**
   * Path part for operation apiConditionGet
   */
  static readonly ApiConditionGetPath = '/api/Condition';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiConditionGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiConditionGet$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<ConditionDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ConditionService.ApiConditionGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ConditionDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiConditionGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiConditionGet(params?: {
    context?: HttpContext
  }
): Observable<Array<ConditionDto>> {

    return this.apiConditionGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ConditionDto>>) => r.body as Array<ConditionDto>)
    );
  }

  /**
   * Path part for operation apiConditionPut
   */
  static readonly ApiConditionPutPath = '/api/Condition';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiConditionPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiConditionPut$Response(params?: {
    context?: HttpContext
    body?: ConditionDto
  }
): Observable<StrictHttpResponse<ConditionDto>> {

    const rb = new RequestBuilder(this.rootUrl, ConditionService.ApiConditionPutPath, 'put');
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
        return r as StrictHttpResponse<ConditionDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiConditionPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiConditionPut(params?: {
    context?: HttpContext
    body?: ConditionDto
  }
): Observable<ConditionDto> {

    return this.apiConditionPut$Response(params).pipe(
      map((r: StrictHttpResponse<ConditionDto>) => r.body as ConditionDto)
    );
  }

  /**
   * Path part for operation apiConditionPost
   */
  static readonly ApiConditionPostPath = '/api/Condition';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiConditionPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiConditionPost$Response(params?: {
    context?: HttpContext
    body?: ConditionDto
  }
): Observable<StrictHttpResponse<ConditionDto>> {

    const rb = new RequestBuilder(this.rootUrl, ConditionService.ApiConditionPostPath, 'post');
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
        return r as StrictHttpResponse<ConditionDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiConditionPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiConditionPost(params?: {
    context?: HttpContext
    body?: ConditionDto
  }
): Observable<ConditionDto> {

    return this.apiConditionPost$Response(params).pipe(
      map((r: StrictHttpResponse<ConditionDto>) => r.body as ConditionDto)
    );
  }

  /**
   * Path part for operation apiConditionDelete
   */
  static readonly ApiConditionDeletePath = '/api/Condition';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiConditionDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiConditionDelete$Response(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ConditionService.ApiConditionDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiConditionDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiConditionDelete(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiConditionDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiConditionCowIdGet
   */
  static readonly ApiConditionCowIdGetPath = '/api/Condition/{cowId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiConditionCowIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiConditionCowIdGet$Response(params: {
    cowId: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<ConditionDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ConditionService.ApiConditionCowIdGetPath, 'get');
    if (params) {
      rb.path('cowId', params.cowId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ConditionDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiConditionCowIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiConditionCowIdGet(params: {
    cowId: number;
    context?: HttpContext
  }
): Observable<Array<ConditionDto>> {

    return this.apiConditionCowIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ConditionDto>>) => r.body as Array<ConditionDto>)
    );
  }

}
