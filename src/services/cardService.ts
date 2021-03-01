import { Query } from "../interfaces/query";
import { APIService } from "../interfaces/apiService";
import { Card } from "../interfaces/card";
import { Client } from "../client";

export class CardService implements APIService<Card> {
    async find(id: string): Promise<Card[]> {
        const client: Client = Client.getInstance();
        const response: Card[] = await client.get<Card[]>('cards', id);
        return response;
    };

    async all(): Promise<Card[]> {
        const params: Query[] = [{
            name: 'pageSize',
            value: 250,
        }];

        const client: Client = Client.getInstance();
        const response: Card[] = await client.get<Card[]>('cards', params);
        return response;
    };

   async where(params: Query[]): Promise<Card[]> {
       const client: Client = Client.getInstance();
       const response: Card[] = await client.get<Card[]>('cards', params);
       return response;
    };
}