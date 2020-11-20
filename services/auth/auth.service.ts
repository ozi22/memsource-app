import { AxiosPromise } from 'axios';
import coreApiService from '../core/coreApi.service';
import { IAuthService, ILogin } from './auth.interface';

class AuthService {
  public static getToken = (data: ILogin): AxiosPromise<IAuthService> => {
    return coreApiService.post(`auth/login`, data);
  };
}

export default AuthService;
