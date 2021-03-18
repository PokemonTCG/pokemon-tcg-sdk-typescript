import { Parameter } from '../interfaces/parameter';
import { Set } from '../interfaces/set';
import { Client } from '../client';

export async function findSetByID(id: string): Promise<Set> {
    const client: Client = Client.getInstance();
    const response: Set = await client.get<Set>('sets', id);
    return response;
}

export async function findSetsByQueries(params: Parameter): Promise<Set[]> {
    const client: Client = Client.getInstance();
    const response: Set[] = await client.get<Set[]>('sets', params);
    return response;
}

export async function getAllSets(): Promise<Set[]> {
    const params: Parameter = { pageSize: 250 };

    const client: Client = Client.getInstance();
    const response: Set[] = await client.get<Set[]>('sets', params);
    return response;
}
