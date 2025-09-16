/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CowGenealogyDto } from '../../models/cow-genealogy-dto';

export interface ApiCowIdGenealogyGet$Params {
  id: number;
}

export function apiCowIdGenealogyGet(http: HttpClient, rootUrl: string, params: ApiCowIdGenealogyGet$Params, context?: HttpContext): Observable<StrictHttpResponse<CowGenealogyDto>> {
  const rb = new RequestBuilder(rootUrl, apiCowIdGenealogyGet.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CowGenealogyDto>;
    })
  );
}

apiCowIdGenealogyGet.PATH = '/api/Cow/{id}/genealogy';
