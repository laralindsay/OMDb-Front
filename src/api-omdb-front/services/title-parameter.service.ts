/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';


/**
 * e.g. ?t=title
 */
@Injectable({
  providedIn: 'root',
})
class TitleParameterService extends __BaseService {
  static readonly getTitlePath = '/?t';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Returns the most popular match for a given title
   * @param params The `TitleParameterService.GetTitleParams` containing the following parameters:
   *
   * - `t`: Title of movie or series
   *
   * - `y`: Year of release
   *
   * - `type`: Return movie or series
   *
   * - `r`: The response type to return
   *
   * - `plot`: Return short or full plot
   *
   * - `callback`: JSONP callback name
   */
  getTitleResponse(params: TitleParameterService.GetTitleParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.t != null) __params = __params.set('t', params.t.toString());
    if (params.y != null) __params = __params.set('y', params.y.toString());
    if (params.type != null) __params = __params.set('type', params.type.toString());
    if (params.r != null) __params = __params.set('r', params.r.toString());
    if (params.plot != null) __params = __params.set('plot', params.plot.toString());
    if (params.callback != null) __params = __params.set('callback', params.callback.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/?t`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Returns the most popular match for a given title
   * @param params The `TitleParameterService.GetTitleParams` containing the following parameters:
   *
   * - `t`: Title of movie or series
   *
   * - `y`: Year of release
   *
   * - `type`: Return movie or series
   *
   * - `r`: The response type to return
   *
   * - `plot`: Return short or full plot
   *
   * - `callback`: JSONP callback name
   */
  getTitle(params: TitleParameterService.GetTitleParams): __Observable<null> {
    return this.getTitleResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module TitleParameterService {

  /**
   * Parameters for getTitle
   */
  export interface GetTitleParams {

    /**
     * Title of movie or series
     */
    t: string;

    /**
     * Year of release
     */
    y?: number;

    /**
     * Return movie or series
     */
    type?: 'movie' | 'series';

    /**
     * The response type to return
     */
    r?: 'json' | 'xml';

    /**
     * Return short or full plot
     */
    plot?: 'short' | 'full';

    /**
     * JSONP callback name
     */
    callback?: string;
  }
}

export { TitleParameterService }
