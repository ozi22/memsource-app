import { applyMiddleware, combineReducers, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import UIDuck from './ui/ui.duck';
import LoginDuck from './login/login.duck';
import ProjectsDuck from './projects/projects.duck';

const combineDucks = (...ducks: any): any =>
  combineReducers(
    ducks.reduce((root: any, duck: any) => {
      return { ...root, [duck.name]: duck.reducer };
    }, {})
  );

export type AppState = ReturnType<typeof combineDucks>;

const rootReducer: any = combineDucks(UIDuck, LoginDuck, ProjectsDuck);

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxThunk)));
