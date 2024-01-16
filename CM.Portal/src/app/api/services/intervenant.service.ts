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

import { IntervenantDto } from '../models/intervenant-dto';

@Injectable({
  providedIn: 'root',
})
export class IntervenantService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiIntervenantIdGet
   */
  static readonly ApiIntervenantIdGetPath = '/api/Intervenant/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiIntervenantIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiIntervenantIdGet$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<IntervenantDto>> {

    const rb = new RequestBuilder(this.rootUrl, IntervenantService.ApiIntervenantIdGetPath, 'get');
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
        return r as StrictHttpResponse<IntervenantDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiIntervenantIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiIntervenantIdGet(params: {
    id: number;
    context?: HttpContext
  }
): Observable<IntervenantDto> {

    return this.apiIntervenantIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<IntervenantDto>) => r.body as IntervenantDto)
    );
  }

  /**
   * Path part for operation apiIntervenantGet
   */
  static readonly ApiIntervenantGetPath = '/api/Intervenant';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiIntervenantGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiIntervenantGet$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<IntervenantDto>>> {

    const rb = new RequestBuilder(this.rootUrl, IntervenantService.ApiIntervenantGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<IntervenantDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiIntervenantGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiIntervenantGet(params?: {
    context?: HttpContext
  }
): Observable<Array<IntervenantDto>> {

    return this.apiIntervenantGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<IntervenantDto>>) => r.body as Array<IntervenantDto>)
    );
  }

  /**
   * Path part for operation apiIntervenantPut
   */
  static readonly ApiIntervenantPutPath = '/api/Intervenant';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiIntervenantPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiIntervenantPut$Response(params?: {
    context?: HttpContext
    body?: IntervenantDto
  }
): Observable<StrictHttpResponse<IntervenantDto>> {

    const rb = new RequestBuilder(this.rootUrl, IntervenantService.ApiIntervenantPutPath, 'put');
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
        return r as StrictHttpResponse<IntervenantDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiIntervenantPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiIntervenantPut(params?: {
    context?: HttpContext
    body?: IntervenantDto
  }
): Observable<IntervenantDto> {

    return this.apiIntervenantPut$Response(params).pipe(
      map((r: StrictHttpResponse<IntervenantDto>) => r.body as IntervenantDto)
    );
  }

  /**
   * Path part for operation apiIntervenantPost
   */
  static readonly ApiIntervenantPostPath = '/api/Intervenant';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiIntervenantPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiIntervenantPost$Response(params?: {
    context?: HttpContext
    body?: IntervenantDto
  }
): Observable<StrictHttpResponse<IntervenantDto>> {

    const rb = new RequestBuilder(this.rootUrl, IntervenantService.ApiIntervenantPostPath, 'post');
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
        return r as StrictHttpResponse<IntervenantDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiIntervenantPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiIntervenantPost(params?: {
    context?: HttpContext
    body?: IntervenantDto
  }
): Observable<IntervenantDto> {

    return this.apiIntervenantPost$Response(params).pipe(
      map((r: StrictHttpResponse<IntervenantDto>) => r.body as IntervenantDto)
    );
  }

  /**
   * Path part for operation apiIntervenantDelete
   */
  static readonly ApiIntervenantDeletePath = '/api/Intervenant';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiIntervenantDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiIntervenantDelete$Response(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, IntervenantService.ApiIntervenantDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiIntervenantDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiIntervenantDelete(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiIntervenantDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
