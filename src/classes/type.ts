import { IType } from '../interfaces/type';
import { QueryBuilder } from '../queryBuilder';

export class Type implements IType {
  type: string;

  constructor() {}

  resource(): string {
    return 'types';
  }

  static all(): Promise<Type[]> {
    return QueryBuilder.all(this)
      .then(response => {
        return response;
      });
  }
}