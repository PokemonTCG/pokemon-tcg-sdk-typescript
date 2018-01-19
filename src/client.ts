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

  static get(resource: string, params?: IQuery[]): axios.AxiosPromise<any> {
    let config: axios.AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    return axios.default.get<any>(`${Client.apiUrl}/${resource}?${Client.paramsToQuery(params)}`, config);
  }

  private static paramsToQuery(params?: IQuery[]): string {
    let query: string = '';

    if (params !== null) {
      params.map((q: IQuery) => {
        query += `${q.name}=${encodeURI(q.value)}`.concat('&');
      });
    }

    return query;
  }
}