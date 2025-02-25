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

import { TreatmentDto } from '../models/treatment-dto';

@Injectable({
  providedIn: 'root',
})
export class TreatmentService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiTreatmentIdGet
   */
  static readonly ApiTreatmentIdGetPath = '/api/Treatment/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTreatmentIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTreatmentIdGet$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<TreatmentDto>> {

    const rb = new RequestBuilder(this.rootUrl, TreatmentService.ApiTreatmentIdGetPath, 'get');
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
        return r as StrictHttpResponse<TreatmentDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTreatmentIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTreatmentIdGet(params: {
    id: number;
    context?: HttpContext
  }
): Observable<TreatmentDto> {

    return this.apiTreatmentIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<TreatmentDto>) => r.body as TreatmentDto)
    );
  }

  /**
   * Path part for operation apiTreatmentGet
   */
  static readonly ApiTreatmentGetPath = '/api/Treatment';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTreatmentGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTreatmentGet$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<TreatmentDto>>> {

    const rb = new RequestBuilder(this.rootUrl, TreatmentService.ApiTreatmentGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<TreatmentDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTreatmentGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTreatmentGet(params?: {
    context?: HttpContext
  }
): Observable<Array<TreatmentDto>> {

    return this.apiTreatmentGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<TreatmentDto>>) => r.body as Array<TreatmentDto>)
    );
  }

  /**
   * Path part for operation apiTreatmentPut
   */
  static readonly ApiTreatmentPutPath = '/api/Treatment';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTreatmentPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTreatmentPut$Response(params?: {
    context?: HttpContext
    body?: TreatmentDto
  }
): Observable<StrictHttpResponse<TreatmentDto>> {

    const rb = new RequestBuilder(this.rootUrl, TreatmentService.ApiTreatmentPutPath, 'put');
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
        return r as StrictHttpResponse<TreatmentDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTreatmentPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTreatmentPut(params?: {
    context?: HttpContext
    body?: TreatmentDto
  }
): Observable<TreatmentDto> {

    return this.apiTreatmentPut$Response(params).pipe(
      map((r: StrictHttpResponse<TreatmentDto>) => r.body as TreatmentDto)
    );
  }

  /**
   * Path part for operation apiTreatmentPost
   */
  static readonly ApiTreatmentPostPath = '/api/Treatment';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTreatmentPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTreatmentPost$Response(params?: {
    context?: HttpContext
    body?: TreatmentDto
  }
): Observable<StrictHttpResponse<TreatmentDto>> {

    const rb = new RequestBuilder(this.rootUrl, TreatmentService.ApiTreatmentPostPath, 'post');
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
        return r as StrictHttpResponse<TreatmentDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTreatmentPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTreatmentPost(params?: {
    context?: HttpContext
    body?: TreatmentDto
  }
): Observable<TreatmentDto> {

    return this.apiTreatmentPost$Response(params).pipe(
      map((r: StrictHttpResponse<TreatmentDto>) => r.body as TreatmentDto)
    );
  }

  /**
   * Path part for operation apiTreatmentDelete
   */
  static readonly ApiTreatmentDeletePath = '/api/Treatment';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTreatmentDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTreatmentDelete$Response(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TreatmentService.ApiTreatmentDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiTreatmentDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTreatmentDelete(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiTreatmentDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
