export interface IAuthUser {
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  role: string;
  uid: string;
  userName: string;
}

export interface IAuthService {
  expires: string;
  token: string;
  user: IAuthUser;
}

export interface ILogin {
  userName: string
  password: string
}
