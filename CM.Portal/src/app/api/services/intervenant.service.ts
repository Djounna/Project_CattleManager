/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiIntervenantDelete } from '../fn/intervenant/api-intervenant-delete';
import { ApiIntervenantDelete$Params } from '../fn/intervenant/api-intervenant-delete';
import { apiIntervenantGet } from '../fn/intervenant/api-intervenant-get';
import { ApiIntervenantGet$Params } from '../fn/intervenant/api-intervenant-get';
import { apiIntervenantIdGet } from '../fn/intervenant/api-intervenant-id-get';
import { ApiIntervenantIdGet$Params } from '../fn/intervenant/api-intervenant-id-get';
import { apiIntervenantPost } from '../fn/intervenant/api-intervenant-post';
import { ApiIntervenantPost$Params } from '../fn/intervenant/api-intervenant-post';
import { apiIntervenantPut } from '../fn/intervenant/api-intervenant-put';
import { ApiIntervenantPut$Params } from '../fn/intervenant/api-intervenant-put';
import { IntervenantDto } from '../models/intervenant-dto';

@Injectable({ providedIn: 'root' })
export class IntervenantService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiIntervenantIdGet()` */
  static readonly ApiIntervenantIdGetPath = '/api/Intervenant/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiIntervenantIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiIntervenantIdGet$Response(params: ApiIntervenantIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<IntervenantDto>> {
    return apiIntervenantIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiIntervenantIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiIntervenantIdGet(params: ApiIntervenantIdGet$Params, context?: HttpContext): Observable<IntervenantDto> {
    return this.apiIntervenantIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<IntervenantDto>): IntervenantDto => r.body)
    );
  }

  /** Path part for operation `apiIntervenantGet()` */
  static readonly ApiIntervenantGetPath = '/api/Intervenant';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiIntervenantGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiIntervenantGet$Response(params?: ApiIntervenantGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<IntervenantDto>>> {
    return apiIntervenantGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiIntervenantGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiIntervenantGet(params?: ApiIntervenantGet$Params, context?: HttpContext): Observable<Array<IntervenantDto>> {
    return this.apiIntervenantGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<IntervenantDto>>): Array<IntervenantDto> => r.body)
    );
  }

  /** Path part for operation `apiIntervenantPut()` */
  static readonly ApiIntervenantPutPath = '/api/Intervenant';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiIntervenantPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiIntervenantPut$Response(params?: ApiIntervenantPut$Params, context?: HttpContext): Observable<StrictHttpResponse<IntervenantDto>> {
    return apiIntervenantPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiIntervenantPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiIntervenantPut(params?: ApiIntervenantPut$Params, context?: HttpContext): Observable<IntervenantDto> {
    return this.apiIntervenantPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<IntervenantDto>): IntervenantDto => r.body)
    );
  }

  /** Path part for operation `apiIntervenantPost()` */
  static readonly ApiIntervenantPostPath = '/api/Intervenant';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiIntervenantPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiIntervenantPost$Response(params?: ApiIntervenantPost$Params, context?: HttpContext): Observable<StrictHttpResponse<IntervenantDto>> {
    return apiIntervenantPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiIntervenantPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiIntervenantPost(params?: ApiIntervenantPost$Params, context?: HttpContext): Observable<IntervenantDto> {
    return this.apiIntervenantPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<IntervenantDto>): IntervenantDto => r.body)
    );
  }

  /** Path part for operation `apiIntervenantDelete()` */
  static readonly ApiIntervenantDeletePath = '/api/Intervenant';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiIntervenantDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiIntervenantDelete$Response(params?: ApiIntervenantDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiIntervenantDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiIntervenantDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiIntervenantDelete(params?: ApiIntervenantDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiIntervenantDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
