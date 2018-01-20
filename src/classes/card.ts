import { ICard } from '../interfaces/card'; 
import { ISubType } from '../interfaces/subType';
import { ISuperType } from '../interfaces/superType';
import { IAbility } from '../interfaces/ability';
import { ISet } from '../interfaces/set';
import { IType } from '../interfaces/type';
import { IAttack } from '../interfaces/attack';
import { QueryBuilder } from '../queryBuilder';
import { IQuery } from '../interfaces/query';

export class Card implements ICard {
  id: number;
  name: string;
  imageUrl: string;
  imageUrlHighRes: string;
  subType: ISubType;
  superType: ISuperType;
  ability: IAbility;
  hp: number;
  number: number;
  artist: string;
  rarity: string;
  series: string;
  set: ISet;
  setCode: string;
  retreatCost: string;
  text: string;
  types: IType[];
  attacks: IAttack[];
  weaknesses: string[];
  resistances: string[];
  nationalPokedexNumber: number;
  ancientTrait: string;
  evolvesFrom: string;

  constructor() {}
  
  resource(): string {
    return 'cards';
  }

  static find(id: string): Promise<Card> {
    return QueryBuilder.find(this, id)
      .then(response => {
        return response;
      });
  }

  static all(): Promise<Card[]> {
    return QueryBuilder.all(this)
      .then(response => {
        return response;
      });
  }

  static where(params: IQuery[]): Promise<Card[]> {
    return QueryBuilder.where(this, params)
      .then(response => {
        return response;
      });
  }
}