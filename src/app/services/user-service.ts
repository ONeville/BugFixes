import { Injectable } from '@angular/core';
import { IUser } from '../models/user';
import { IFilter } from '../models/helpers';
import { ServiceApi } from './service-api';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {
  public static BASE_ROUTE: string = environment.baseUrl + '/user/';
  public static BASE_ROUTE_Auth: string = environment.baseUrl + '/auth/login/';
  public static BASE_ROUTE_Auth2: string = environment.baseUrl + '/auth/loginTest/';

  constructor(private _service: ServiceApi) {}

  public get(filter?: IFilter): Promise<IUser[]> {
    return this._service.get<IUser[]>(UserService.BASE_ROUTE, filter);
  }

  public async login(user: IUser): Promise<any> {
    try {
      const token = await this._service.save<any>(UserService.BASE_ROUTE_Auth, user);
      localStorage.setItem('currentUser', JSON.stringify(user));
      return JSON.parse(token._body);
    } catch (error) {
        return error
    }
  }

  public logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
  // public save(user: IUser): Promise<IUser> {
  //   return this._service.save<IUser>(UserService.BASE_ROUTE, user);
  // }
  public save(user: IUser, id?:any): Promise<IUser> {
    return this._service.save<IUser>(UserService.BASE_ROUTE, user, id);
  }

  public delete(id: string): Promise<boolean> {
    return this._service.delete(UserService.BASE_ROUTE + id);
  }
}