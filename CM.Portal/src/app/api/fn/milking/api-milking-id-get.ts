/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MilkingDto } from '../../models/milking-dto';

export interface ApiMilkingIdGet$Params {
  id: number;
}

export function apiMilkingIdGet(http: HttpClient, rootUrl: string, params: ApiMilkingIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<MilkingDto>> {
  const rb = new RequestBuilder(rootUrl, apiMilkingIdGet.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<MilkingDto>;
    })
  );
}

apiMilkingIdGet.PATH = '/api/Milking/{id}';
