import { AxiosPromise } from 'axios';
import coreApiService from '../core/coreApi.service';
import { IProject, IProjects } from './projects.interface';

class ProjectsService {
  public static getProjects = (token: string): AxiosPromise<IProjects> => {
    return coreApiService.get(`projects`, { token });
  };

  public static getProjectsDueInHours = (token: string, dueInHours: string | number): AxiosPromise<IProjects> => {
    return coreApiService.get(`projects`, { token, dueInHours });
  };

  public static getDetail = (token: string, id: string): AxiosPromise<IProject> => {
    return coreApiService.get(`projects/${id}`, { token });
  };
}

export default ProjectsService;
