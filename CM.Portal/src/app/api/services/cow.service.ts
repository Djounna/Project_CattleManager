/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiCowDelete } from '../fn/cow/api-cow-delete';
import { ApiCowDelete$Params } from '../fn/cow/api-cow-delete';
import { apiCowGet } from '../fn/cow/api-cow-get';
import { ApiCowGet$Params } from '../fn/cow/api-cow-get';
import { apiCowIdDetailsGet } from '../fn/cow/api-cow-id-details-get';
import { ApiCowIdDetailsGet$Params } from '../fn/cow/api-cow-id-details-get';
import { apiCowIdGenealogyGet } from '../fn/cow/api-cow-id-genealogy-get';
import { ApiCowIdGenealogyGet$Params } from '../fn/cow/api-cow-id-genealogy-get';
import { apiCowIdGet } from '../fn/cow/api-cow-id-get';
import { ApiCowIdGet$Params } from '../fn/cow/api-cow-id-get';
import { apiCowPost } from '../fn/cow/api-cow-post';
import { ApiCowPost$Params } from '../fn/cow/api-cow-post';
import { apiCowPut } from '../fn/cow/api-cow-put';
import { ApiCowPut$Params } from '../fn/cow/api-cow-put';
import { CowDetailsDto } from '../models/cow-details-dto';
import { CowDto } from '../models/cow-dto';
import { CowGenealogyDto } from '../models/cow-genealogy-dto';

@Injectable({ providedIn: 'root' })
export class CowService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiCowIdGet()` */
  static readonly ApiCowIdGetPath = '/api/Cow/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCowIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCowIdGet$Response(params: ApiCowIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<CowDto>> {
    return apiCowIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCowIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCowIdGet(params: ApiCowIdGet$Params, context?: HttpContext): Observable<CowDto> {
    return this.apiCowIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<CowDto>): CowDto => r.body)
    );
  }

  /** Path part for operation `apiCowIdDetailsGet()` */
  static readonly ApiCowIdDetailsGetPath = '/api/Cow/{id}/details';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCowIdDetailsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCowIdDetailsGet$Response(params: ApiCowIdDetailsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<CowDetailsDto>> {
    return apiCowIdDetailsGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCowIdDetailsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCowIdDetailsGet(params: ApiCowIdDetailsGet$Params, context?: HttpContext): Observable<CowDetailsDto> {
    return this.apiCowIdDetailsGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<CowDetailsDto>): CowDetailsDto => r.body)
    );
  }

  /** Path part for operation `apiCowIdGenealogyGet()` */
  static readonly ApiCowIdGenealogyGetPath = '/api/Cow/{id}/genealogy';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCowIdGenealogyGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCowIdGenealogyGet$Response(params: ApiCowIdGenealogyGet$Params, context?: HttpContext): Observable<StrictHttpResponse<CowGenealogyDto>> {
    return apiCowIdGenealogyGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCowIdGenealogyGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCowIdGenealogyGet(params: ApiCowIdGenealogyGet$Params, context?: HttpContext): Observable<CowGenealogyDto> {
    return this.apiCowIdGenealogyGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<CowGenealogyDto>): CowGenealogyDto => r.body)
    );
  }

  /** Path part for operation `apiCowGet()` */
  static readonly ApiCowGetPath = '/api/Cow';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCowGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCowGet$Response(params?: ApiCowGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CowDto>>> {
    return apiCowGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCowGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCowGet(params?: ApiCowGet$Params, context?: HttpContext): Observable<Array<CowDto>> {
    return this.apiCowGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<CowDto>>): Array<CowDto> => r.body)
    );
  }

  /** Path part for operation `apiCowPut()` */
  static readonly ApiCowPutPath = '/api/Cow';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCowPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCowPut$Response(params?: ApiCowPut$Params, context?: HttpContext): Observable<StrictHttpResponse<CowDto>> {
    return apiCowPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCowPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCowPut(params?: ApiCowPut$Params, context?: HttpContext): Observable<CowDto> {
    return this.apiCowPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<CowDto>): CowDto => r.body)
    );
  }

  /** Path part for operation `apiCowPost()` */
  static readonly ApiCowPostPath = '/api/Cow';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCowPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCowPost$Response(params?: ApiCowPost$Params, context?: HttpContext): Observable<StrictHttpResponse<CowDto>> {
    return apiCowPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCowPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCowPost(params?: ApiCowPost$Params, context?: HttpContext): Observable<CowDto> {
    return this.apiCowPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<CowDto>): CowDto => r.body)
    );
  }

  /** Path part for operation `apiCowDelete()` */
  static readonly ApiCowDeletePath = '/api/Cow';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCowDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCowDelete$Response(params?: ApiCowDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiCowDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCowDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCowDelete(params?: ApiCowDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiCowDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
