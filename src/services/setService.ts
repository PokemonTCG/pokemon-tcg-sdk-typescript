import { Query } from '../interfaces/query';
import { Set } from '../interfaces/set';
import { Client } from '../client';

export async function findSetByID(id: string): Promise<Set> {
    const client: Client = Client.getInstance();
    const response: Set = await client.get<Set>('sets', id);
    return response;
}

export async function findSetsByQueries(params: Query[]): Promise<Set[]> {
    const client: Client = Client.getInstance();
    const response: Set[] = await client.get<Set[]>('sets', params);
    return response;
}

export async function getAllSets(): Promise<Set[]> {
    const param = 'pageSize:250';

    const client: Client = Client.getInstance();
    const response: Set[] = await client.get<Set[]>('sets', param);
    return response;
}
