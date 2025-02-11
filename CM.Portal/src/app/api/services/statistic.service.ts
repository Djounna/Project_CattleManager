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

import { CattleStatisticsDto } from '../models/cattle-statistics-dto';

@Injectable({
  providedIn: 'root',
})
export class StatisticService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiStatisticGet
   */
  static readonly ApiStatisticGetPath = '/api/Statistic';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStatisticGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStatisticGet$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<CattleStatisticsDto>> {

    const rb = new RequestBuilder(this.rootUrl, StatisticService.ApiStatisticGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CattleStatisticsDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiStatisticGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStatisticGet(params?: {
    context?: HttpContext
  }
): Observable<CattleStatisticsDto> {

    return this.apiStatisticGet$Response(params).pipe(
      map((r: StrictHttpResponse<CattleStatisticsDto>) => r.body as CattleStatisticsDto)
    );
  }

}
