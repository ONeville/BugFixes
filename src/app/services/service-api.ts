import {Headers, Http, RequestOptionsArgs, Response, URLSearchParams} from '@angular/http';
import {Injectable} from '@angular/core';
import { IFilter } from '../models/helpers';

@Injectable()
export class ServiceApi {

  constructor(
    private _http: Http
  ) {}

  /**
   * Helper to call Http#get
   */
  public get<T>(url: string, filter?: IFilter): Promise<T> {
    return new Promise((resolve, reject) => {
      this._http.get(url, this.getJsonRequestOptions(filter ? {filter: filter} : undefined))
        // .map((res: Response) => res.json())
        .subscribe((result: any) => {
          resolve(result);
        }, (err) => {
          reject(err);
        });
    });
  }

  public getCount(url: string, where?: any): Promise<number> {
    return new Promise((resolve, reject) => {
      this._http.get(url, this.getJsonRequestOptions(where ? {where: where} : undefined))
        // .map((res: Response) => res.json())
        .subscribe((result: any) => {
          resolve(result.count);
        }, (err) => {
          reject(err);
        });
    });
  }

  public save<T>(url: string, data: any, id?:any): Promise<T> {
      if(id) return this.put(url + id, data);
    return this.post(url, data);
  }

  /**
   * Returns true if successful
   */
  public delete(url: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this._http.delete(url, this.getJsonRequestOptions()).subscribe((result: any) => {
        resolve(result.statusText === 'Ok' || result.statusText === 'OK');
      }, (err) => {
        resolve({ message: 'Could not delete the record', error: err});
      });
    });
  }

  private put(url: string, data: Object): Promise<any> {
    return new Promise((resolve, reject) => {
      this._http.put(url, JSON.stringify(data), this.getJsonRequestOptions())
        // .map((res: Response) => res.json())
        .subscribe((result: any) => {
          resolve(result);
        }, (response: any) => {
          let body: any = JSON.parse(response._body);
          reject(body);
        });
    });
  }

  private post(url: string, data: Object): Promise<any> {
    return new Promise((resolve, reject) => {
      this._http.post(url, JSON.stringify(data), this.getJsonRequestOptions())
        // .map((res: Response) => res.json())
        .subscribe((result: any) => {
          resolve(result);
        }, (response: any) => {
          let body: any = JSON.parse(response._body);
          reject(body);
        });
    });
  }

  private getJsonRequestOptions(params?: {}): RequestOptionsArgs {
    let headers: Headers = new Headers();

    headers.append('Content-Type', 'application/json');

    let requestOptionsArgs: RequestOptionsArgs = {headers: headers};

    if (params) {
      let urlSearchParams: URLSearchParams = new URLSearchParams();
      Object.keys(params).forEach((paramKey: string) => {
        urlSearchParams.set(paramKey, JSON.stringify(params[paramKey]));
      });
      requestOptionsArgs.search = urlSearchParams;
    }

    return requestOptionsArgs;
  }
}