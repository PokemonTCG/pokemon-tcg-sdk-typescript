import { ISubType } from '../interfaces/subType';
import { QueryBuilder } from '../queryBuilder';

export class SubType implements ISubType {
  type: string;

  constructor() {}

  resource(): string {
    return 'subtypes';
  }

  static all(): Promise<SubType[]> {
    return QueryBuilder.all(this)
      .then(response => {
        return response;
      });
  }
  
}