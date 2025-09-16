/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MilkingInputsDto } from '../../models/milking-inputs-dto';

export interface ApiMilkingMilkingInputsDateGet$Params {
  date: string;
}

export function apiMilkingMilkingInputsDateGet(http: HttpClient, rootUrl: string, params: ApiMilkingMilkingInputsDateGet$Params, context?: HttpContext): Observable<StrictHttpResponse<MilkingInputsDto>> {
  const rb = new RequestBuilder(rootUrl, apiMilkingMilkingInputsDateGet.PATH, 'get');
  if (params) {
    rb.path('date', params.date, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<MilkingInputsDto>;
    })
  );
}

apiMilkingMilkingInputsDateGet.PATH = '/api/Milking/milkingInputs/{date}';
