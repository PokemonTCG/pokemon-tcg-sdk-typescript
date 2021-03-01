import { Query } from "../interfaces/query";
import { Card } from "../interfaces/card";
import { Client } from "../client";

export default {
    findCardByID: async function (id: string): Promise<Card> {
        const client: Client = Client.getInstance();
        const response: Card = await client.get<Card>('cards', id);
        return response;
    },

    getAllCards: async function (): Promise<Card[]> {
        const params: Query[] = [{
            name: 'pageSize',
            value: 250,
        }];

        const client: Client = Client.getInstance();
        const response: Card[] = await client.get<Card[]>('cards', params);
        return response;
    },

    findCardByQueries: async function(params: Query[]): Promise<Card[]> {
       const client: Client = Client.getInstance();
       const response: Card[] = await client.get<Card[]>('cards', params);
       return response;
    }
}