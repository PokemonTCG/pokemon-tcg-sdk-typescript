import { Query } from "../interfaces/query";
import { APIService } from "../interfaces/apiService";
import { Set } from "../interfaces/set";
import { Client } from "../client";

export class SetService implements APIService<Set> {
    async find(id: string): Promise<Set[]> {
        const response: Set[] = await Client.get('sets', id);
        return response;
    };

    async all(): Promise<Set[]> {
        const params: Query[] = [{
            name: 'pageSize',
            value: 250,
        }];

        const response: Set[] = await Client.get('sets', params);
        return response;
    };

    async where(params: Query[]): Promise<Set[]> {
        const response: Set[] = await Client.get('sets', params);
        return response;
    };
}