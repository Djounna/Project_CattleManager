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

import { GroupDto } from '../models/group-dto';

@Injectable({
  providedIn: 'root',
})
export class GroupService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiGroupGet
   */
  static readonly ApiGroupGetPath = '/api/Group';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGroupGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGroupGet$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<GroupDto>>> {

    const rb = new RequestBuilder(this.rootUrl, GroupService.ApiGroupGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GroupDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiGroupGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGroupGet(params?: {
    context?: HttpContext
  }
): Observable<Array<GroupDto>> {

    return this.apiGroupGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<GroupDto>>) => r.body as Array<GroupDto>)
    );
  }

  /**
   * Path part for operation apiGroupPut
   */
  static readonly ApiGroupPutPath = '/api/Group';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGroupPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGroupPut$Response(params?: {
    context?: HttpContext
    body?: GroupDto
  }
): Observable<StrictHttpResponse<GroupDto>> {

    const rb = new RequestBuilder(this.rootUrl, GroupService.ApiGroupPutPath, 'put');
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
        return r as StrictHttpResponse<GroupDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiGroupPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGroupPut(params?: {
    context?: HttpContext
    body?: GroupDto
  }
): Observable<GroupDto> {

    return this.apiGroupPut$Response(params).pipe(
      map((r: StrictHttpResponse<GroupDto>) => r.body as GroupDto)
    );
  }

  /**
   * Path part for operation apiGroupPost
   */
  static readonly ApiGroupPostPath = '/api/Group';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGroupPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGroupPost$Response(params?: {
    context?: HttpContext
    body?: GroupDto
  }
): Observable<StrictHttpResponse<GroupDto>> {

    const rb = new RequestBuilder(this.rootUrl, GroupService.ApiGroupPostPath, 'post');
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
        return r as StrictHttpResponse<GroupDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiGroupPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGroupPost(params?: {
    context?: HttpContext
    body?: GroupDto
  }
): Observable<GroupDto> {

    return this.apiGroupPost$Response(params).pipe(
      map((r: StrictHttpResponse<GroupDto>) => r.body as GroupDto)
    );
  }

  /**
   * Path part for operation apiGroupDelete
   */
  static readonly ApiGroupDeletePath = '/api/Group';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGroupDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGroupDelete$Response(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, GroupService.ApiGroupDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiGroupDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGroupDelete(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiGroupDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiGroupIdGet
   */
  static readonly ApiGroupIdGetPath = '/api/Group/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGroupIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGroupIdGet$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<GroupDto>> {

    const rb = new RequestBuilder(this.rootUrl, GroupService.ApiGroupIdGetPath, 'get');
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
        return r as StrictHttpResponse<GroupDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiGroupIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGroupIdGet(params: {
    id: number;
    context?: HttpContext
  }
): Observable<GroupDto> {

    return this.apiGroupIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<GroupDto>) => r.body as GroupDto)
    );
  }

}
