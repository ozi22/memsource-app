import { IAction } from '../redux.interface';
import { AppState } from '../store';
import { IProject, IProjects } from '../../services/projects/projects.interface';

export interface IProjectsDuckState {
  projects: IProjects | {};
  detail: IProject | {};
}

export interface IProjectsDuck {
  name: string;
  reducer: (state: IProjectsDuckState, action: IAction) => IProjectsDuckState;
  getOwnState: (state: AppState) => IProjectsDuckState;
  getProjects: (state: AppState) => IProjects;
  getDetail: (state: AppState) => IProject;
  setProjects: (data: IProjects) => IAction;
  setDetail: (data: IProject) => IAction;
  clearDetail: () => IAction;
}
