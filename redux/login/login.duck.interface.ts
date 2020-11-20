import { IAction } from '../redux.interface';
import { AppState } from '../store';
import { IAuthService } from '../../services/auth/auth.interface';

export interface ILoginDuckState {
  token: string | null;
  isSignedIn: boolean;
  expires: string | null;
}

export interface ILoginDuck {
  name: string;
  reducer: (state: ILoginDuckState, action: IAction) => ILoginDuckState;
  getOwnState: (state: AppState) => ILoginDuckState;
  getUserToken: (state: AppState) => string;
  getIsSignedIn: (state: AppState) => boolean;
  getExpires: (state: AppState) => string;
  addToken: (token: IAuthService) => IAction;
  removeToken: () => void;
}
