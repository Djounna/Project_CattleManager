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

import { CowDto } from '../models/cow-dto';

@Injectable({
  providedIn: 'root',
})
export class CowService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiCowIdGet
   */
  static readonly ApiCowIdGetPath = '/api/Cow/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCowIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCowIdGet$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<CowDto>> {

    const rb = new RequestBuilder(this.rootUrl, CowService.ApiCowIdGetPath, 'get');
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
        return r as StrictHttpResponse<CowDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCowIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCowIdGet(params: {
    id: number;
    context?: HttpContext
  }
): Observable<CowDto> {

    return this.apiCowIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<CowDto>) => r.body as CowDto)
    );
  }

  /**
   * Path part for operation apiCowGet
   */
  static readonly ApiCowGetPath = '/api/Cow';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCowGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCowGet$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<CowDto>>> {

    const rb = new RequestBuilder(this.rootUrl, CowService.ApiCowGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CowDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCowGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCowGet(params?: {
    context?: HttpContext
  }
): Observable<Array<CowDto>> {

    return this.apiCowGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CowDto>>) => r.body as Array<CowDto>)
    );
  }

  /**
   * Path part for operation apiCowPut
   */
  static readonly ApiCowPutPath = '/api/Cow';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCowPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCowPut$Response(params?: {
    context?: HttpContext
    body?: CowDto
  }
): Observable<StrictHttpResponse<CowDto>> {

    const rb = new RequestBuilder(this.rootUrl, CowService.ApiCowPutPath, 'put');
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
        return r as StrictHttpResponse<CowDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCowPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCowPut(params?: {
    context?: HttpContext
    body?: CowDto
  }
): Observable<CowDto> {

    return this.apiCowPut$Response(params).pipe(
      map((r: StrictHttpResponse<CowDto>) => r.body as CowDto)
    );
  }

  /**
   * Path part for operation apiCowPost
   */
  static readonly ApiCowPostPath = '/api/Cow';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCowPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCowPost$Response(params?: {
    context?: HttpContext
    body?: CowDto
  }
): Observable<StrictHttpResponse<CowDto>> {

    const rb = new RequestBuilder(this.rootUrl, CowService.ApiCowPostPath, 'post');
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
        return r as StrictHttpResponse<CowDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCowPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCowPost(params?: {
    context?: HttpContext
    body?: CowDto
  }
): Observable<CowDto> {

    return this.apiCowPost$Response(params).pipe(
      map((r: StrictHttpResponse<CowDto>) => r.body as CowDto)
    );
  }

  /**
   * Path part for operation apiCowDelete
   */
  static readonly ApiCowDeletePath = '/api/Cow';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCowDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCowDelete$Response(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CowService.ApiCowDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiCowDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCowDelete(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiCowDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
