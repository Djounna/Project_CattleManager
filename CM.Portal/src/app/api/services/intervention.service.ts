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

import { InterventionDto } from '../models/intervention-dto';

@Injectable({
  providedIn: 'root',
})
export class InterventionService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiInterventionIdGet
   */
  static readonly ApiInterventionIdGetPath = '/api/Intervention/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInterventionIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInterventionIdGet$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<InterventionDto>> {

    const rb = new RequestBuilder(this.rootUrl, InterventionService.ApiInterventionIdGetPath, 'get');
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
        return r as StrictHttpResponse<InterventionDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiInterventionIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInterventionIdGet(params: {
    id: number;
    context?: HttpContext
  }
): Observable<InterventionDto> {

    return this.apiInterventionIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<InterventionDto>) => r.body as InterventionDto)
    );
  }

  /**
   * Path part for operation apiInterventionGet
   */
  static readonly ApiInterventionGetPath = '/api/Intervention';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInterventionGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInterventionGet$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<InterventionDto>>> {

    const rb = new RequestBuilder(this.rootUrl, InterventionService.ApiInterventionGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<InterventionDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiInterventionGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInterventionGet(params?: {
    context?: HttpContext
  }
): Observable<Array<InterventionDto>> {

    return this.apiInterventionGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<InterventionDto>>) => r.body as Array<InterventionDto>)
    );
  }

  /**
   * Path part for operation apiInterventionPut
   */
  static readonly ApiInterventionPutPath = '/api/Intervention';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInterventionPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiInterventionPut$Response(params?: {
    context?: HttpContext
    body?: InterventionDto
  }
): Observable<StrictHttpResponse<InterventionDto>> {

    const rb = new RequestBuilder(this.rootUrl, InterventionService.ApiInterventionPutPath, 'put');
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
        return r as StrictHttpResponse<InterventionDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiInterventionPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiInterventionPut(params?: {
    context?: HttpContext
    body?: InterventionDto
  }
): Observable<InterventionDto> {

    return this.apiInterventionPut$Response(params).pipe(
      map((r: StrictHttpResponse<InterventionDto>) => r.body as InterventionDto)
    );
  }

  /**
   * Path part for operation apiInterventionPost
   */
  static readonly ApiInterventionPostPath = '/api/Intervention';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInterventionPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiInterventionPost$Response(params?: {
    context?: HttpContext
    body?: InterventionDto
  }
): Observable<StrictHttpResponse<InterventionDto>> {

    const rb = new RequestBuilder(this.rootUrl, InterventionService.ApiInterventionPostPath, 'post');
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
        return r as StrictHttpResponse<InterventionDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiInterventionPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiInterventionPost(params?: {
    context?: HttpContext
    body?: InterventionDto
  }
): Observable<InterventionDto> {

    return this.apiInterventionPost$Response(params).pipe(
      map((r: StrictHttpResponse<InterventionDto>) => r.body as InterventionDto)
    );
  }

  /**
   * Path part for operation apiInterventionDelete
   */
  static readonly ApiInterventionDeletePath = '/api/Intervention';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInterventionDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInterventionDelete$Response(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, InterventionService.ApiInterventionDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiInterventionDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInterventionDelete(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiInterventionDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
