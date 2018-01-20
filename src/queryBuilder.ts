import { Client } from './client';
import { Card } from "./classes/card";
import { Set } from "./classes/set";
import { Type } from "./classes/type";
import { SubType } from "./classes/subType";
import { SuperType } from "./classes/superType";
import { IQuery } from './interfaces/query';
import { AxiosResponse } from 'axios';

export class QueryBuilder {
  static all<T extends Card | Set | Type | SuperType | SubType>(type: (new() => T)): Promise<T[]> {
    let t = new type();
    let params: IQuery[] = [{
      name: 'pageSize',
      value: 1000
    }];

    return this.returnResponse(t.resource(), params);     
  }
  
  static find<T extends Card | Set | Type | SuperType | SubType>(type: (new() => T), id: string): Promise<T> {
    let t = new type();
    let params: IQuery[] = [{
      name: 'id',
      value: id
    }];

    return this.returnResponse(t.resource(), params);
  }

  static where<T extends Card | Set | Type | SuperType | SubType>(type: (new() => T), params: IQuery[]): Promise<T[]> {
    let t = new type();
    
    return this.returnResponse(t.resource(), params);
  }

  private static returnResponse(resource: string, params: IQuery[]): Promise<any> {
    return Client.get(resource, params)
      .then(response => {
        return response;
      })
      .catch(error => console.error(error));
  }
}