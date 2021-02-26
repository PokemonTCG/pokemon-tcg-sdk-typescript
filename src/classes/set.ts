import { ISet } from '../interfaces/set';
import { IQuery } from '../interfaces/query';
import { QueryBuilder } from '../queryBuilder';
import { ILegality } from '../interfaces/legality';
import { ISetImage } from '../interfaces/image';

export class Set implements ISet {
  id: string;
  images: ISetImage;
  legalities: ILegality;
  name:  string;
  printedTotal: number;
  ptcgoCode: string;
  releaseDate: string;
  series:  string;
  total: number;
  updatedAt: string;

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