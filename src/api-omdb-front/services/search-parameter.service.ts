/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';


/**
 * e.g. ?s=title
 */
@Injectable({
  providedIn: 'root',
})
class SearchParameterService extends __BaseService {
  static readonly titleSearchPath = '/?s';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Returns an array of results for a given title
   * @param params The `SearchParameterService.TitleSearchParams` containing the following parameters:
   *
   * - `s`: Title of movie or series
   *
   * - `y`: Year of release
   *
   * - `type`: Return movie or series
   *
   * - `r`: The response type to return
   *
   * - `page`: Page number to return
   *
   * - `callback`: JSONP callback name
   */
  titleSearchResponse(params: SearchParameterService.TitleSearchParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.s != null) __params = __params.set('s', params.s.toString());
    if (params.y != null) __params = __params.set('y', params.y.toString());
    if (params.type != null) __params = __params.set('type', params.type.toString());
    if (params.r != null) __params = __params.set('r', params.r.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.callback != null) __params = __params.set('callback', params.callback.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/?s`,
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
   * Returns an array of results for a given title
   * @param params The `SearchParameterService.TitleSearchParams` containing the following parameters:
   *
   * - `s`: Title of movie or series
   *
   * - `y`: Year of release
   *
   * - `type`: Return movie or series
   *
   * - `r`: The response type to return
   *
   * - `page`: Page number to return
   *
   * - `callback`: JSONP callback name
   */
  titleSearch(params: SearchParameterService.TitleSearchParams): __Observable<null> {
    return this.titleSearchResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module SearchParameterService {

  /**
   * Parameters for titleSearch
   */
  export interface TitleSearchParams {

    /**
     * Title of movie or series
     */
    s: string;

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
     * Page number to return
     */
    page?: number;

    /**
     * JSONP callback name
     */
    callback?: string;
  }
}

export { SearchParameterService }
