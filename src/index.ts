import { Card as BaseCard } from './classes/card';
import { Ability as BaseAbility } from './classes/ability';
import { AncientAbility as BaseAncientAbility } from './classes/ancientAbility';
import { Attack as BaseAttack } from './classes/attack';
import { Set as BaseSet } from './classes/set';
import { SubType as BaseSubType } from './classes/subType';
import { SuperType as BaseSuperType } from './classes/superType';
import { Type as BaseType } from './classes/type';

import { IAttack as BaseIAttack } from './interfaces/attack';
import { IAncientAbility as BaseIAncientAbility } from './interfaces/ancientAbility';
import { IAbility as BaseIAbility } from './interfaces/ability';
import { IQuery as BaseIQuery } from './interfaces/query';
import { ISet as BaseISet } from './interfaces/set';
import { ISuperType as BaseISuperType } from './interfaces/superType';
import { ISubType as BaseISubType } from './interfaces/subType';
import { IType as BaseIType } from './interfaces/type';

export namespace PokemonTCG {
  export type IAttack = BaseIAttack;
  export type IAncientAbility = BaseIAncientAbility;
  export type IAbility = BaseIAbility;
  export type IQuery = BaseIQuery;
  export type ISet = BaseISet;
  export type ISuperType = BaseISuperType;
  export type ISubType = BaseISubType;
  export type IType = BaseIType;

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