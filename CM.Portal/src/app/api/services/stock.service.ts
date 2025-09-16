/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiStockDelete } from '../fn/stock/api-stock-delete';
import { ApiStockDelete$Params } from '../fn/stock/api-stock-delete';
import { apiStockGet } from '../fn/stock/api-stock-get';
import { ApiStockGet$Params } from '../fn/stock/api-stock-get';
import { apiStockIdGet } from '../fn/stock/api-stock-id-get';
import { ApiStockIdGet$Params } from '../fn/stock/api-stock-id-get';
import { apiStockPost } from '../fn/stock/api-stock-post';
import { ApiStockPost$Params } from '../fn/stock/api-stock-post';
import { apiStockPut } from '../fn/stock/api-stock-put';
import { ApiStockPut$Params } from '../fn/stock/api-stock-put';
import { StockDto } from '../models/stock-dto';

@Injectable({ providedIn: 'root' })
export class StockService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiStockGet()` */
  static readonly ApiStockGetPath = '/api/Stock';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStockGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStockGet$Response(params?: ApiStockGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<StockDto>>> {
    return apiStockGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStockGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStockGet(params?: ApiStockGet$Params, context?: HttpContext): Observable<Array<StockDto>> {
    return this.apiStockGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<StockDto>>): Array<StockDto> => r.body)
    );
  }

  /** Path part for operation `apiStockPut()` */
  static readonly ApiStockPutPath = '/api/Stock';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStockPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStockPut$Response(params?: ApiStockPut$Params, context?: HttpContext): Observable<StrictHttpResponse<StockDto>> {
    return apiStockPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStockPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStockPut(params?: ApiStockPut$Params, context?: HttpContext): Observable<StockDto> {
    return this.apiStockPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<StockDto>): StockDto => r.body)
    );
  }

  /** Path part for operation `apiStockPost()` */
  static readonly ApiStockPostPath = '/api/Stock';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStockPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStockPost$Response(params?: ApiStockPost$Params, context?: HttpContext): Observable<StrictHttpResponse<StockDto>> {
    return apiStockPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStockPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStockPost(params?: ApiStockPost$Params, context?: HttpContext): Observable<StockDto> {
    return this.apiStockPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<StockDto>): StockDto => r.body)
    );
  }

  /** Path part for operation `apiStockDelete()` */
  static readonly ApiStockDeletePath = '/api/Stock';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStockDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStockDelete$Response(params?: ApiStockDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiStockDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStockDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStockDelete(params?: ApiStockDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiStockDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiStockIdGet()` */
  static readonly ApiStockIdGetPath = '/api/Stock/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStockIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStockIdGet$Response(params: ApiStockIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<StockDto>> {
    return apiStockIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStockIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStockIdGet(params: ApiStockIdGet$Params, context?: HttpContext): Observable<StockDto> {
    return this.apiStockIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<StockDto>): StockDto => r.body)
    );
  }

}
