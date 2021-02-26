import { IAbility } from './ability';
import { IAncientTrait } from './ancientTrait';
import { IAttack } from './attack';
import { IResistance } from './resistance';
import { IWeakness } from './weakness';
import { ICardImage } from './image';
import { ILegality } from './legality';
import { ISet } from './set';
import { ITCGPlayer } from './tcgplayer';

export interface ICard {
  abilities: IAbility[];
  artist: string;
  ancientTrait?: IAncientTrait;
  attacks: IAttack[];
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
  resistances: IResistance[];
  retreatCost: string[];
  rules: string[];
  set: ISet;
  subtypes: string[];
  supertype: string;
  tcgplayer: ITCGPlayer | undefined;
  types: string[];
  weaknesses: IWeakness[];
}