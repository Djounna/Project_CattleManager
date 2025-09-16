/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiGroupAssignPost } from '../fn/group/api-group-assign-post';
import { ApiGroupAssignPost$Params } from '../fn/group/api-group-assign-post';
import { apiGroupDelete } from '../fn/group/api-group-delete';
import { ApiGroupDelete$Params } from '../fn/group/api-group-delete';
import { apiGroupGet } from '../fn/group/api-group-get';
import { ApiGroupGet$Params } from '../fn/group/api-group-get';
import { apiGroupIdGet } from '../fn/group/api-group-id-get';
import { ApiGroupIdGet$Params } from '../fn/group/api-group-id-get';
import { apiGroupPost } from '../fn/group/api-group-post';
import { ApiGroupPost$Params } from '../fn/group/api-group-post';
import { apiGroupPut } from '../fn/group/api-group-put';
import { ApiGroupPut$Params } from '../fn/group/api-group-put';
import { GroupDto } from '../models/group-dto';
import { ProblemDetails } from '../models/problem-details';

@Injectable({ providedIn: 'root' })
export class GroupService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiGroupGet()` */
  static readonly ApiGroupGetPath = '/api/Group';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGroupGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGroupGet$Response(params?: ApiGroupGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<GroupDto>>> {
    return apiGroupGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGroupGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGroupGet(params?: ApiGroupGet$Params, context?: HttpContext): Observable<Array<GroupDto>> {
    return this.apiGroupGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<GroupDto>>): Array<GroupDto> => r.body)
    );
  }

  /** Path part for operation `apiGroupPut()` */
  static readonly ApiGroupPutPath = '/api/Group';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGroupPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGroupPut$Response(params?: ApiGroupPut$Params, context?: HttpContext): Observable<StrictHttpResponse<GroupDto>> {
    return apiGroupPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGroupPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGroupPut(params?: ApiGroupPut$Params, context?: HttpContext): Observable<GroupDto> {
    return this.apiGroupPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<GroupDto>): GroupDto => r.body)
    );
  }

  /** Path part for operation `apiGroupPost()` */
  static readonly ApiGroupPostPath = '/api/Group';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGroupPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGroupPost$Response(params?: ApiGroupPost$Params, context?: HttpContext): Observable<StrictHttpResponse<GroupDto>> {
    return apiGroupPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGroupPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGroupPost(params?: ApiGroupPost$Params, context?: HttpContext): Observable<GroupDto> {
    return this.apiGroupPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<GroupDto>): GroupDto => r.body)
    );
  }

  /** Path part for operation `apiGroupDelete()` */
  static readonly ApiGroupDeletePath = '/api/Group';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGroupDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGroupDelete$Response(params?: ApiGroupDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiGroupDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGroupDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGroupDelete(params?: ApiGroupDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiGroupDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiGroupIdGet()` */
  static readonly ApiGroupIdGetPath = '/api/Group/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGroupIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGroupIdGet$Response(params: ApiGroupIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<GroupDto>> {
    return apiGroupIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGroupIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGroupIdGet(params: ApiGroupIdGet$Params, context?: HttpContext): Observable<GroupDto> {
    return this.apiGroupIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<GroupDto>): GroupDto => r.body)
    );
  }

  /** Path part for operation `apiGroupAssignPost()` */
  static readonly ApiGroupAssignPostPath = '/api/Group/assign';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGroupAssignPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGroupAssignPost$Response(params?: ApiGroupAssignPost$Params, context?: HttpContext): Observable<StrictHttpResponse<ProblemDetails>> {
    return apiGroupAssignPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGroupAssignPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGroupAssignPost(params?: ApiGroupAssignPost$Params, context?: HttpContext): Observable<ProblemDetails> {
    return this.apiGroupAssignPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProblemDetails>): ProblemDetails => r.body)
    );
  }

}
