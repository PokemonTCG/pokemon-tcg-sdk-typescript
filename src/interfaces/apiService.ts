import { Query } from "./query";

export interface APIService<T> {
    find: (id: string) => Promise<T[]>;
    all: () => Promise<T[]>;
    where: (params: Query[]) => Promise<T[]>;
}