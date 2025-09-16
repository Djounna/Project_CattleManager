/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiUserManagementPost } from '../fn/user-management/api-user-management-post';
import { ApiUserManagementPost$Params } from '../fn/user-management/api-user-management-post';
import { apiUserManagementPut } from '../fn/user-management/api-user-management-put';
import { ApiUserManagementPut$Params } from '../fn/user-management/api-user-management-put';
import { apiUserManagementUserUserIdRolesGet } from '../fn/user-management/api-user-management-user-user-id-roles-get';
import { ApiUserManagementUserUserIdRolesGet$Params } from '../fn/user-management/api-user-management-user-user-id-roles-get';
import { RoleDto } from '../models/role-dto';
import { UserInput } from '../models/user-input';

@Injectable({ providedIn: 'root' })
export class UserManagementService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiUserManagementUserUserIdRolesGet()` */
  static readonly ApiUserManagementUserUserIdRolesGetPath = '/api/UserManagement/user/{userId}/roles';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserManagementUserUserIdRolesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserManagementUserUserIdRolesGet$Response(params: ApiUserManagementUserUserIdRolesGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<RoleDto>>> {
    return apiUserManagementUserUserIdRolesGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserManagementUserUserIdRolesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserManagementUserUserIdRolesGet(params: ApiUserManagementUserUserIdRolesGet$Params, context?: HttpContext): Observable<Array<RoleDto>> {
    return this.apiUserManagementUserUserIdRolesGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<RoleDto>>): Array<RoleDto> => r.body)
    );
  }

  /** Path part for operation `apiUserManagementPut()` */
  static readonly ApiUserManagementPutPath = '/api/UserManagement';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserManagementPut()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserManagementPut$Response(params?: ApiUserManagementPut$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<RoleDto>>> {
    return apiUserManagementPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserManagementPut$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserManagementPut(params?: ApiUserManagementPut$Params, context?: HttpContext): Observable<Array<RoleDto>> {
    return this.apiUserManagementPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<RoleDto>>): Array<RoleDto> => r.body)
    );
  }

  /** Path part for operation `apiUserManagementPost()` */
  static readonly ApiUserManagementPostPath = '/api/UserManagement';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserManagementPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserManagementPost$Response(params?: ApiUserManagementPost$Params, context?: HttpContext): Observable<StrictHttpResponse<UserInput>> {
    return apiUserManagementPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserManagementPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserManagementPost(params?: ApiUserManagementPost$Params, context?: HttpContext): Observable<UserInput> {
    return this.apiUserManagementPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserInput>): UserInput => r.body)
    );
  }

}
