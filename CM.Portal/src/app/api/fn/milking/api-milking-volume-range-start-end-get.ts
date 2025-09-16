/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MilkingVolumeDto } from '../../models/milking-volume-dto';

export interface ApiMilkingVolumeRangeStartEndGet$Params {
  start: string;
  end: string;
}

export function apiMilkingVolumeRangeStartEndGet(http: HttpClient, rootUrl: string, params: ApiMilkingVolumeRangeStartEndGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MilkingVolumeDto>>> {
  const rb = new RequestBuilder(rootUrl, apiMilkingVolumeRangeStartEndGet.PATH, 'get');
  if (params) {
    rb.path('start', params.start, {});
    rb.path('end', params.end, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<MilkingVolumeDto>>;
    })
  );
}

apiMilkingVolumeRangeStartEndGet.PATH = '/api/Milking/volume/range/{start}/{end}';
