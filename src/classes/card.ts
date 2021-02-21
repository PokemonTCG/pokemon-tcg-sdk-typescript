import { IAbility } from '../interfaces/ability';
import { IAncientTrait } from '../interfaces/ancientTrait';
import { IAttack } from '../interfaces/attack';
import { ICard } from '../interfaces/card';
import { ICardImage } from '../interfaces/image';
import { ILegality } from '../interfaces/legality';
import { IQuery } from '../interfaces/query';
import { IResistance } from '../interfaces/resistance';
import { ISet } from '../interfaces/set';
import { ITCGPlayer } from '../interfaces/tcgplayer';
import { IWeakness } from '../interfaces/weakness';
import { QueryBuilder } from '../queryBuilder';

export class Card implements ICard {
  abilities: IAbility[];
  artist: string;
  ancientTrait?: IAncientTrait;
  attacks: IAttack[];
  convertedRetreatCost: number;
  evolvesFrom: string;
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

  resource(): string {
    return 'cards';
  }

  static async find(id: string): Promise<Card> {
    return QueryBuilder.find(this, id)
      .then(response => {
        return response;
      })
      .catch(error => Promise.reject(error));
  }

  static async all(): Promise<Card[]> {
    return QueryBuilder.all(this)
      .then(response => {
        return response;
      })
      .catch(error => Promise.reject(error));
  }

  static async where(params: IQuery[]): Promise<Card[]> {
    return QueryBuilder.where(this, params)
      .then(response => {
        return response;
      })
      .catch(error => Promise.reject(error));
  }
}