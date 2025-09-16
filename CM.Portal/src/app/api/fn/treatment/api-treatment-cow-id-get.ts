/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TreatmentDto } from '../../models/treatment-dto';

export interface ApiTreatmentCowIdGet$Params {
  cowId: number;
}

export function apiTreatmentCowIdGet(http: HttpClient, rootUrl: string, params: ApiTreatmentCowIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TreatmentDto>>> {
  const rb = new RequestBuilder(rootUrl, apiTreatmentCowIdGet.PATH, 'get');
  if (params) {
    rb.path('cowId', params.cowId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<TreatmentDto>>;
    })
  );
}

apiTreatmentCowIdGet.PATH = '/api/Treatment/{cowId}';
