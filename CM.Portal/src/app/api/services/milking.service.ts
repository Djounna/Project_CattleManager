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

import { MilkingDto } from '../models/milking-dto';

@Injectable({
  providedIn: 'root',
})
export class MilkingService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiMilkingIdGet
   */
  static readonly ApiMilkingIdGetPath = '/api/Milking/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMilkingIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMilkingIdGet$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<MilkingDto>> {

    const rb = new RequestBuilder(this.rootUrl, MilkingService.ApiMilkingIdGetPath, 'get');
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
        return r as StrictHttpResponse<MilkingDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiMilkingIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMilkingIdGet(params: {
    id: number;
    context?: HttpContext
  }
): Observable<MilkingDto> {

    return this.apiMilkingIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<MilkingDto>) => r.body as MilkingDto)
    );
  }

  /**
   * Path part for operation apiMilkingGet
   */
  static readonly ApiMilkingGetPath = '/api/Milking';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMilkingGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMilkingGet$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<MilkingDto>>> {

    const rb = new RequestBuilder(this.rootUrl, MilkingService.ApiMilkingGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<MilkingDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiMilkingGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMilkingGet(params?: {
    context?: HttpContext
  }
): Observable<Array<MilkingDto>> {

    return this.apiMilkingGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<MilkingDto>>) => r.body as Array<MilkingDto>)
    );
  }

  /**
   * Path part for operation apiMilkingPut
   */
  static readonly ApiMilkingPutPath = '/api/Milking';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMilkingPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMilkingPut$Response(params?: {
    context?: HttpContext
    body?: MilkingDto
  }
): Observable<StrictHttpResponse<MilkingDto>> {

    const rb = new RequestBuilder(this.rootUrl, MilkingService.ApiMilkingPutPath, 'put');
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
        return r as StrictHttpResponse<MilkingDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiMilkingPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMilkingPut(params?: {
    context?: HttpContext
    body?: MilkingDto
  }
): Observable<MilkingDto> {

    return this.apiMilkingPut$Response(params).pipe(
      map((r: StrictHttpResponse<MilkingDto>) => r.body as MilkingDto)
    );
  }

  /**
   * Path part for operation apiMilkingPost
   */
  static readonly ApiMilkingPostPath = '/api/Milking';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMilkingPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMilkingPost$Response(params?: {
    context?: HttpContext
    body?: MilkingDto
  }
): Observable<StrictHttpResponse<MilkingDto>> {

    const rb = new RequestBuilder(this.rootUrl, MilkingService.ApiMilkingPostPath, 'post');
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
        return r as StrictHttpResponse<MilkingDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiMilkingPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMilkingPost(params?: {
    context?: HttpContext
    body?: MilkingDto
  }
): Observable<MilkingDto> {

    return this.apiMilkingPost$Response(params).pipe(
      map((r: StrictHttpResponse<MilkingDto>) => r.body as MilkingDto)
    );
  }

  /**
   * Path part for operation apiMilkingDelete
   */
  static readonly ApiMilkingDeletePath = '/api/Milking';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMilkingDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMilkingDelete$Response(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MilkingService.ApiMilkingDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiMilkingDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMilkingDelete(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiMilkingDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
