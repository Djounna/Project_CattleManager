/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiGestationCowIdGet } from '../fn/gestation/api-gestation-cow-id-get';
import { ApiGestationCowIdGet$Params } from '../fn/gestation/api-gestation-cow-id-get';
import { apiGestationDelete } from '../fn/gestation/api-gestation-delete';
import { ApiGestationDelete$Params } from '../fn/gestation/api-gestation-delete';
import { apiGestationGet } from '../fn/gestation/api-gestation-get';
import { ApiGestationGet$Params } from '../fn/gestation/api-gestation-get';
import { apiGestationIdGet } from '../fn/gestation/api-gestation-id-get';
import { ApiGestationIdGet$Params } from '../fn/gestation/api-gestation-id-get';
import { apiGestationPost } from '../fn/gestation/api-gestation-post';
import { ApiGestationPost$Params } from '../fn/gestation/api-gestation-post';
import { apiGestationPut } from '../fn/gestation/api-gestation-put';
import { ApiGestationPut$Params } from '../fn/gestation/api-gestation-put';
import { GestationDto } from '../models/gestation-dto';

@Injectable({ providedIn: 'root' })
export class GestationService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiGestationIdGet()` */
  static readonly ApiGestationIdGetPath = '/api/Gestation/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGestationIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGestationIdGet$Response(params: ApiGestationIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<GestationDto>> {
    return apiGestationIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGestationIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGestationIdGet(params: ApiGestationIdGet$Params, context?: HttpContext): Observable<GestationDto> {
    return this.apiGestationIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<GestationDto>): GestationDto => r.body)
    );
  }

  /** Path part for operation `apiGestationGet()` */
  static readonly ApiGestationGetPath = '/api/Gestation';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGestationGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGestationGet$Response(params?: ApiGestationGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<GestationDto>>> {
    return apiGestationGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGestationGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGestationGet(params?: ApiGestationGet$Params, context?: HttpContext): Observable<Array<GestationDto>> {
    return this.apiGestationGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<GestationDto>>): Array<GestationDto> => r.body)
    );
  }

  /** Path part for operation `apiGestationPut()` */
  static readonly ApiGestationPutPath = '/api/Gestation';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGestationPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGestationPut$Response(params?: ApiGestationPut$Params, context?: HttpContext): Observable<StrictHttpResponse<GestationDto>> {
    return apiGestationPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGestationPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGestationPut(params?: ApiGestationPut$Params, context?: HttpContext): Observable<GestationDto> {
    return this.apiGestationPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<GestationDto>): GestationDto => r.body)
    );
  }

  /** Path part for operation `apiGestationPost()` */
  static readonly ApiGestationPostPath = '/api/Gestation';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGestationPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGestationPost$Response(params?: ApiGestationPost$Params, context?: HttpContext): Observable<StrictHttpResponse<GestationDto>> {
    return apiGestationPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGestationPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGestationPost(params?: ApiGestationPost$Params, context?: HttpContext): Observable<GestationDto> {
    return this.apiGestationPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<GestationDto>): GestationDto => r.body)
    );
  }

  /** Path part for operation `apiGestationDelete()` */
  static readonly ApiGestationDeletePath = '/api/Gestation';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGestationDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGestationDelete$Response(params?: ApiGestationDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiGestationDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGestationDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGestationDelete(params?: ApiGestationDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiGestationDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiGestationCowIdGet()` */
  static readonly ApiGestationCowIdGetPath = '/api/Gestation/{cowId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGestationCowIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGestationCowIdGet$Response(params: ApiGestationCowIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<GestationDto>>> {
    return apiGestationCowIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGestationCowIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGestationCowIdGet(params: ApiGestationCowIdGet$Params, context?: HttpContext): Observable<Array<GestationDto>> {
    return this.apiGestationCowIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<GestationDto>>): Array<GestationDto> => r.body)
    );
  }

}
