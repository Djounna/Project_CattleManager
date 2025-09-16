/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MilkingDto } from '../../models/milking-dto';

export interface ApiMilkingCowIdRangeGet$Params {
  cowId: number;
  range: number;
}

export function apiMilkingCowIdRangeGet(http: HttpClient, rootUrl: string, params: ApiMilkingCowIdRangeGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MilkingDto>>> {
  const rb = new RequestBuilder(rootUrl, apiMilkingCowIdRangeGet.PATH, 'get');
  if (params) {
    rb.path('cowId', params.cowId, {});
    rb.path('range', params.range, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<MilkingDto>>;
    })
  );
}

apiMilkingCowIdRangeGet.PATH = '/api/Milking/{cowId}/{range}';
