import { IAbility } from '../interfaces/ability';
import { IAttack } from '../interfaces/attack';
import { ICard } from '../interfaces/card';
import { IQuery } from '../interfaces/query';
import { IResistance } from '../interfaces/resistance';
import { IWeakness } from '../interfaces/weakness';
import { QueryBuilder } from '../queryBuilder';

export class Card implements ICard {
  ability: IAbility;
  artist: string;
  attacks: IAttack[];
  convertedRetreatCost: number;
  evolvesFrom: string;
  hp: string;
  id: string;
  imageUrl: string;
  imageUrlHiRes: string;
  name: string;
  nationalPokedexNumber: number;
  number: string;
  rarity: string;
  resistances: IResistance[];
  retreatCost: string[];
  series: string;
  set: string;
  setCode: string;
  subtype: string;
  supertype: string;
  text: string[];
  types: string[];
  weaknesses: IWeakness[];

  resource(): string {
    return 'cards';
  }

  static async find(id: string): Promise<Card> {
    return QueryBuilder.find(this, id)
      .then(response => {
        return response;
      })
      .catch(error => Promise.reject(error));
  }

  static async all(): Promise<Card[]> {
    return QueryBuilder.all(this)
      .then(response => {
        return response;
      })
      .catch(error => Promise.reject(error));
  }

  static async where(params: IQuery[]): Promise<Card[]> {
    return QueryBuilder.where(this, params)
      .then(response => {
        return response;
      })
      .catch(error => Promise.reject(error));
  }
}