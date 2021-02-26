import { Query } from "./query";

export interface APIService {
    find: <T>(id: string) => Promise<T[]>;
    all: <T>() => Promise<T[]>;
    where: <T>(params: Query[]) => Promise<T[]>;
}