import { Ability } from './ability';
import { AncientTrait } from './ancientTrait';
import { Attack } from './attack';
import { Resistance, Weakness } from './stats';
import { CardImage } from './image';
import { ILegality } from './legality';
import { Set } from './set';
import { TCGPlayer } from './tcgplayer';

export interface Card {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  hp?: string;
  types?: string[];
  evolesFrom?: string;
  evolvesTo?: string[];
  rules?: string[];
  ancientTrait?: AncientTrait;
  abilities?: Ability[];
  attacks?: Attack[];
  weaknesses?: Weakness[];
  resistances?: Resistance[];
  retreatCost?: string[];
  convertedRetreatCost?: number;
  set: Set;
  number: string;
  artist?: string;
  rarity: string;
  flavorText?: string;
  nationalPokedexNumbers?: number[];
  legalities: ILegality;
  images: CardImage;
  tcgplayer?: TCGPlayer;
}