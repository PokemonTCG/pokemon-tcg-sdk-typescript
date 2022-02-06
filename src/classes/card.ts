import { IAbility } from "../interfaces/ability";
import { IAncientTrait } from "../interfaces/ancientTrait";
import { IAttack } from "../interfaces/attack";
import { ICard } from "../interfaces/card";
import { ICardImage } from "../interfaces/image";
import { ICardmarket } from "../interfaces/cardmarket";
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
  regulationMark?: string;
  images: ICardImage;
  tcgplayer?: ITCGPlayer;
  cardmarket?: ICardmarket;

  resource(): string {
    return "cards";
  }

  /**
   * @deprecated `Card.find` is renamed to `findCardById` in version 2. See the **[migration guide](https://github.com/acupoftee/pokemon-tcg-sdk-typescript/blob/master/MIGRATING.md)** for more info.
   */
  static async find(id: string): Promise<Card> {
    return QueryBuilder.find(this, id)
      .then((response) => {
        return response;
      })
      .catch((error) => Promise.reject(error));
  }

  /**
   * @deprecated `Card.all` is renamed to `getAllCards` in version 2. See the **[migration guide](https://github.com/acupoftee/pokemon-tcg-sdk-typescript/blob/master/MIGRATING.md)** for more info.
   */
  static async all(): Promise<Card[]> {
    return QueryBuilder.all(this)
      .then((response) => {
        return response;
      })
      .catch((error) => Promise.reject(error));
  }

  /**
   * @deprecated `Card.where` is renamed to `findCardsByQueries` in version 2. See the **[migration guide](https://github.com/acupoftee/pokemon-tcg-sdk-typescript/blob/master/MIGRATING.md)** for more info.
   */
  static async where(params: IQuery[]): Promise<Card[]> {
    return QueryBuilder.where(this, params)
      .then((response) => {
        return response;
      })
      .catch((error) => Promise.reject(error));
  }
}
