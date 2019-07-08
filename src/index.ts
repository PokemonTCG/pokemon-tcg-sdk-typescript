import { Card as BaseCard } from './classes/card';
import { Meta as BaseMeta } from './classes/meta';
import { Set as BaseSet } from './classes/set';

export namespace PokemonTCG {
  export const Card = BaseCard;
  export type Card = BaseCard;

  export const Meta = BaseMeta;
  export type Meta = BaseMeta;

  export const Set = BaseSet;
  export type Set = BaseSet;

  export interface IAbility {
    name: string;
    text: string;
    type: string;
  }

  export interface IAttack {
    convertedEnergyCost: string;
    cost: string[];
    damage: string;
    name: string;
    text: string;
  }

  export interface IQuery {
    name: string;
    value: string | number;
  }

  export interface IResistance {
    type: string;
    value: string;
  }

  export interface IWeakness {
    type: string;
    value: string;
  }
}