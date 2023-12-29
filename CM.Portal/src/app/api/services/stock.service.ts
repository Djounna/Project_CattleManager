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

import { StockDto } from '../models/stock-dto';

@Injectable({
  providedIn: 'root',
})
export class StockService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiStockGet
   */
  static readonly ApiStockGetPath = '/api/Stock';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStockGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStockGet$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<StockDto>>> {

    const rb = new RequestBuilder(this.rootUrl, StockService.ApiStockGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<StockDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiStockGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStockGet(params?: {
    context?: HttpContext
  }
): Observable<Array<StockDto>> {

    return this.apiStockGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<StockDto>>) => r.body as Array<StockDto>)
    );
  }

  /**
   * Path part for operation apiStockPut
   */
  static readonly ApiStockPutPath = '/api/Stock';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStockPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStockPut$Response(params?: {
    context?: HttpContext
    body?: StockDto
  }
): Observable<StrictHttpResponse<StockDto>> {

    const rb = new RequestBuilder(this.rootUrl, StockService.ApiStockPutPath, 'put');
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
        return r as StrictHttpResponse<StockDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiStockPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStockPut(params?: {
    context?: HttpContext
    body?: StockDto
  }
): Observable<StockDto> {

    return this.apiStockPut$Response(params).pipe(
      map((r: StrictHttpResponse<StockDto>) => r.body as StockDto)
    );
  }

  /**
   * Path part for operation apiStockPost
   */
  static readonly ApiStockPostPath = '/api/Stock';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStockPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStockPost$Response(params?: {
    context?: HttpContext
    body?: StockDto
  }
): Observable<StrictHttpResponse<StockDto>> {

    const rb = new RequestBuilder(this.rootUrl, StockService.ApiStockPostPath, 'post');
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
        return r as StrictHttpResponse<StockDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiStockPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStockPost(params?: {
    context?: HttpContext
    body?: StockDto
  }
): Observable<StockDto> {

    return this.apiStockPost$Response(params).pipe(
      map((r: StrictHttpResponse<StockDto>) => r.body as StockDto)
    );
  }

  /**
   * Path part for operation apiStockDelete
   */
  static readonly ApiStockDeletePath = '/api/Stock';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStockDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStockDelete$Response(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, StockService.ApiStockDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiStockDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStockDelete(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiStockDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiStockIdGet
   */
  static readonly ApiStockIdGetPath = '/api/Stock/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStockIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStockIdGet$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<StockDto>> {

    const rb = new RequestBuilder(this.rootUrl, StockService.ApiStockIdGetPath, 'get');
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
        return r as StrictHttpResponse<StockDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiStockIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStockIdGet(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StockDto> {

    return this.apiStockIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<StockDto>) => r.body as StockDto)
    );
  }

}
