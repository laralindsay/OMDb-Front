/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';


/**
 * e.g. ?i=tt0000001
 */
@Injectable({
  providedIn: 'root',
})
class IDParameterService extends __BaseService {
  static readonly getIdPath = '/?i';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Returns a single result based on the ID provided
   * @param params The `IDParameterService.GetIdParams` containing the following parameters:
   *
   * - `i`: A valid IMDb ID (e.g. tt0000001)
   *
   * - `r`: The response type to return
   *
   * - `plot`: Return short or full plot
   *
   * - `callback`: JSONP callback name
   */
  getIdResponse(params: IDParameterService.GetIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.i != null) __params = __params.set('i', params.i.toString());
    if (params.r != null) __params = __params.set('r', params.r.toString());
    if (params.plot != null) __params = __params.set('plot', params.plot.toString());
    if (params.callback != null) __params = __params.set('callback', params.callback.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/?i`,
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
   * Returns a single result based on the ID provided
   * @param params The `IDParameterService.GetIdParams` containing the following parameters:
   *
   * - `i`: A valid IMDb ID (e.g. tt0000001)
   *
   * - `r`: The response type to return
   *
   * - `plot`: Return short or full plot
   *
   * - `callback`: JSONP callback name
   */
  getId(params: IDParameterService.GetIdParams): __Observable<null> {
    return this.getIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module IDParameterService {

  /**
   * Parameters for getId
   */
  export interface GetIdParams {

    /**
     * A valid IMDb ID (e.g. tt0000001)
     */
    i: string;

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

export { IDParameterService }
