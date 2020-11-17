import { ISet } from '../interfaces/set';
import { IQuery } from '../interfaces/query';
import { QueryBuilder } from '../queryBuilder';

export class Set implements ISet {
  code: string;
  expandedLegal: boolean;
  logoUrl: string;
  name: string;
  ptcgoCode: string;
  releaseDate: string;
  series: string;
  standardLegal: boolean;
  symbolUrl: string;
  totalCards: number;
  updatedAt: string;
  updatedSince: string;

  resource(): string {
    return 'sets';
  }

  static async find(id: string): Promise<Set> {
    return QueryBuilder.find(this, id)
      .then(response => {
        return response;
      })
      .catch(error => Promise.reject(error));
  }

  static async all(): Promise<Set[]> {
    return QueryBuilder.all(this)
      .then(response => {
        return response;
      })
      .catch(error => Promise.reject(error));
  }

  static async where(params: IQuery[]): Promise<Set[]> {
    return QueryBuilder.where(this, params)
      .then(response => {
        return response;
      })
      .catch(error => Promise.reject(error));
  }
}