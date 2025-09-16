/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiMilkingCowIdRangeGet } from '../fn/milking/api-milking-cow-id-range-get';
import { ApiMilkingCowIdRangeGet$Params } from '../fn/milking/api-milking-cow-id-range-get';
import { apiMilkingCowIdStartEndGet } from '../fn/milking/api-milking-cow-id-start-end-get';
import { ApiMilkingCowIdStartEndGet$Params } from '../fn/milking/api-milking-cow-id-start-end-get';
import { apiMilkingDelete } from '../fn/milking/api-milking-delete';
import { ApiMilkingDelete$Params } from '../fn/milking/api-milking-delete';
import { apiMilkingGet } from '../fn/milking/api-milking-get';
import { ApiMilkingGet$Params } from '../fn/milking/api-milking-get';
import { apiMilkingIdGet } from '../fn/milking/api-milking-id-get';
import { ApiMilkingIdGet$Params } from '../fn/milking/api-milking-id-get';
import { apiMilkingMilkingInputPost } from '../fn/milking/api-milking-milking-input-post';
import { ApiMilkingMilkingInputPost$Params } from '../fn/milking/api-milking-milking-input-post';
import { apiMilkingMilkingInputsDateGet } from '../fn/milking/api-milking-milking-inputs-date-get';
import { ApiMilkingMilkingInputsDateGet$Params } from '../fn/milking/api-milking-milking-inputs-date-get';
import { apiMilkingMilkingInputsPost } from '../fn/milking/api-milking-milking-inputs-post';
import { ApiMilkingMilkingInputsPost$Params } from '../fn/milking/api-milking-milking-inputs-post';
import { apiMilkingPost } from '../fn/milking/api-milking-post';
import { ApiMilkingPost$Params } from '../fn/milking/api-milking-post';
import { apiMilkingPut } from '../fn/milking/api-milking-put';
import { ApiMilkingPut$Params } from '../fn/milking/api-milking-put';
import { apiMilkingRangeStartEndGet } from '../fn/milking/api-milking-range-start-end-get';
import { ApiMilkingRangeStartEndGet$Params } from '../fn/milking/api-milking-range-start-end-get';
import { apiMilkingVolumeRangeStartEndGet } from '../fn/milking/api-milking-volume-range-start-end-get';
import { ApiMilkingVolumeRangeStartEndGet$Params } from '../fn/milking/api-milking-volume-range-start-end-get';
import { MilkingDto } from '../models/milking-dto';
import { MilkingInputDto } from '../models/milking-input-dto';
import { MilkingInputsDto } from '../models/milking-inputs-dto';
import { MilkingVolumeDto } from '../models/milking-volume-dto';

