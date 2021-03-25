import { IAbility } from "../interfaces/ability";
import { IAncientTrait } from "./ancientTrait";
import { IAttack } from "../interfaces/attack";
import { IResistance } from "../interfaces/resistance";
import { IWeakness } from "../interfaces/weakness";
import { ICardImage } from "./image";
import { ILegality } from "./legality";
import { ISet } from "./set";
import { ITCGPlayer } from "./tcgplayer";

export interface ICard {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  hp?: string;
  types?: string[];
  evolvesFrom?: string;
  evolvesTo?: string[];
  rules?: string[];
  ancientTrait?: IAncientTrait;
  abilities?: IAbility[];
  attacks?: IAttack[];
  weaknesses?: IWeakness[];
  resistances?: IResistance[];
  retreatCost?: string[];
  convertedRetreatCost?: number;
  set: ISet;
  number: string;
  artist?: string;
  rarity: string;
  flavorText?: string;
  nationalPokedexNumbers?: number[];
  legalities: ILegality;
  images: ICardImage;
  tcgplayer?: ITCGPlayer;
}
