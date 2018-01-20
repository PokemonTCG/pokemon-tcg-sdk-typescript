import { ISuperType } from '../interfaces/superType';
import { QueryBuilder } from '../queryBuilder';

export class SuperType implements ISuperType {
  types: string[];

  constructor () {}

  resource(): string {
    return 'supertypes';
  }

  static all(): Promise<SuperType[]> {
    return QueryBuilder.all(this)
      .then(response => {
        return response;
      });
  }
}