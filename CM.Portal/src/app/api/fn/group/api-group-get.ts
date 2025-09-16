/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GroupDto } from '../../models/group-dto';

export interface ApiGroupGet$Params {
}

export function apiGroupGet(http: HttpClient, rootUrl: string, params?: ApiGroupGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<GroupDto>>> {
  const rb = new RequestBuilder(rootUrl, apiGroupGet.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<GroupDto>>;
    })
  );
}

apiGroupGet.PATH = '/api/Group';
