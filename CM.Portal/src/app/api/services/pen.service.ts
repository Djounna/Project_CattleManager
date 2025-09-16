/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiPenAssignPost } from '../fn/pen/api-pen-assign-post';
import { ApiPenAssignPost$Params } from '../fn/pen/api-pen-assign-post';
import { apiPenDelete } from '../fn/pen/api-pen-delete';
import { ApiPenDelete$Params } from '../fn/pen/api-pen-delete';
import { apiPenGet } from '../fn/pen/api-pen-get';
import { ApiPenGet$Params } from '../fn/pen/api-pen-get';
import { apiPenIdGet } from '../fn/pen/api-pen-id-get';
import { ApiPenIdGet$Params } from '../fn/pen/api-pen-id-get';
import { apiPenPost } from '../fn/pen/api-pen-post';
import { ApiPenPost$Params } from '../fn/pen/api-pen-post';
import { apiPenPut } from '../fn/pen/api-pen-put';
import { ApiPenPut$Params } from '../fn/pen/api-pen-put';
import { PenDto } from '../models/pen-dto';
import { ProblemDetails } from '../models/problem-details';

@Injectable({ providedIn: 'root' })
export class PenService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiPenGet()` */
  static readonly ApiPenGetPath = '/api/Pen';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPenGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPenGet$Response(params?: ApiPenGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PenDto>>> {
    return apiPenGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPenGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPenGet(params?: ApiPenGet$Params, context?: HttpContext): Observable<Array<PenDto>> {
    return this.apiPenGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<PenDto>>): Array<PenDto> => r.body)
    );
  }

  /** Path part for operation `apiPenPut()` */
  static readonly ApiPenPutPath = '/api/Pen';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPenPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPenPut$Response(params?: ApiPenPut$Params, context?: HttpContext): Observable<StrictHttpResponse<PenDto>> {
    return apiPenPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPenPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPenPut(params?: ApiPenPut$Params, context?: HttpContext): Observable<PenDto> {
    return this.apiPenPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<PenDto>): PenDto => r.body)
    );
  }

  /** Path part for operation `apiPenPost()` */
  static readonly ApiPenPostPath = '/api/Pen';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPenPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPenPost$Response(params?: ApiPenPost$Params, context?: HttpContext): Observable<StrictHttpResponse<PenDto>> {
    return apiPenPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPenPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPenPost(params?: ApiPenPost$Params, context?: HttpContext): Observable<PenDto> {
    return this.apiPenPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<PenDto>): PenDto => r.body)
    );
  }

  /** Path part for operation `apiPenDelete()` */
  static readonly ApiPenDeletePath = '/api/Pen';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPenDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPenDelete$Response(params?: ApiPenDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiPenDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPenDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPenDelete(params?: ApiPenDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiPenDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiPenIdGet()` */
  static readonly ApiPenIdGetPath = '/api/Pen/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPenIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPenIdGet$Response(params: ApiPenIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<PenDto>> {
    return apiPenIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPenIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPenIdGet(params: ApiPenIdGet$Params, context?: HttpContext): Observable<PenDto> {
    return this.apiPenIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<PenDto>): PenDto => r.body)
    );
  }

  /** Path part for operation `apiPenAssignPost()` */
  static readonly ApiPenAssignPostPath = '/api/Pen/assign';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPenAssignPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPenAssignPost$Response(params?: ApiPenAssignPost$Params, context?: HttpContext): Observable<StrictHttpResponse<ProblemDetails>> {
    return apiPenAssignPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPenAssignPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPenAssignPost(params?: ApiPenAssignPost$Params, context?: HttpContext): Observable<ProblemDetails> {
    return this.apiPenAssignPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProblemDetails>): ProblemDetails => r.body)
    );
  }

}
