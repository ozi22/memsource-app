import { createActionTypes } from '../create-action-types';
import { IAction } from '../redux.interface';
import { IUIDuckState, IUIDuck } from './ui.duck.interface';

const UIDuck: any = {
  name: 'UI'
};

const initialState: IUIDuckState = {
  loading: 0,
};

const actionTypes: any = createActionTypes(
  {
    add_loading: 'add_loading',
  },
  UIDuck.name
);

UIDuck.reducer = (state: IUIDuckState = initialState, action: IAction) => {
  switch (action.type) {
    case actionTypes.add_loading:
      return {
        ...state,
        loading: Math.max(0, action.payload + state.loading)
      };
    default:
      return state;
  }
};

UIDuck.setLoading = (loadingWeight: number = 0): IAction => ({
  type: actionTypes.add_loading,
  payload: loadingWeight
});


UIDuck.getOwnState = (state: any): IUIDuckState => state[UIDuck.name] || initialState;
UIDuck.isLoading = (state: any): boolean => !!UIDuck.getOwnState(state).loading;

export default UIDuck as IUIDuck;
