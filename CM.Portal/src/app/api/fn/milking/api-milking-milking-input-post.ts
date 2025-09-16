/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MilkingInputDto } from '../../models/milking-input-dto';

export interface ApiMilkingMilkingInputPost$Params {
      body?: MilkingInputDto
}

export function apiMilkingMilkingInputPost(http: HttpClient, rootUrl: string, params?: ApiMilkingMilkingInputPost$Params, context?: HttpContext): Observable<StrictHttpResponse<MilkingInputDto>> {
  const rb = new RequestBuilder(rootUrl, apiMilkingMilkingInputPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<MilkingInputDto>;
    })
  );
}

apiMilkingMilkingInputPost.PATH = '/api/Milking/milkingInput';
