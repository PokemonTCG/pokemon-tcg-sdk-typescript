import { Query } from "../interfaces/query";
import { Card } from "../interfaces/card";
import { Client } from "../client";

export async function findCardByID(id: string): Promise<Card> {
    const client: Client = Client.getInstance();
    const response: Card = await client.get<Card>('cards', id);
    return response;
}

export async function findCardsByQueries(params: Query[]): Promise<Card[]> {
    const client: Client = Client.getInstance();
    const response: Card[] = await client.get<Card[]>('cards', params);
    return response;
}

export async function getAllCards(): Promise<Card[]> {
    const param: string = 'pageSize:250'

    const client: Client = Client.getInstance();
    const response: Card[] = await client.get<Card[]>('cards', param);
    return response;
}