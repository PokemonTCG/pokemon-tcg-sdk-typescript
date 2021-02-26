import * as axios from 'axios';
import { Query } from './interfaces/query';

export class Client {
  private static readonly API_BASE_URL: string = 'https://api.pokemontcg.io';
  private static readonly API_VERSION: string = '2';
  private static readonly API_URL: string = `${Client.API_BASE_URL}/v${Client.API_VERSION}`;

  static async get(resource: string, params?: Query[] | string): Promise<any> {
    let url: string = `${this.API_URL}/${resource}`;
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

  private static paramsToQuery(params?: Query[]): string {
    let query: string = '';

    if (params) {
      params.map((q: Query) => {
        query += `${q.name}=${encodeURIComponent(q.value.toString())}`.concat('&');
      });
    }

    return query;
  }
}