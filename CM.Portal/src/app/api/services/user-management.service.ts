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

import { RoleDto } from '../models/role-dto';
import { UserInput } from '../models/user-input';

@Injectable({
  providedIn: 'root',
})
export class UserManagementService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiUserManagementUserUserIdRolesGet
   */
  static readonly ApiUserManagementUserUserIdRolesGetPath = '/api/UserManagement/user/{userId}/roles';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserManagementUserUserIdRolesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserManagementUserUserIdRolesGet$Response(params: {
    userId: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<RoleDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UserManagementService.ApiUserManagementUserUserIdRolesGetPath, 'get');
    if (params) {
      rb.path('userId', params.userId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<RoleDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserManagementUserUserIdRolesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserManagementUserUserIdRolesGet(params: {
    userId: number;
    context?: HttpContext
  }
): Observable<Array<RoleDto>> {

    return this.apiUserManagementUserUserIdRolesGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<RoleDto>>) => r.body as Array<RoleDto>)
    );
  }

  /**
   * Path part for operation apiUserManagementPut
   */
  static readonly ApiUserManagementPutPath = '/api/UserManagement';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserManagementPut()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserManagementPut$Response(params?: {
    userId?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<RoleDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UserManagementService.ApiUserManagementPutPath, 'put');
    if (params) {
      rb.query('userId', params.userId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<RoleDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserManagementPut$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserManagementPut(params?: {
    userId?: number;
    context?: HttpContext
  }
): Observable<Array<RoleDto>> {

    return this.apiUserManagementPut$Response(params).pipe(
      map((r: StrictHttpResponse<Array<RoleDto>>) => r.body as Array<RoleDto>)
    );
  }

  /**
   * Path part for operation apiUserManagementPost
   */
  static readonly ApiUserManagementPostPath = '/api/UserManagement';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserManagementPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserManagementPost$Response(params?: {
    context?: HttpContext
    body?: UserInput
  }
): Observable<StrictHttpResponse<UserInput>> {

    const rb = new RequestBuilder(this.rootUrl, UserManagementService.ApiUserManagementPostPath, 'post');
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
        return r as StrictHttpResponse<UserInput>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserManagementPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserManagementPost(params?: {
    context?: HttpContext
    body?: UserInput
  }
): Observable<UserInput> {

    return this.apiUserManagementPost$Response(params).pipe(
      map((r: StrictHttpResponse<UserInput>) => r.body as UserInput)
    );
  }

}
