import * as axios from 'axios';
import { API_URL, API_VERSION } from './sdk';
import { IQuery } from './interfaces/query';

export class Client {
  static apiUrl: string = `${API_URL}/v${API_VERSION}`;

  static async get(resource: string, params?: IQuery[] | string): Promise<any> {
    let url: string = `${this.apiUrl}/${resource}`;
    const config: axios.AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    if(typeof params === 'string') url += `/${params}`;
    else url += `?${this.paramsToQuery(params)}`;

    return axios.default.get<any>(url, config)
      .then(response => {
        return response.data[Object.keys(response.data)[0]];
      })
      .catch(error => Promise.reject(error));
  }

  private static paramsToQuery(params?: IQuery[]): string {
    let query: string = '';

    if (params) {
      params.map((q: IQuery) => {
        query += `${q.name}=${encodeURIComponent(q.value.toString())}`.concat('&');
      });
    }

    return query;
  }
}