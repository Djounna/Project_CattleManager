/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { AlertDto } from '../models/alert-dto';
import { apiAlertActiveGet } from '../fn/alert/api-alert-active-get';
import { ApiAlertActiveGet$Params } from '../fn/alert/api-alert-active-get';
import { apiAlertDelete } from '../fn/alert/api-alert-delete';
import { ApiAlertDelete$Params } from '../fn/alert/api-alert-delete';
import { apiAlertGet } from '../fn/alert/api-alert-get';
import { ApiAlertGet$Params } from '../fn/alert/api-alert-get';
import { apiAlertIdGet } from '../fn/alert/api-alert-id-get';
import { ApiAlertIdGet$Params } from '../fn/alert/api-alert-id-get';
import { apiAlertPost } from '../fn/alert/api-alert-post';
import { ApiAlertPost$Params } from '../fn/alert/api-alert-post';
import { apiAlertPut } from '../fn/alert/api-alert-put';
import { ApiAlertPut$Params } from '../fn/alert/api-alert-put';

@Injectable({ providedIn: 'root' })
export class AlertService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiAlertGet()` */
  static readonly ApiAlertGetPath = '/api/Alert';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlertGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertGet$Response(params?: ApiAlertGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AlertDto>>> {
    return apiAlertGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAlertGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertGet(params?: ApiAlertGet$Params, context?: HttpContext): Observable<Array<AlertDto>> {
    return this.apiAlertGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<AlertDto>>): Array<AlertDto> => r.body)
    );
  }

  /** Path part for operation `apiAlertPut()` */
  static readonly ApiAlertPutPath = '/api/Alert';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlertPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAlertPut$Response(params?: ApiAlertPut$Params, context?: HttpContext): Observable<StrictHttpResponse<AlertDto>> {
    return apiAlertPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAlertPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAlertPut(params?: ApiAlertPut$Params, context?: HttpContext): Observable<AlertDto> {
    return this.apiAlertPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<AlertDto>): AlertDto => r.body)
    );
  }

  /** Path part for operation `apiAlertPost()` */
  static readonly ApiAlertPostPath = '/api/Alert';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlertPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAlertPost$Response(params?: ApiAlertPost$Params, context?: HttpContext): Observable<StrictHttpResponse<AlertDto>> {
    return apiAlertPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAlertPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAlertPost(params?: ApiAlertPost$Params, context?: HttpContext): Observable<AlertDto> {
    return this.apiAlertPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<AlertDto>): AlertDto => r.body)
    );
  }

  /** Path part for operation `apiAlertDelete()` */
  static readonly ApiAlertDeletePath = '/api/Alert';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlertDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertDelete$Response(params?: ApiAlertDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiAlertDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAlertDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertDelete(params?: ApiAlertDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiAlertDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiAlertActiveGet()` */
  static readonly ApiAlertActiveGetPath = '/api/Alert/active';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlertActiveGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertActiveGet$Response(params?: ApiAlertActiveGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AlertDto>>> {
    return apiAlertActiveGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAlertActiveGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertActiveGet(params?: ApiAlertActiveGet$Params, context?: HttpContext): Observable<Array<AlertDto>> {
    return this.apiAlertActiveGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<AlertDto>>): Array<AlertDto> => r.body)
    );
  }

  /** Path part for operation `apiAlertIdGet()` */
  static readonly ApiAlertIdGetPath = '/api/Alert/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlertIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertIdGet$Response(params: ApiAlertIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<AlertDto>> {
    return apiAlertIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAlertIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertIdGet(params: ApiAlertIdGet$Params, context?: HttpContext): Observable<AlertDto> {
    return this.apiAlertIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<AlertDto>): AlertDto => r.body)
    );
  }

}
