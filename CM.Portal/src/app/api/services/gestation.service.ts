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

import { GestationDto } from '../models/gestation-dto';

@Injectable({
  providedIn: 'root',
})
export class GestationService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiGestationIdGet
   */
  static readonly ApiGestationIdGetPath = '/api/Gestation/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGestationIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGestationIdGet$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<GestationDto>> {

    const rb = new RequestBuilder(this.rootUrl, GestationService.ApiGestationIdGetPath, 'get');
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
        return r as StrictHttpResponse<GestationDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiGestationIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGestationIdGet(params: {
    id: number;
    context?: HttpContext
  }
): Observable<GestationDto> {

    return this.apiGestationIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<GestationDto>) => r.body as GestationDto)
    );
  }

  /**
   * Path part for operation apiGestationGet
   */
  static readonly ApiGestationGetPath = '/api/Gestation';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGestationGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGestationGet$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<GestationDto>>> {

    const rb = new RequestBuilder(this.rootUrl, GestationService.ApiGestationGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GestationDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiGestationGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGestationGet(params?: {
    context?: HttpContext
  }
): Observable<Array<GestationDto>> {

    return this.apiGestationGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<GestationDto>>) => r.body as Array<GestationDto>)
    );
  }

  /**
   * Path part for operation apiGestationPut
   */
  static readonly ApiGestationPutPath = '/api/Gestation';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGestationPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGestationPut$Response(params?: {
    context?: HttpContext
    body?: GestationDto
  }
): Observable<StrictHttpResponse<GestationDto>> {

    const rb = new RequestBuilder(this.rootUrl, GestationService.ApiGestationPutPath, 'put');
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
        return r as StrictHttpResponse<GestationDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiGestationPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGestationPut(params?: {
    context?: HttpContext
    body?: GestationDto
  }
): Observable<GestationDto> {

    return this.apiGestationPut$Response(params).pipe(
      map((r: StrictHttpResponse<GestationDto>) => r.body as GestationDto)
    );
  }

  /**
   * Path part for operation apiGestationPost
   */
  static readonly ApiGestationPostPath = '/api/Gestation';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGestationPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGestationPost$Response(params?: {
    context?: HttpContext
    body?: GestationDto
  }
): Observable<StrictHttpResponse<GestationDto>> {

    const rb = new RequestBuilder(this.rootUrl, GestationService.ApiGestationPostPath, 'post');
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
        return r as StrictHttpResponse<GestationDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiGestationPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGestationPost(params?: {
    context?: HttpContext
    body?: GestationDto
  }
): Observable<GestationDto> {

    return this.apiGestationPost$Response(params).pipe(
      map((r: StrictHttpResponse<GestationDto>) => r.body as GestationDto)
    );
  }

  /**
   * Path part for operation apiGestationDelete
   */
  static readonly ApiGestationDeletePath = '/api/Gestation';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGestationDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGestationDelete$Response(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, GestationService.ApiGestationDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiGestationDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGestationDelete(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiGestationDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
