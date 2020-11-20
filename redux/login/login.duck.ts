import { createActionTypes } from '../create-action-types';
import { IAction } from '../redux.interface';
import { ILoginDuckState, ILoginDuck } from './login.duck.interface';
import { AppState } from '../store';
import { IAuthService } from '../../services/auth/auth.interface';

const LoginDuck: any = {
  name: 'LOGIN'
};

const initialState: ILoginDuckState = {
  isSignedIn: false,
  token: null,
  expires: null
};

const actionTypes: any = createActionTypes(
  {
    add_token: 'add_token',
    remove_token: 'change_signed_status'
  },
  LoginDuck.name
);

LoginDuck.reducer = (state: ILoginDuckState = initialState, action: IAction) => {
  switch (action.type) {
    case actionTypes.add_token:
      const { token, expires } = action.payload;
      return {
        ...state,
        token,
        expires,
        isSignedIn: true
      };
    case actionTypes.remove_token:
      return {
        ...state,
        token: null,
        expires: null,
        isSignedIn: false
      };
    default:
      return state;
  }
};

LoginDuck.addToken = (loginData: IAuthService) => ({
  type: actionTypes.add_token,
  payload: loginData
});

LoginDuck.removeToken = () => ({
  type: actionTypes.remove_token,
  payload: null
});

LoginDuck.getOwnState = (state: AppState): ILoginDuckState => state[LoginDuck.name] || initialState;
LoginDuck.getUserToken = (state: AppState): ILoginDuckState => LoginDuck.getOwnState(state).token;
LoginDuck.getIsSignedIn = (state: AppState): ILoginDuck => LoginDuck.getOwnState(state).isSignedIn;
LoginDuck.getExpires = (state: AppState): ILoginDuck => LoginDuck.getOwnState(state).expires;

export default LoginDuck as ILoginDuck;
