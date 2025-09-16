/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GroupDto } from '../../models/group-dto';

export interface ApiGroupIdGet$Params {
  id: number;
}

export function apiGroupIdGet(http: HttpClient, rootUrl: string, params: ApiGroupIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<GroupDto>> {
  const rb = new RequestBuilder(rootUrl, apiGroupIdGet.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GroupDto>;
    })
  );
}

apiGroupIdGet.PATH = '/api/Group/{id}';
