/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MilkingDto } from '../../models/milking-dto';

export interface ApiMilkingGet$Params {
}

export function apiMilkingGet(http: HttpClient, rootUrl: string, params?: ApiMilkingGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MilkingDto>>> {
  const rb = new RequestBuilder(rootUrl, apiMilkingGet.PATH, 'get');
  if (params) {
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

apiMilkingGet.PATH = '/api/Milking';
