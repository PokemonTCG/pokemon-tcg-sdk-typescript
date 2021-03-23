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

  /**
   * @deprecated `Set.find` is renamed to `findSetById` in version 2. See the **[migration guide](https://github.com/acupoftee/pokemon-tcg-sdk-typescript/blob/master/MIGRATING.md)** for more info.
   */
  static async find(id: string): Promise<Set> {
    return QueryBuilder.find(this, id)
      .then(response => {
        return response;
      })
      .catch(error => Promise.reject(error));
  }

  /**
   * @deprecated `Set.all` is renamed to `getAllSets` in version 2. See the **[migration guide](https://github.com/acupoftee/pokemon-tcg-sdk-typescript/blob/master/MIGRATING.md)** for more info.
   */
  static async all(): Promise<Set[]> {
    return QueryBuilder.all(this)
      .then(response => {
        return response;
      })
      .catch(error => Promise.reject(error));
  }

  /**
   * @deprecated `Set.where` is renamed to `findSetsByQueries` in version 2. See the **[migration guide](https://github.com/acupoftee/pokemon-tcg-sdk-typescript/blob/master/MIGRATING.md)** for more info.
   */
  static async where(params: IQuery[]): Promise<Set[]> {
    return QueryBuilder.where(this, params)
      .then(response => {
        return response;
      })
      .catch(error => Promise.reject(error));
  }
}
