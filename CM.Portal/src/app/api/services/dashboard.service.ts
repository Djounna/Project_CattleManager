/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiDashboardGet } from '../fn/dashboard/api-dashboard-get';
import { ApiDashboardGet$Params } from '../fn/dashboard/api-dashboard-get';
import { DashboardInfoDto } from '../models/dashboard-info-dto';

@Injectable({ providedIn: 'root' })
export class DashboardService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiDashboardGet()` */
  static readonly ApiDashboardGetPath = '/api/Dashboard';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardGet$Response(params?: ApiDashboardGet$Params, context?: HttpContext): Observable<StrictHttpResponse<DashboardInfoDto>> {
    return apiDashboardGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardGet(params?: ApiDashboardGet$Params, context?: HttpContext): Observable<DashboardInfoDto> {
    return this.apiDashboardGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<DashboardInfoDto>): DashboardInfoDto => r.body)
    );
  }

}
