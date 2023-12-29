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

import { PenDto } from '../models/pen-dto';

@Injectable({
  providedIn: 'root',
})
export class PenService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiPenGet
   */
  static readonly ApiPenGetPath = '/api/Pen';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPenGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPenGet$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<PenDto>>> {

    const rb = new RequestBuilder(this.rootUrl, PenService.ApiPenGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PenDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPenGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPenGet(params?: {
    context?: HttpContext
  }
): Observable<Array<PenDto>> {

    return this.apiPenGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<PenDto>>) => r.body as Array<PenDto>)
    );
  }

  /**
   * Path part for operation apiPenPut
   */
  static readonly ApiPenPutPath = '/api/Pen';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPenPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPenPut$Response(params?: {
    context?: HttpContext
    body?: PenDto
  }
): Observable<StrictHttpResponse<PenDto>> {

    const rb = new RequestBuilder(this.rootUrl, PenService.ApiPenPutPath, 'put');
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
        return r as StrictHttpResponse<PenDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPenPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPenPut(params?: {
    context?: HttpContext
    body?: PenDto
  }
): Observable<PenDto> {

    return this.apiPenPut$Response(params).pipe(
      map((r: StrictHttpResponse<PenDto>) => r.body as PenDto)
    );
  }

  /**
   * Path part for operation apiPenPost
   */
  static readonly ApiPenPostPath = '/api/Pen';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPenPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPenPost$Response(params?: {
    context?: HttpContext
    body?: PenDto
  }
): Observable<StrictHttpResponse<PenDto>> {

    const rb = new RequestBuilder(this.rootUrl, PenService.ApiPenPostPath, 'post');
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
        return r as StrictHttpResponse<PenDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPenPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPenPost(params?: {
    context?: HttpContext
    body?: PenDto
  }
): Observable<PenDto> {

    return this.apiPenPost$Response(params).pipe(
      map((r: StrictHttpResponse<PenDto>) => r.body as PenDto)
    );
  }

  /**
   * Path part for operation apiPenDelete
   */
  static readonly ApiPenDeletePath = '/api/Pen';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPenDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPenDelete$Response(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PenService.ApiPenDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiPenDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPenDelete(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiPenDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiPenIdGet
   */
  static readonly ApiPenIdGetPath = '/api/Pen/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPenIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPenIdGet$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PenDto>> {

    const rb = new RequestBuilder(this.rootUrl, PenService.ApiPenIdGetPath, 'get');
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
        return r as StrictHttpResponse<PenDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPenIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPenIdGet(params: {
    id: number;
    context?: HttpContext
  }
): Observable<PenDto> {

    return this.apiPenIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<PenDto>) => r.body as PenDto)
    );
  }

}
