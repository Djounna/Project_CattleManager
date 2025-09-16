/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { VaccinationDto } from '../../models/vaccination-dto';

export interface ApiVaccinationGet$Params {
}

export function apiVaccinationGet(http: HttpClient, rootUrl: string, params?: ApiVaccinationGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<VaccinationDto>>> {
  const rb = new RequestBuilder(rootUrl, apiVaccinationGet.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<VaccinationDto>>;
    })
  );
}

apiVaccinationGet.PATH = '/api/Vaccination';
