import * as axios from 'axios';
import { Query } from './interfaces/query';

export class Client {
  private readonly POKEMONTCG_API_BASE_URL: string = 'https://api.pokemontcg.io';
  private readonly POKEMONTCG_API_VERSION: string = '2';
  private readonly POKEMONTCG_API_URL: string = `${this.POKEMONTCG_API_BASE_URL}/v${this.POKEMONTCG_API_VERSION}`;
  private readonly POKEMONTCG_API_KEY?: string = process.env.POKEMONTCG_API_KEY;

  private static instance: Client;

  private constructor() {}

  public static getInstance() {
      if (!Client.instance) {
          Client.instance = new Client();
      }

      return Client.instance;
  }

  async get<T>(resource: string, params?: Query[] | string): Promise<T> {
    let url: string = `${this.POKEMONTCG_API_URL}/${resource}`;
    let headers = {
        'Content-Type': 'application/json'
    }

    if (this.POKEMONTCG_API_KEY) {
        headers['X-Api-Key'] = this.POKEMONTCG_API_KEY;
    }

    const config: axios.AxiosRequestConfig = {
      headers
    };

    if(typeof params === 'string') url += `/${params}`;
    else url += `?${this.paramsToQuery(params)}`;

    return axios.default.get<T>(url, config)
      .then(response => {
        return response.data[Object.keys(response.data)[0]];
      })
      .catch(error => Promise.reject(error));
  }

  private paramsToQuery(params?: Query[]): string {
    let query: string = '';

    if (params) {
      params.map((q: Query) => {
        query += `${q.name}=${encodeURIComponent(q.value.toString())}`.concat('&');
      });
    }

    return query;
  }
}