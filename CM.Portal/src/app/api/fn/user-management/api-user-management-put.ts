/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RoleDto } from '../../models/role-dto';

export interface ApiUserManagementPut$Params {
  userId?: number;
}

export function apiUserManagementPut(http: HttpClient, rootUrl: string, params?: ApiUserManagementPut$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<RoleDto>>> {
  const rb = new RequestBuilder(rootUrl, apiUserManagementPut.PATH, 'put');
  if (params) {
    rb.query('userId', params.userId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<RoleDto>>;
    })
  );
}

apiUserManagementPut.PATH = '/api/UserManagement';
