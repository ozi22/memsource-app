import { IAction } from '../redux.interface';
import { AppState } from '../store';

export interface IUIDuckState {
  loading: number;
}

export interface IUIDuck {
  name: string;
  reducer: (state: IUIDuckState, action: IAction) => any;
  setLoading: (loadingWeight: number) => IAction;
  isLoading: (state: AppState) => boolean;
}
