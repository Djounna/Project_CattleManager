/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MilkingDto } from '../../models/milking-dto';

export interface ApiMilkingCowIdStartEndGet$Params {
  cowId: number;
  start: string;
  end: string;
}

export function apiMilkingCowIdStartEndGet(http: HttpClient, rootUrl: string, params: ApiMilkingCowIdStartEndGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MilkingDto>>> {
  const rb = new RequestBuilder(rootUrl, apiMilkingCowIdStartEndGet.PATH, 'get');
  if (params) {
    rb.path('cowId', params.cowId, {});
    rb.path('start', params.start, {});
    rb.path('end', params.end, {});
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

apiMilkingCowIdStartEndGet.PATH = '/api/Milking/{cowId}/{start}/{end}';
