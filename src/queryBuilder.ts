import { Client } from './client';
import { Card } from "./classes/card";
import { Set } from "./classes/set";
import { IQuery } from './interfaces/query';

export class QueryBuilder {
    static all<T extends Card | Set>(type: (new () => T)): Promise<T[]> {
        let t = new type();
        let params: IQuery[] = [{
            name: 'pageSize',
            value: 1000
        }];

        return Client.get(t.resource(), params);
    }

    static find<T extends Card | Set>(type: (new () => T), id: string): Promise<T> {
        let t = new type();

        return Client.get(t.resource(), id);
    }

    static where<T extends Card | Set>(type: (new () => T), params: IQuery[]): Promise<T[]> {
        let t = new type();

        return Client.get(t.resource(), params);
    }
}