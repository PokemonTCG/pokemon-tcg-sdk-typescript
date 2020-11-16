import { IAbility } from '../interfaces/ability';
import { IAncientTrait } from './ancientTrait';
import { IAttack } from '../interfaces/attack';
import { IResistance } from '../interfaces/resistance';
import { IWeakness } from '../interfaces/weakness';

export interface ICard {
  ability: IAbility;
  ancientTrait?: IAncientTrait;
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
}