/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiStatisticGet } from '../fn/statistic/api-statistic-get';
import { ApiStatisticGet$Params } from '../fn/statistic/api-statistic-get';
import { CattleStatisticsDto } from '../models/cattle-statistics-dto';

@Injectable({ providedIn: 'root' })
export class StatisticService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiStatisticGet()` */
  static readonly ApiStatisticGetPath = '/api/Statistic';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStatisticGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStatisticGet$Response(params?: ApiStatisticGet$Params, context?: HttpContext): Observable<StrictHttpResponse<CattleStatisticsDto>> {
    return apiStatisticGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStatisticGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStatisticGet(params?: ApiStatisticGet$Params, context?: HttpContext): Observable<CattleStatisticsDto> {
    return this.apiStatisticGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<CattleStatisticsDto>): CattleStatisticsDto => r.body)
    );
  }

}
