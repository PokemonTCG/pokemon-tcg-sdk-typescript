import { Query } from "../interfaces/query";
import { Set } from "../interfaces/set";
import { Client } from "../client";

export default {
    findSetByID: async function (id: string): Promise<Set> {
        const client: Client = Client.getInstance();
        const response: Set = await client.get<Set>('sets', id);
        return response;
    },

    getAllSets: async function (): Promise<Set[]> {
        const params: Query[] = [{
            name: 'pageSize',
            value: 250,
        }];

        const client: Client = Client.getInstance();
        const response: Set[] = await client.get<Set[]>('sets', params);
        return response;
    },

    findSetByQueries: async function(params: Query[]): Promise<Set[]> {
        const client: Client = Client.getInstance();
        const response: Set[] = await client.get<Set[]>('sets', params);
        return response;
    }
}