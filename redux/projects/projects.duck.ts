import { createActionTypes } from '../create-action-types';
import { IAction } from '../redux.interface';
import { AppState } from '../store';
import { IProjectsDuck, IProjectsDuckState } from './projects.duck.interface';
import { IProject, IProjects } from '../../services/projects/projects.interface';

const ProjectsDuck: any = {
  name: 'PROJECTS'
};

const initialState: IProjectsDuckState = {
  projects: {},
  detail: {}
};

const actionTypes: any = createActionTypes(
  {
    set_projects: 'set_projects',
    set_detail: 'set_detail',
    clear_detail: 'clear_detail'
  },
  ProjectsDuck.name
);

ProjectsDuck.reducer = (state: IProjectsDuckState = initialState, action: IAction) => {
  switch (action.type) {
    case actionTypes.set_projects:
      return {
        ...state,
        projects: { ...action.payload }
      };
    case actionTypes.set_detail:
      return {
        ...state,
        detail: { ...action.payload }
      };
    case actionTypes.clear_detail:
      return {
        ...state,
        detail: {}
      }
    default:
      return state;
  }
};

ProjectsDuck.setProjects = (projects: IProjects) => ({
  type: actionTypes.set_projects,
  payload: projects
});

ProjectsDuck.setDetail = (detail: IProject) => ({
  type: actionTypes.set_detail,
  payload: detail
});

ProjectsDuck.clearDetail = () => ({
  type: actionTypes.clear_detail,
  payload: null
})

ProjectsDuck.getOwnState = (state: AppState): IProjectsDuckState => state[ProjectsDuck.name] || initialState;
ProjectsDuck.getProjects = (state: AppState): IProjectsDuckState => ProjectsDuck.getOwnState(state).projects;
ProjectsDuck.getDetail = (state: AppState): IProjectsDuckState => ProjectsDuck.getOwnState(state).detail;

export default ProjectsDuck as IProjectsDuck;
