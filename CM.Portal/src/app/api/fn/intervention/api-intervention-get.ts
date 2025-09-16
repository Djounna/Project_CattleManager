/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { InterventionDto } from '../../models/intervention-dto';

export interface ApiInterventionGet$Params {
}

export function apiInterventionGet(http: HttpClient, rootUrl: string, params?: ApiInterventionGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<InterventionDto>>> {
  const rb = new RequestBuilder(rootUrl, apiInterventionGet.PATH, 'get');
  if (params) {
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

apiInterventionGet.PATH = '/api/Intervention';
