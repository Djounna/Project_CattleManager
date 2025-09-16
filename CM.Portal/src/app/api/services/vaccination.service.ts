/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiVaccinationCowIdGet } from '../fn/vaccination/api-vaccination-cow-id-get';
import { ApiVaccinationCowIdGet$Params } from '../fn/vaccination/api-vaccination-cow-id-get';
import { apiVaccinationDelete } from '../fn/vaccination/api-vaccination-delete';
import { ApiVaccinationDelete$Params } from '../fn/vaccination/api-vaccination-delete';
import { apiVaccinationGet } from '../fn/vaccination/api-vaccination-get';
import { ApiVaccinationGet$Params } from '../fn/vaccination/api-vaccination-get';
import { apiVaccinationIdGet } from '../fn/vaccination/api-vaccination-id-get';
import { ApiVaccinationIdGet$Params } from '../fn/vaccination/api-vaccination-id-get';
import { apiVaccinationPost } from '../fn/vaccination/api-vaccination-post';
import { ApiVaccinationPost$Params } from '../fn/vaccination/api-vaccination-post';
import { apiVaccinationPut } from '../fn/vaccination/api-vaccination-put';
import { ApiVaccinationPut$Params } from '../fn/vaccination/api-vaccination-put';
import { VaccinationDto } from '../models/vaccination-dto';

@Injectable({ providedIn: 'root' })
export class VaccinationService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiVaccinationIdGet()` */
  static readonly ApiVaccinationIdGetPath = '/api/Vaccination/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVaccinationIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVaccinationIdGet$Response(params: ApiVaccinationIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<VaccinationDto>> {
    return apiVaccinationIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVaccinationIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVaccinationIdGet(params: ApiVaccinationIdGet$Params, context?: HttpContext): Observable<VaccinationDto> {
    return this.apiVaccinationIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<VaccinationDto>): VaccinationDto => r.body)
    );
  }

  /** Path part for operation `apiVaccinationGet()` */
  static readonly ApiVaccinationGetPath = '/api/Vaccination';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVaccinationGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVaccinationGet$Response(params?: ApiVaccinationGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<VaccinationDto>>> {
    return apiVaccinationGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVaccinationGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVaccinationGet(params?: ApiVaccinationGet$Params, context?: HttpContext): Observable<Array<VaccinationDto>> {
    return this.apiVaccinationGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<VaccinationDto>>): Array<VaccinationDto> => r.body)
    );
  }

  /** Path part for operation `apiVaccinationPut()` */
  static readonly ApiVaccinationPutPath = '/api/Vaccination';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVaccinationPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVaccinationPut$Response(params?: ApiVaccinationPut$Params, context?: HttpContext): Observable<StrictHttpResponse<VaccinationDto>> {
    return apiVaccinationPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVaccinationPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVaccinationPut(params?: ApiVaccinationPut$Params, context?: HttpContext): Observable<VaccinationDto> {
    return this.apiVaccinationPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<VaccinationDto>): VaccinationDto => r.body)
    );
  }

  /** Path part for operation `apiVaccinationPost()` */
  static readonly ApiVaccinationPostPath = '/api/Vaccination';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVaccinationPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVaccinationPost$Response(params?: ApiVaccinationPost$Params, context?: HttpContext): Observable<StrictHttpResponse<VaccinationDto>> {
    return apiVaccinationPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVaccinationPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVaccinationPost(params?: ApiVaccinationPost$Params, context?: HttpContext): Observable<VaccinationDto> {
    return this.apiVaccinationPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<VaccinationDto>): VaccinationDto => r.body)
    );
  }

  /** Path part for operation `apiVaccinationDelete()` */
  static readonly ApiVaccinationDeletePath = '/api/Vaccination';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVaccinationDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVaccinationDelete$Response(params?: ApiVaccinationDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiVaccinationDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVaccinationDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVaccinationDelete(params?: ApiVaccinationDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiVaccinationDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiVaccinationCowIdGet()` */
  static readonly ApiVaccinationCowIdGetPath = '/api/Vaccination/{cowId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVaccinationCowIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVaccinationCowIdGet$Response(params: ApiVaccinationCowIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<VaccinationDto>>> {
    return apiVaccinationCowIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVaccinationCowIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVaccinationCowIdGet(params: ApiVaccinationCowIdGet$Params, context?: HttpContext): Observable<Array<VaccinationDto>> {
    return this.apiVaccinationCowIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<VaccinationDto>>): Array<VaccinationDto> => r.body)
    );
  }

}
