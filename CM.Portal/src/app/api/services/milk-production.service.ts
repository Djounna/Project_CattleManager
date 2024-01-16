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

import { MilkProductionDto } from '../models/milk-production-dto';

@Injectable({
  providedIn: 'root',
})
export class MilkProductionService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiMilkProductionIdGet
   */
  static readonly ApiMilkProductionIdGetPath = '/api/MilkProduction/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMilkProductionIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMilkProductionIdGet$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<MilkProductionDto>> {

    const rb = new RequestBuilder(this.rootUrl, MilkProductionService.ApiMilkProductionIdGetPath, 'get');
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
        return r as StrictHttpResponse<MilkProductionDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiMilkProductionIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMilkProductionIdGet(params: {
    id: number;
    context?: HttpContext
  }
): Observable<MilkProductionDto> {

    return this.apiMilkProductionIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<MilkProductionDto>) => r.body as MilkProductionDto)
    );
  }

  /**
   * Path part for operation apiMilkProductionGet
   */
  static readonly ApiMilkProductionGetPath = '/api/MilkProduction';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMilkProductionGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMilkProductionGet$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<MilkProductionDto>>> {

    const rb = new RequestBuilder(this.rootUrl, MilkProductionService.ApiMilkProductionGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<MilkProductionDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiMilkProductionGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMilkProductionGet(params?: {
    context?: HttpContext
  }
): Observable<Array<MilkProductionDto>> {

    return this.apiMilkProductionGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<MilkProductionDto>>) => r.body as Array<MilkProductionDto>)
    );
  }

  /**
   * Path part for operation apiMilkProductionPut
   */
  static readonly ApiMilkProductionPutPath = '/api/MilkProduction';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMilkProductionPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMilkProductionPut$Response(params?: {
    context?: HttpContext
    body?: MilkProductionDto
  }
): Observable<StrictHttpResponse<MilkProductionDto>> {

    const rb = new RequestBuilder(this.rootUrl, MilkProductionService.ApiMilkProductionPutPath, 'put');
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
        return r as StrictHttpResponse<MilkProductionDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiMilkProductionPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMilkProductionPut(params?: {
    context?: HttpContext
    body?: MilkProductionDto
  }
): Observable<MilkProductionDto> {

    return this.apiMilkProductionPut$Response(params).pipe(
      map((r: StrictHttpResponse<MilkProductionDto>) => r.body as MilkProductionDto)
    );
  }

  /**
   * Path part for operation apiMilkProductionPost
   */
  static readonly ApiMilkProductionPostPath = '/api/MilkProduction';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMilkProductionPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMilkProductionPost$Response(params?: {
    context?: HttpContext
    body?: MilkProductionDto
  }
): Observable<StrictHttpResponse<MilkProductionDto>> {

    const rb = new RequestBuilder(this.rootUrl, MilkProductionService.ApiMilkProductionPostPath, 'post');
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
        return r as StrictHttpResponse<MilkProductionDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiMilkProductionPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMilkProductionPost(params?: {
    context?: HttpContext
    body?: MilkProductionDto
  }
): Observable<MilkProductionDto> {

    return this.apiMilkProductionPost$Response(params).pipe(
      map((r: StrictHttpResponse<MilkProductionDto>) => r.body as MilkProductionDto)
    );
  }

  /**
   * Path part for operation apiMilkProductionDelete
   */
  static readonly ApiMilkProductionDeletePath = '/api/MilkProduction';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMilkProductionDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMilkProductionDelete$Response(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MilkProductionService.ApiMilkProductionDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiMilkProductionDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMilkProductionDelete(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiMilkProductionDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
