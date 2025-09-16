/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { VaccinationDto } from '../../models/vaccination-dto';

export interface ApiVaccinationCowIdGet$Params {
  cowId: number;
}

export function apiVaccinationCowIdGet(http: HttpClient, rootUrl: string, params: ApiVaccinationCowIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<VaccinationDto>>> {
  const rb = new RequestBuilder(rootUrl, apiVaccinationCowIdGet.PATH, 'get');
  if (params) {
    rb.path('cowId', params.cowId, {});
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

apiVaccinationCowIdGet.PATH = '/api/Vaccination/{cowId}';
