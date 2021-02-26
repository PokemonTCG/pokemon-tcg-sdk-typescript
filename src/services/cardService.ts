import { Query } from "../interfaces/query";
import { APIService } from "../interfaces/apiService";
import { Card } from "../interfaces/card";
import { Client } from "../client";

export class CardService implements APIService<Card> {
    async find(id: string): Promise<Card[]> {
        const response: Card[] = await Client.get('cards', id);
        return response;
    };

    async all(): Promise<Card[]> {
        const params: Query[] = [{
            name: 'pageSize',
            value: 250,
        }];

        const response: Card[] = await Client.get('cards', params);
        return response;
    };

   async where(params: Query[]): Promise<Card[]> {
        const response: Card[] = await Client.get('cards', params);
        return response;
    };
}