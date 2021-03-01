import { Query } from "../interfaces/query";
import { APIService } from "../interfaces/apiService";
import { Set } from "../interfaces/set";
import { Client } from "../client";

export class SetService implements APIService<Set> {
    async find(id: string): Promise<Set[]> {
        const client: Client = Client.getInstance();
        const response: Set[] = await client.get<Set[]>('sets', id);
        return response;
    };

    async all(): Promise<Set[]> {
        const params: Query[] = [{
            name: 'pageSize',
            value: 250,
        }];

        const client: Client = Client.getInstance();
        const response: Set[] = await client.get<Set[]>('sets', params);
        return response;
    };

    async where(params: Query[]): Promise<Set[]> {
        const client: Client = Client.getInstance();
        const response: Set[] = await client.get<Set[]>('sets', params);
        return response;
    };
}