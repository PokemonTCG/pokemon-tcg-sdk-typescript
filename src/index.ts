import { Card as BaseCard } from './classes/card';
import { Ability as BaseAbility } from './classes/ability';
import { Attack as BaseAttack } from './classes/attack';
import { Set as BaseSet } from './classes/set';
import { Type as BaseType } from './classes/type';

export namespace PokemonTCG {
  export interface IQuery {
    name: string;
    value: string | number;
  }

  export const Card = BaseCard;
  export type Card = BaseCard;

  export const Ability = BaseAbility;
  export type Ability = BaseAbility;

  export const Attack = BaseAttack;
  export type Attack = BaseAttack;

  export const Set = BaseSet;
  export type Set = BaseSet;

  export const Type = BaseType;
  export type Type = BaseType;
}