/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiJobDateGet } from '../fn/job/api-job-date-get';
import { ApiJobDateGet$Params } from '../fn/job/api-job-date-get';
import { apiJobDelete } from '../fn/job/api-job-delete';
import { ApiJobDelete$Params } from '../fn/job/api-job-delete';
import { apiJobDetailsDateGet } from '../fn/job/api-job-details-date-get';
import { ApiJobDetailsDateGet$Params } from '../fn/job/api-job-details-date-get';
import { apiJobDetailsGet } from '../fn/job/api-job-details-get';
import { ApiJobDetailsGet$Params } from '../fn/job/api-job-details-get';
import { apiJobDetailsUserAuthDateGet } from '../fn/job/api-job-details-user-auth-date-get';
import { ApiJobDetailsUserAuthDateGet$Params } from '../fn/job/api-job-details-user-auth-date-get';
import { apiJobGet } from '../fn/job/api-job-get';
import { ApiJobGet$Params } from '../fn/job/api-job-get';
import { apiJobIdGet } from '../fn/job/api-job-id-get';
import { ApiJobIdGet$Params } from '../fn/job/api-job-id-get';
import { apiJobPost } from '../fn/job/api-job-post';
import { ApiJobPost$Params } from '../fn/job/api-job-post';
import { apiJobPut } from '../fn/job/api-job-put';
import { ApiJobPut$Params } from '../fn/job/api-job-put';
import { JobDetailsDto } from '../models/job-details-dto';
import { JobDto } from '../models/job-dto';

@Injectable({ providedIn: 'root' })
export class JobService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiJobGet()` */
  static readonly ApiJobGetPath = '/api/Job';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiJobGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiJobGet$Response(params?: ApiJobGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<JobDto>>> {
    return apiJobGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiJobGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiJobGet(params?: ApiJobGet$Params, context?: HttpContext): Observable<Array<JobDto>> {
    return this.apiJobGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<JobDto>>): Array<JobDto> => r.body)
    );
  }

  /** Path part for operation `apiJobPut()` */
  static readonly ApiJobPutPath = '/api/Job';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiJobPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiJobPut$Response(params?: ApiJobPut$Params, context?: HttpContext): Observable<StrictHttpResponse<JobDto>> {
    return apiJobPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiJobPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiJobPut(params?: ApiJobPut$Params, context?: HttpContext): Observable<JobDto> {
    return this.apiJobPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<JobDto>): JobDto => r.body)
    );
  }

  /** Path part for operation `apiJobPost()` */
  static readonly ApiJobPostPath = '/api/Job';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiJobPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiJobPost$Response(params?: ApiJobPost$Params, context?: HttpContext): Observable<StrictHttpResponse<JobDto>> {
    return apiJobPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiJobPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiJobPost(params?: ApiJobPost$Params, context?: HttpContext): Observable<JobDto> {
    return this.apiJobPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<JobDto>): JobDto => r.body)
    );
  }

  /** Path part for operation `apiJobDelete()` */
  static readonly ApiJobDeletePath = '/api/Job';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiJobDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiJobDelete$Response(params?: ApiJobDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiJobDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiJobDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiJobDelete(params?: ApiJobDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiJobDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiJobDateGet()` */
  static readonly ApiJobDateGetPath = '/api/Job/date';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiJobDateGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiJobDateGet$Response(params?: ApiJobDateGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<JobDto>>> {
    return apiJobDateGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiJobDateGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiJobDateGet(params?: ApiJobDateGet$Params, context?: HttpContext): Observable<Array<JobDto>> {
    return this.apiJobDateGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<JobDto>>): Array<JobDto> => r.body)
    );
  }

  /** Path part for operation `apiJobDetailsGet()` */
  static readonly ApiJobDetailsGetPath = '/api/Job/details';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiJobDetailsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiJobDetailsGet$Response(params?: ApiJobDetailsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<JobDetailsDto>>> {
    return apiJobDetailsGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiJobDetailsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiJobDetailsGet(params?: ApiJobDetailsGet$Params, context?: HttpContext): Observable<Array<JobDetailsDto>> {
    return this.apiJobDetailsGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<JobDetailsDto>>): Array<JobDetailsDto> => r.body)
    );
  }

  /** Path part for operation `apiJobDetailsDateGet()` */
  static readonly ApiJobDetailsDateGetPath = '/api/Job/details/date';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiJobDetailsDateGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiJobDetailsDateGet$Response(params?: ApiJobDetailsDateGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<JobDetailsDto>>> {
    return apiJobDetailsDateGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiJobDetailsDateGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiJobDetailsDateGet(params?: ApiJobDetailsDateGet$Params, context?: HttpContext): Observable<Array<JobDetailsDto>> {
    return this.apiJobDetailsDateGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<JobDetailsDto>>): Array<JobDetailsDto> => r.body)
    );
  }

  /** Path part for operation `apiJobDetailsUserAuthDateGet()` */
  static readonly ApiJobDetailsUserAuthDateGetPath = '/api/Job/details/{userAuth}/{date}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiJobDetailsUserAuthDateGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiJobDetailsUserAuthDateGet$Response(params: ApiJobDetailsUserAuthDateGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<JobDetailsDto>>> {
    return apiJobDetailsUserAuthDateGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiJobDetailsUserAuthDateGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiJobDetailsUserAuthDateGet(params: ApiJobDetailsUserAuthDateGet$Params, context?: HttpContext): Observable<Array<JobDetailsDto>> {
    return this.apiJobDetailsUserAuthDateGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<JobDetailsDto>>): Array<JobDetailsDto> => r.body)
    );
  }

  /** Path part for operation `apiJobIdGet()` */
  static readonly ApiJobIdGetPath = '/api/Job/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiJobIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiJobIdGet$Response(params: ApiJobIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<JobDto>> {
    return apiJobIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiJobIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiJobIdGet(params: ApiJobIdGet$Params, context?: HttpContext): Observable<JobDto> {
    return this.apiJobIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<JobDto>): JobDto => r.body)
    );
  }

}
