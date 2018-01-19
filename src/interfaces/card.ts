import { IAbility } from '../interfaces/ability';
import { IAttack } from '../interfaces/attack';
import { ISet } from '../interfaces/set';
import { ISubType } from '../interfaces/subType';
import { ISuperType } from '../interfaces/superType';
import { IType } from '../interfaces/type';

export interface ICard {
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

  resource(): string;
  find(id: number): ICard;
  all(): ICard[];
  where(args: object): ICard;
}