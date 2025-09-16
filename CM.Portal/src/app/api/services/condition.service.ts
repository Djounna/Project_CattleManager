/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiConditionCowIdGet } from '../fn/condition/api-condition-cow-id-get';
import { ApiConditionCowIdGet$Params } from '../fn/condition/api-condition-cow-id-get';
import { apiConditionDelete } from '../fn/condition/api-condition-delete';
import { ApiConditionDelete$Params } from '../fn/condition/api-condition-delete';
import { apiConditionGet } from '../fn/condition/api-condition-get';
import { ApiConditionGet$Params } from '../fn/condition/api-condition-get';
import { apiConditionIdGet } from '../fn/condition/api-condition-id-get';
import { ApiConditionIdGet$Params } from '../fn/condition/api-condition-id-get';
import { apiConditionPost } from '../fn/condition/api-condition-post';
import { ApiConditionPost$Params } from '../fn/condition/api-condition-post';
import { apiConditionPut } from '../fn/condition/api-condition-put';
import { ApiConditionPut$Params } from '../fn/condition/api-condition-put';
import { ConditionDto } from '../models/condition-dto';

@Injectable({ providedIn: 'root' })
export class ConditionService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiConditionIdGet()` */
  static readonly ApiConditionIdGetPath = '/api/Condition/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiConditionIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiConditionIdGet$Response(params: ApiConditionIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<ConditionDto>> {
    return apiConditionIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiConditionIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiConditionIdGet(params: ApiConditionIdGet$Params, context?: HttpContext): Observable<ConditionDto> {
    return this.apiConditionIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<ConditionDto>): ConditionDto => r.body)
    );
  }

  /** Path part for operation `apiConditionGet()` */
  static readonly ApiConditionGetPath = '/api/Condition';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiConditionGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiConditionGet$Response(params?: ApiConditionGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ConditionDto>>> {
    return apiConditionGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiConditionGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiConditionGet(params?: ApiConditionGet$Params, context?: HttpContext): Observable<Array<ConditionDto>> {
    return this.apiConditionGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ConditionDto>>): Array<ConditionDto> => r.body)
    );
  }

  /** Path part for operation `apiConditionPut()` */
  static readonly ApiConditionPutPath = '/api/Condition';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiConditionPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiConditionPut$Response(params?: ApiConditionPut$Params, context?: HttpContext): Observable<StrictHttpResponse<ConditionDto>> {
    return apiConditionPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiConditionPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiConditionPut(params?: ApiConditionPut$Params, context?: HttpContext): Observable<ConditionDto> {
    return this.apiConditionPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<ConditionDto>): ConditionDto => r.body)
    );
  }

  /** Path part for operation `apiConditionPost()` */
  static readonly ApiConditionPostPath = '/api/Condition';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiConditionPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiConditionPost$Response(params?: ApiConditionPost$Params, context?: HttpContext): Observable<StrictHttpResponse<ConditionDto>> {
    return apiConditionPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiConditionPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiConditionPost(params?: ApiConditionPost$Params, context?: HttpContext): Observable<ConditionDto> {
    return this.apiConditionPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<ConditionDto>): ConditionDto => r.body)
    );
  }

  /** Path part for operation `apiConditionDelete()` */
  static readonly ApiConditionDeletePath = '/api/Condition';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiConditionDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiConditionDelete$Response(params?: ApiConditionDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiConditionDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiConditionDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiConditionDelete(params?: ApiConditionDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiConditionDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiConditionCowIdGet()` */
  static readonly ApiConditionCowIdGetPath = '/api/Condition/{cowId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiConditionCowIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiConditionCowIdGet$Response(params: ApiConditionCowIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ConditionDto>>> {
    return apiConditionCowIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiConditionCowIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiConditionCowIdGet(params: ApiConditionCowIdGet$Params, context?: HttpContext): Observable<Array<ConditionDto>> {
    return this.apiConditionCowIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ConditionDto>>): Array<ConditionDto> => r.body)
    );
  }

}
