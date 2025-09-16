/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { InterventionDto } from '../../models/intervention-dto';

export interface ApiInterventionCowIdGet$Params {
  cowId: number;
}

export function apiInterventionCowIdGet(http: HttpClient, rootUrl: string, params: ApiInterventionCowIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<InterventionDto>>> {
  const rb = new RequestBuilder(rootUrl, apiInterventionCowIdGet.PATH, 'get');
  if (params) {
    rb.path('cowId', params.cowId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<InterventionDto>>;
    })
  );
}

apiInterventionCowIdGet.PATH = '/api/Intervention/{cowId}';
