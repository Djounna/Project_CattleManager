/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiInterventionCowIdGet } from '../fn/intervention/api-intervention-cow-id-get';
import { ApiInterventionCowIdGet$Params } from '../fn/intervention/api-intervention-cow-id-get';
import { apiInterventionDelete } from '../fn/intervention/api-intervention-delete';
import { ApiInterventionDelete$Params } from '../fn/intervention/api-intervention-delete';
import { apiInterventionGet } from '../fn/intervention/api-intervention-get';
import { ApiInterventionGet$Params } from '../fn/intervention/api-intervention-get';
import { apiInterventionIdGet } from '../fn/intervention/api-intervention-id-get';
import { ApiInterventionIdGet$Params } from '../fn/intervention/api-intervention-id-get';
import { apiInterventionPost } from '../fn/intervention/api-intervention-post';
import { ApiInterventionPost$Params } from '../fn/intervention/api-intervention-post';
import { apiInterventionPut } from '../fn/intervention/api-intervention-put';
import { ApiInterventionPut$Params } from '../fn/intervention/api-intervention-put';
import { InterventionDto } from '../models/intervention-dto';

@Injectable({ providedIn: 'root' })
export class InterventionService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiInterventionIdGet()` */
  static readonly ApiInterventionIdGetPath = '/api/Intervention/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInterventionIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInterventionIdGet$Response(params: ApiInterventionIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<InterventionDto>> {
    return apiInterventionIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInterventionIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInterventionIdGet(params: ApiInterventionIdGet$Params, context?: HttpContext): Observable<InterventionDto> {
    return this.apiInterventionIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<InterventionDto>): InterventionDto => r.body)
    );
  }

  /** Path part for operation `apiInterventionGet()` */
  static readonly ApiInterventionGetPath = '/api/Intervention';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInterventionGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInterventionGet$Response(params?: ApiInterventionGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<InterventionDto>>> {
    return apiInterventionGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInterventionGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInterventionGet(params?: ApiInterventionGet$Params, context?: HttpContext): Observable<Array<InterventionDto>> {
    return this.apiInterventionGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<InterventionDto>>): Array<InterventionDto> => r.body)
    );
  }

  /** Path part for operation `apiInterventionPut()` */
  static readonly ApiInterventionPutPath = '/api/Intervention';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInterventionPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiInterventionPut$Response(params?: ApiInterventionPut$Params, context?: HttpContext): Observable<StrictHttpResponse<InterventionDto>> {
    return apiInterventionPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInterventionPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiInterventionPut(params?: ApiInterventionPut$Params, context?: HttpContext): Observable<InterventionDto> {
    return this.apiInterventionPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<InterventionDto>): InterventionDto => r.body)
    );
  }

  /** Path part for operation `apiInterventionPost()` */
  static readonly ApiInterventionPostPath = '/api/Intervention';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInterventionPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiInterventionPost$Response(params?: ApiInterventionPost$Params, context?: HttpContext): Observable<StrictHttpResponse<InterventionDto>> {
    return apiInterventionPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInterventionPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiInterventionPost(params?: ApiInterventionPost$Params, context?: HttpContext): Observable<InterventionDto> {
    return this.apiInterventionPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<InterventionDto>): InterventionDto => r.body)
    );
  }

  /** Path part for operation `apiInterventionDelete()` */
  static readonly ApiInterventionDeletePath = '/api/Intervention';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInterventionDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInterventionDelete$Response(params?: ApiInterventionDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiInterventionDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInterventionDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInterventionDelete(params?: ApiInterventionDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiInterventionDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiInterventionCowIdGet()` */
  static readonly ApiInterventionCowIdGetPath = '/api/Intervention/{cowId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInterventionCowIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInterventionCowIdGet$Response(params: ApiInterventionCowIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<InterventionDto>>> {
    return apiInterventionCowIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInterventionCowIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInterventionCowIdGet(params: ApiInterventionCowIdGet$Params, context?: HttpContext): Observable<Array<InterventionDto>> {
    return this.apiInterventionCowIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<InterventionDto>>): Array<InterventionDto> => r.body)
    );
  }

}
