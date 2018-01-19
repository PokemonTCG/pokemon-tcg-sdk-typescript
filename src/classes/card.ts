import { ICard } from '../interfaces/card'; 
import { ISubType } from '../interfaces/subType';
import { ISuperType } from '../interfaces/superType';
import { IAbility } from '../interfaces/ability';
import { ISet } from '../interfaces/set';
import { IType } from '../interfaces/type';
import { IAttack } from '../interfaces/attack';
import { QueryBuilder } from '../queryBuilder';

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
  
  static resource(): string {
    return 'cards';
  }

  find(id: string): Card {
    return QueryBuilder.find<Card>(id);
  }

  all(): ICard[] {
    throw new Error("Method not implemented.");
  }

  where(args: object): ICard {
    throw new Error("Method not implemented.");
  }
}