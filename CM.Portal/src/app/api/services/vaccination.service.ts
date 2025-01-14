/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { VaccinationDto } from '../models/vaccination-dto';

@Injectable({
  providedIn: 'root',
})
export class VaccinationService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiVaccinationIdGet
   */
  static readonly ApiVaccinationIdGetPath = '/api/Vaccination/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVaccinationIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVaccinationIdGet$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<VaccinationDto>> {

    const rb = new RequestBuilder(this.rootUrl, VaccinationService.ApiVaccinationIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<VaccinationDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiVaccinationIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVaccinationIdGet(params: {
    id: number;
    context?: HttpContext
  }
): Observable<VaccinationDto> {

    return this.apiVaccinationIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<VaccinationDto>) => r.body as VaccinationDto)
    );
  }

  /**
   * Path part for operation apiVaccinationGet
   */
  static readonly ApiVaccinationGetPath = '/api/Vaccination';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVaccinationGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVaccinationGet$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<VaccinationDto>>> {

    const rb = new RequestBuilder(this.rootUrl, VaccinationService.ApiVaccinationGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<VaccinationDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiVaccinationGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVaccinationGet(params?: {
    context?: HttpContext
  }
): Observable<Array<VaccinationDto>> {

    return this.apiVaccinationGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<VaccinationDto>>) => r.body as Array<VaccinationDto>)
    );
  }

  /**
   * Path part for operation apiVaccinationPut
   */
  static readonly ApiVaccinationPutPath = '/api/Vaccination';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVaccinationPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVaccinationPut$Response(params?: {
    context?: HttpContext
    body?: VaccinationDto
  }
): Observable<StrictHttpResponse<VaccinationDto>> {

    const rb = new RequestBuilder(this.rootUrl, VaccinationService.ApiVaccinationPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<VaccinationDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiVaccinationPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVaccinationPut(params?: {
    context?: HttpContext
    body?: VaccinationDto
  }
): Observable<VaccinationDto> {

    return this.apiVaccinationPut$Response(params).pipe(
      map((r: StrictHttpResponse<VaccinationDto>) => r.body as VaccinationDto)
    );
  }

  /**
   * Path part for operation apiVaccinationPost
   */
  static readonly ApiVaccinationPostPath = '/api/Vaccination';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVaccinationPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVaccinationPost$Response(params?: {
    context?: HttpContext
    body?: VaccinationDto
  }
): Observable<StrictHttpResponse<VaccinationDto>> {

    const rb = new RequestBuilder(this.rootUrl, VaccinationService.ApiVaccinationPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<VaccinationDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiVaccinationPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVaccinationPost(params?: {
    context?: HttpContext
    body?: VaccinationDto
  }
): Observable<VaccinationDto> {

    return this.apiVaccinationPost$Response(params).pipe(
      map((r: StrictHttpResponse<VaccinationDto>) => r.body as VaccinationDto)
    );
  }

  /**
   * Path part for operation apiVaccinationDelete
   */
  static readonly ApiVaccinationDeletePath = '/api/Vaccination';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVaccinationDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVaccinationDelete$Response(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, VaccinationService.ApiVaccinationDeletePath, 'delete');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiVaccinationDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVaccinationDelete(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiVaccinationDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
