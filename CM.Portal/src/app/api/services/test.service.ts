/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiTestGet } from '../fn/test/api-test-get';
import { ApiTestGet$Params } from '../fn/test/api-test-get';
import { DashboardInfoDto } from '../models/dashboard-info-dto';

@Injectable({ providedIn: 'root' })
export class TestService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiTestGet()` */
  static readonly ApiTestGetPath = '/api/Test';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTestGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTestGet$Response(params?: ApiTestGet$Params, context?: HttpContext): Observable<StrictHttpResponse<DashboardInfoDto>> {
    return apiTestGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTestGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTestGet(params?: ApiTestGet$Params, context?: HttpContext): Observable<DashboardInfoDto> {
    return this.apiTestGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<DashboardInfoDto>): DashboardInfoDto => r.body)
    );
  }

}
