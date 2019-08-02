import { Client } from './client';
import { Card } from "./classes/card";
import { Set } from "./classes/set";
import { IQuery } from './interfaces/query';
import { AxiosResponse } from 'axios';

export class QueryBuilder {
    static all<T extends Card | Set>(type: (new () => T)): Promise<T[]> {
        let t = new type();
        let params: IQuery[] = [{
            name: 'pageSize',
            value: 1000
        }];

        return Client.get(t.resource(), params).catch(error => console.error(error));
    }

    static find<T extends Card | Set>(type: (new () => T), id: string): Promise<T> {
        let t = new type();

        return Client.get(t.resource(), id).catch(error => console.error(error));
    }

    static where<T extends Card | Set>(type: (new () => T), params: IQuery[]): Promise<T[]> {
        let t = new type();

        return Client.get(t.resource(), params).catch(error => console.error(error));
    }
}