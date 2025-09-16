/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { VaccinationDto } from '../../models/vaccination-dto';

export interface ApiVaccinationPost$Params {
      body?: VaccinationDto
}

export function apiVaccinationPost(http: HttpClient, rootUrl: string, params?: ApiVaccinationPost$Params, context?: HttpContext): Observable<StrictHttpResponse<VaccinationDto>> {
  const rb = new RequestBuilder(rootUrl, apiVaccinationPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<VaccinationDto>;
    })
  );
}

apiVaccinationPost.PATH = '/api/Vaccination';
