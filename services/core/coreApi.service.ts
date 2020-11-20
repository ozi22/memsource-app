import axios, { AxiosResponse } from 'axios';
import { StringMapping } from '../../types/types';

class CoreApiService {
  API = 'https://cloud.memsource.com/web/api2/v1';

  async get(url: string, params = {}, headers = {}): Promise<AxiosResponse> {
    return await axios.request({
      method: 'get',
      url: `${this.API}/${url}`,
      headers,
      params
    });
  }

  async post(url: string, data: StringMapping<any>, headers = {}): Promise<AxiosResponse<any>> {
    return await axios.request({
      method: 'post',
      url: `${this.API}/${url}`,
      data,
      headers
    });
  }
}

export default new CoreApiService();