@Injectable({ providedIn: 'root' })
export class MilkingService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiMilkingIdGet()` */
  static readonly ApiMilkingIdGetPath = '/api/Milking/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMilkingIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMilkingIdGet$Response(params: ApiMilkingIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<MilkingDto>> {
    return apiMilkingIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMilkingIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMilkingIdGet(params: ApiMilkingIdGet$Params, context?: HttpContext): Observable<MilkingDto> {
    return this.apiMilkingIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<MilkingDto>): MilkingDto => r.body)
    );
  }

  /** Path part for operation `apiMilkingGet()` */
  static readonly ApiMilkingGetPath = '/api/Milking';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMilkingGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMilkingGet$Response(params?: ApiMilkingGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MilkingDto>>> {
    return apiMilkingGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMilkingGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMilkingGet(params?: ApiMilkingGet$Params, context?: HttpContext): Observable<Array<MilkingDto>> {
    return this.apiMilkingGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<MilkingDto>>): Array<MilkingDto> => r.body)
    );
  }

  /** Path part for operation `apiMilkingPut()` */
  static readonly ApiMilkingPutPath = '/api/Milking';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMilkingPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMilkingPut$Response(params?: ApiMilkingPut$Params, context?: HttpContext): Observable<StrictHttpResponse<MilkingDto>> {
    return apiMilkingPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMilkingPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMilkingPut(params?: ApiMilkingPut$Params, context?: HttpContext): Observable<MilkingDto> {
    return this.apiMilkingPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<MilkingDto>): MilkingDto => r.body)
    );
  }

  /** Path part for operation `apiMilkingPost()` */
  static readonly ApiMilkingPostPath = '/api/Milking';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMilkingPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMilkingPost$Response(params?: ApiMilkingPost$Params, context?: HttpContext): Observable<StrictHttpResponse<MilkingDto>> {
    return apiMilkingPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMilkingPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMilkingPost(params?: ApiMilkingPost$Params, context?: HttpContext): Observable<MilkingDto> {
    return this.apiMilkingPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<MilkingDto>): MilkingDto => r.body)
    );
  }

  /** Path part for operation `apiMilkingDelete()` */
  static readonly ApiMilkingDeletePath = '/api/Milking';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMilkingDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMilkingDelete$Response(params?: ApiMilkingDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiMilkingDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMilkingDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMilkingDelete(params?: ApiMilkingDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiMilkingDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiMilkingRangeStartEndGet()` */
  static readonly ApiMilkingRangeStartEndGetPath = '/api/Milking/range/{start}/{end}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMilkingRangeStartEndGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMilkingRangeStartEndGet$Response(params: ApiMilkingRangeStartEndGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MilkingDto>>> {
    return apiMilkingRangeStartEndGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMilkingRangeStartEndGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMilkingRangeStartEndGet(params: ApiMilkingRangeStartEndGet$Params, context?: HttpContext): Observable<Array<MilkingDto>> {
    return this.apiMilkingRangeStartEndGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<MilkingDto>>): Array<MilkingDto> => r.body)
    );
  }

  /** Path part for operation `apiMilkingVolumeRangeStartEndGet()` */
  static readonly ApiMilkingVolumeRangeStartEndGetPath = '/api/Milking/volume/range/{start}/{end}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMilkingVolumeRangeStartEndGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMilkingVolumeRangeStartEndGet$Response(params: ApiMilkingVolumeRangeStartEndGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MilkingVolumeDto>>> {
    return apiMilkingVolumeRangeStartEndGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMilkingVolumeRangeStartEndGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMilkingVolumeRangeStartEndGet(params: ApiMilkingVolumeRangeStartEndGet$Params, context?: HttpContext): Observable<Array<MilkingVolumeDto>> {
    return this.apiMilkingVolumeRangeStartEndGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<MilkingVolumeDto>>): Array<MilkingVolumeDto> => r.body)
    );
  }

  /** Path part for operation `apiMilkingCowIdRangeGet()` */
  static readonly ApiMilkingCowIdRangeGetPath = '/api/Milking/{cowId}/{range}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMilkingCowIdRangeGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMilkingCowIdRangeGet$Response(params: ApiMilkingCowIdRangeGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MilkingDto>>> {
    return apiMilkingCowIdRangeGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMilkingCowIdRangeGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMilkingCowIdRangeGet(params: ApiMilkingCowIdRangeGet$Params, context?: HttpContext): Observable<Array<MilkingDto>> {
    return this.apiMilkingCowIdRangeGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<MilkingDto>>): Array<MilkingDto> => r.body)
    );
  }

  /** Path part for operation `apiMilkingCowIdStartEndGet()` */
  static readonly ApiMilkingCowIdStartEndGetPath = '/api/Milking/{cowId}/{start}/{end}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMilkingCowIdStartEndGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMilkingCowIdStartEndGet$Response(params: ApiMilkingCowIdStartEndGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MilkingDto>>> {
    return apiMilkingCowIdStartEndGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMilkingCowIdStartEndGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMilkingCowIdStartEndGet(params: ApiMilkingCowIdStartEndGet$Params, context?: HttpContext): Observable<Array<MilkingDto>> {
    return this.apiMilkingCowIdStartEndGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<MilkingDto>>): Array<MilkingDto> => r.body)
    );
  }

  /** Path part for operation `apiMilkingMilkingInputsDateGet()` */
  static readonly ApiMilkingMilkingInputsDateGetPath = '/api/Milking/milkingInputs/{date}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMilkingMilkingInputsDateGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMilkingMilkingInputsDateGet$Response(params: ApiMilkingMilkingInputsDateGet$Params, context?: HttpContext): Observable<StrictHttpResponse<MilkingInputsDto>> {
    return apiMilkingMilkingInputsDateGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMilkingMilkingInputsDateGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMilkingMilkingInputsDateGet(params: ApiMilkingMilkingInputsDateGet$Params, context?: HttpContext): Observable<MilkingInputsDto> {
    return this.apiMilkingMilkingInputsDateGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<MilkingInputsDto>): MilkingInputsDto => r.body)
    );
  }

  /** Path part for operation `apiMilkingMilkingInputsPost()` */
  static readonly ApiMilkingMilkingInputsPostPath = '/api/Milking/milkingInputs';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMilkingMilkingInputsPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMilkingMilkingInputsPost$Response(params?: ApiMilkingMilkingInputsPost$Params, context?: HttpContext): Observable<StrictHttpResponse<MilkingInputsDto>> {
    return apiMilkingMilkingInputsPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMilkingMilkingInputsPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMilkingMilkingInputsPost(params?: ApiMilkingMilkingInputsPost$Params, context?: HttpContext): Observable<MilkingInputsDto> {
    return this.apiMilkingMilkingInputsPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<MilkingInputsDto>): MilkingInputsDto => r.body)
    );
  }

  /** Path part for operation `apiMilkingMilkingInputPost()` */
  static readonly ApiMilkingMilkingInputPostPath = '/api/Milking/milkingInput';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMilkingMilkingInputPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMilkingMilkingInputPost$Response(params?: ApiMilkingMilkingInputPost$Params, context?: HttpContext): Observable<StrictHttpResponse<MilkingInputDto>> {
    return apiMilkingMilkingInputPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMilkingMilkingInputPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMilkingMilkingInputPost(params?: ApiMilkingMilkingInputPost$Params, context?: HttpContext): Observable<MilkingInputDto> {
    return this.apiMilkingMilkingInputPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<MilkingInputDto>): MilkingInputDto => r.body)
    );
  }

}
