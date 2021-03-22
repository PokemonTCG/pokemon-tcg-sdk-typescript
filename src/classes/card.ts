import { IAbility } from "../interfaces/ability";
import { IAncientTrait } from "../interfaces/ancientTrait";
import { IAttack } from "../interfaces/attack";
import { ICard } from "../interfaces/card";
import { ICardImage } from "../interfaces/image";
import { ILegality } from "../interfaces/legality";
import { IQuery } from "../interfaces/query";
import { IResistance } from "../interfaces/resistance";
import { ISet } from "../interfaces/set";
import { ITCGPlayer } from "../interfaces/tcgplayer";
import { IWeakness } from "../interfaces/weakness";
import { QueryBuilder } from "../queryBuilder";

export class Card implements ICard {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  hp?: string;
  types?: string[];
  evolesFrom?: string;
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

  resource(): string {
    return "cards";
  }

  static async find(id: string): Promise<Card> {
    return QueryBuilder.find(this, id)
      .then((response) => {
        return response;
      })
      .catch((error) => Promise.reject(error));
  }

  static async all(): Promise<Card[]> {
    return QueryBuilder.all(this)
      .then((response) => {
        return response;
      })
      .catch((error) => Promise.reject(error));
  }

  static async where(params: IQuery[]): Promise<Card[]> {
    return QueryBuilder.where(this, params)
      .then((response) => {
        return response;
      })
      .catch((error) => Promise.reject(error));
  }
}
