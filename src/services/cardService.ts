import { Parameter } from '../interfaces/parameter';
import { Card } from '../interfaces/card';
import { Type } from '../enums/type';
import { Supertype } from '../enums/supertype';
import { Subtype } from '../enums/subtype';
import { Rarity } from '../enums/rarity';
import { Client } from '../client';

export async function findCardByID(id: string): Promise<Card> {
    const client: Client = Client.getInstance();
    const response: Card = await client.get<Card>('cards', id);
    return response;
}

export async function findCardsByQueries(params: Parameter): Promise<Card[]> {
    const client: Client = Client.getInstance();
    const response: Card[] = await client.get<Card[]>('cards', params);
    return response;
}

export async function getAllCards(): Promise<Card[]> {
    const params: Parameter = { pageSize: 250 };
    const client: Client = Client.getInstance();
    const response: Card[] = await client.get<Card[]>('cards', params);
    return response;
}

export async function getTypes(): Promise<Type[]> {
    const client: Client = Client.getInstance();

    const response: Type[] = await client.get<Type[]>('types');
    return response;
}

export async function getSupertypes(): Promise<Supertype[]> {
    const client: Client = Client.getInstance();

    const response: Supertype[] = await client.get<Supertype[]>('supertypes');
    return response;
}

export async function getSubtypes(): Promise<Subtype[]> {
    const client: Client = Client.getInstance();

    const response: Subtype[] = await client.get<Subtype[]>('subtypes');
    return response;
}

export async function getRarities(): Promise<Rarity[]> {
    const client: Client = Client.getInstance();

    const response: Rarity[] = await client.get<Rarity[]>('rarities');
    return response;
}
