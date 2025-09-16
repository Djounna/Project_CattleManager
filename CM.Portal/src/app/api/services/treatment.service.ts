/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiTreatmentCowIdGet } from '../fn/treatment/api-treatment-cow-id-get';
import { ApiTreatmentCowIdGet$Params } from '../fn/treatment/api-treatment-cow-id-get';
import { apiTreatmentDelete } from '../fn/treatment/api-treatment-delete';
import { ApiTreatmentDelete$Params } from '../fn/treatment/api-treatment-delete';
import { apiTreatmentGet } from '../fn/treatment/api-treatment-get';
import { ApiTreatmentGet$Params } from '../fn/treatment/api-treatment-get';
import { apiTreatmentIdGet } from '../fn/treatment/api-treatment-id-get';
import { ApiTreatmentIdGet$Params } from '../fn/treatment/api-treatment-id-get';
import { apiTreatmentPost } from '../fn/treatment/api-treatment-post';
import { ApiTreatmentPost$Params } from '../fn/treatment/api-treatment-post';
import { apiTreatmentPut } from '../fn/treatment/api-treatment-put';
import { ApiTreatmentPut$Params } from '../fn/treatment/api-treatment-put';
import { TreatmentDto } from '../models/treatment-dto';

@Injectable({ providedIn: 'root' })
export class TreatmentService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiTreatmentIdGet()` */
  static readonly ApiTreatmentIdGetPath = '/api/Treatment/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTreatmentIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTreatmentIdGet$Response(params: ApiTreatmentIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<TreatmentDto>> {
    return apiTreatmentIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTreatmentIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTreatmentIdGet(params: ApiTreatmentIdGet$Params, context?: HttpContext): Observable<TreatmentDto> {
    return this.apiTreatmentIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<TreatmentDto>): TreatmentDto => r.body)
    );
  }

  /** Path part for operation `apiTreatmentGet()` */
  static readonly ApiTreatmentGetPath = '/api/Treatment';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTreatmentGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTreatmentGet$Response(params?: ApiTreatmentGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TreatmentDto>>> {
    return apiTreatmentGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTreatmentGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTreatmentGet(params?: ApiTreatmentGet$Params, context?: HttpContext): Observable<Array<TreatmentDto>> {
    return this.apiTreatmentGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<TreatmentDto>>): Array<TreatmentDto> => r.body)
    );
  }

  /** Path part for operation `apiTreatmentPut()` */
  static readonly ApiTreatmentPutPath = '/api/Treatment';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTreatmentPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTreatmentPut$Response(params?: ApiTreatmentPut$Params, context?: HttpContext): Observable<StrictHttpResponse<TreatmentDto>> {
    return apiTreatmentPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTreatmentPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTreatmentPut(params?: ApiTreatmentPut$Params, context?: HttpContext): Observable<TreatmentDto> {
    return this.apiTreatmentPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<TreatmentDto>): TreatmentDto => r.body)
    );
  }

  /** Path part for operation `apiTreatmentPost()` */
  static readonly ApiTreatmentPostPath = '/api/Treatment';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTreatmentPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTreatmentPost$Response(params?: ApiTreatmentPost$Params, context?: HttpContext): Observable<StrictHttpResponse<TreatmentDto>> {
    return apiTreatmentPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTreatmentPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTreatmentPost(params?: ApiTreatmentPost$Params, context?: HttpContext): Observable<TreatmentDto> {
    return this.apiTreatmentPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<TreatmentDto>): TreatmentDto => r.body)
    );
  }

  /** Path part for operation `apiTreatmentDelete()` */
  static readonly ApiTreatmentDeletePath = '/api/Treatment';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTreatmentDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTreatmentDelete$Response(params?: ApiTreatmentDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiTreatmentDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTreatmentDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTreatmentDelete(params?: ApiTreatmentDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiTreatmentDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiTreatmentCowIdGet()` */
  static readonly ApiTreatmentCowIdGetPath = '/api/Treatment/{cowId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTreatmentCowIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTreatmentCowIdGet$Response(params: ApiTreatmentCowIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TreatmentDto>>> {
    return apiTreatmentCowIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTreatmentCowIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTreatmentCowIdGet(params: ApiTreatmentCowIdGet$Params, context?: HttpContext): Observable<Array<TreatmentDto>> {
    return this.apiTreatmentCowIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<TreatmentDto>>): Array<TreatmentDto> => r.body)
    );
  }

}
