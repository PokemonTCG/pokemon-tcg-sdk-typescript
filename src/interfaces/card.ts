import { Ability } from './ability';
import { AncientTrait } from './ancientTrait';
import { Attack } from './attack';
import { Resistance } from './resistance';
import { Weakness } from './weakness';
import { ICardImage } from './image';
import { ILegality } from './legality';
import { Set } from './set';
import { ITCGPlayer } from './tcgplayer';

export interface Card {
  abilities: Ability[];
  artist: string;
  ancientTrait?: AncientTrait;
  attacks: Attack[];
  convertedRetreatCost: number;
  evolvesFrom: string;
  flavorText: string;
  hp: string;
  id: string;
  images: ICardImage;
  legalities: ILegality;
  name: string;
  nationalPokedexNumbers: number[];
  number: string;
  rarity: string;
  resistances: Resistance[];
  retreatCost: string[];
  rules: string[];
  set: Set;
  subtypes: string[];
  supertype: string;
  tcgplayer: ITCGPlayer | undefined;
  types: string[];
  weaknesses: Weakness[];
}