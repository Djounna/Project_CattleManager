/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiMilkProductionDelete } from '../fn/milk-production/api-milk-production-delete';
import { ApiMilkProductionDelete$Params } from '../fn/milk-production/api-milk-production-delete';
import { apiMilkProductionGet } from '../fn/milk-production/api-milk-production-get';
import { ApiMilkProductionGet$Params } from '../fn/milk-production/api-milk-production-get';
import { apiMilkProductionIdGet } from '../fn/milk-production/api-milk-production-id-get';
import { ApiMilkProductionIdGet$Params } from '../fn/milk-production/api-milk-production-id-get';
import { apiMilkProductionPost } from '../fn/milk-production/api-milk-production-post';
import { ApiMilkProductionPost$Params } from '../fn/milk-production/api-milk-production-post';
import { apiMilkProductionPut } from '../fn/milk-production/api-milk-production-put';
import { ApiMilkProductionPut$Params } from '../fn/milk-production/api-milk-production-put';
import { MilkProductionDto } from '../models/milk-production-dto';

@Injectable({ providedIn: 'root' })
export class MilkProductionService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiMilkProductionIdGet()` */
  static readonly ApiMilkProductionIdGetPath = '/api/MilkProduction/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMilkProductionIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMilkProductionIdGet$Response(params: ApiMilkProductionIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<MilkProductionDto>> {
    return apiMilkProductionIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMilkProductionIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMilkProductionIdGet(params: ApiMilkProductionIdGet$Params, context?: HttpContext): Observable<MilkProductionDto> {
    return this.apiMilkProductionIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<MilkProductionDto>): MilkProductionDto => r.body)
    );
  }

  /** Path part for operation `apiMilkProductionGet()` */
  static readonly ApiMilkProductionGetPath = '/api/MilkProduction';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMilkProductionGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMilkProductionGet$Response(params?: ApiMilkProductionGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MilkProductionDto>>> {
    return apiMilkProductionGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMilkProductionGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMilkProductionGet(params?: ApiMilkProductionGet$Params, context?: HttpContext): Observable<Array<MilkProductionDto>> {
    return this.apiMilkProductionGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<MilkProductionDto>>): Array<MilkProductionDto> => r.body)
    );
  }

  /** Path part for operation `apiMilkProductionPut()` */
  static readonly ApiMilkProductionPutPath = '/api/MilkProduction';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMilkProductionPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMilkProductionPut$Response(params?: ApiMilkProductionPut$Params, context?: HttpContext): Observable<StrictHttpResponse<MilkProductionDto>> {
    return apiMilkProductionPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMilkProductionPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMilkProductionPut(params?: ApiMilkProductionPut$Params, context?: HttpContext): Observable<MilkProductionDto> {
    return this.apiMilkProductionPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<MilkProductionDto>): MilkProductionDto => r.body)
    );
  }

  /** Path part for operation `apiMilkProductionPost()` */
  static readonly ApiMilkProductionPostPath = '/api/MilkProduction';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMilkProductionPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMilkProductionPost$Response(params?: ApiMilkProductionPost$Params, context?: HttpContext): Observable<StrictHttpResponse<MilkProductionDto>> {
    return apiMilkProductionPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMilkProductionPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMilkProductionPost(params?: ApiMilkProductionPost$Params, context?: HttpContext): Observable<MilkProductionDto> {
    return this.apiMilkProductionPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<MilkProductionDto>): MilkProductionDto => r.body)
    );
  }

  /** Path part for operation `apiMilkProductionDelete()` */
  static readonly ApiMilkProductionDeletePath = '/api/MilkProduction';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMilkProductionDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMilkProductionDelete$Response(params?: ApiMilkProductionDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiMilkProductionDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMilkProductionDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMilkProductionDelete(params?: ApiMilkProductionDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiMilkProductionDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
