import { Card as BaseCard } from './classes/card';
import { Ability as BaseAbility } from './classes/ability';
import { AncientAbility as BaseAncientAbility } from './classes/ancientAbility';
import { Attack as BaseAttack } from './classes/attack';
import { Set as BaseSet } from './classes/set';
import { SubType as BaseSubType } from './classes/subType';
import { SuperType as BaseSuperType } from './classes/superType';
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

  export const AncientAbility = BaseAncientAbility;
  export type AncientAbility = BaseAncientAbility;

  export const Attack = BaseAttack;
  export type Attack = BaseAttack;

  export const Set = BaseSet;
  export type Set = BaseSet;

  export const SubType = BaseSubType;
  export type SubType = BaseSubType;

  export const SuperType = BaseSuperType;
  export type SuperType = BaseSuperType;

  export const Type = BaseType;
  export type Type = BaseType;
}