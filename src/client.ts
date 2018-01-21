import * as axios from 'axios';
import { PokemonTCG } from './sdk';
import { IQuery } from './interfaces/query';
import { ICard } from './interfaces/card';
import { IType } from './interfaces/type';
import { ISuperType } from './interfaces/superType';
import { ISubType } from './interfaces/subType';
import { ISet } from './interfaces/set';

export class Client {
  static apiUrl: string = `${PokemonTCG.API_URL}/v${PokemonTCG.version}`;

  static get(resource: string, params?: IQuery[]): Promise<any> {
    let url: string = `${this.apiUrl}/${resource}`;
    let config: axios.AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    // This is needed because the /sets endpoint doesn't take
    // an id as a parameter so we need to append it to the url
    url += this.checkForId(resource, params);

    return axios.default.get<any>(`${url}?${this.paramsToQuery(params)}`, config)
      .then(response => {
        return response.data[Object.keys(response.data)[0]];
      })
  }

  private static checkForId(resource: string, params?: IQuery[]): string {
    let url: string = '';

    if (params) {
      params.map(param => {
        if (resource === 'sets' && param.name === 'id') {
          url = `/${param.value}`;
        }
      });
    }

    return url;
  }

  private static paramsToQuery(params?: IQuery[]): string {
    let query: string = '';

    if (params) {
      params.map((q: IQuery) => {
        query += `${q.name}=${encodeURI(q.value.toString())}`.concat('&');
      });
    }

    return query;
  }
}