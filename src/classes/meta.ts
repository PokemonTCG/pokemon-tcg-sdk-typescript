import { Client } from '../client';

export class Meta {
  /**
   * @deprecated `allTypes` is renamed to `getAllTypes` in version 2. See the **[migration guide](https://github.com/acupoftee/pokemon-tcg-sdk-typescript/blob/master/MIGRATING.md)** for more info.
   */
  static async allTypes(): Promise<string[]> {
    const resposne = await Client.get('types');
    return resposne;
  }

  /**
   * @deprecated `allSubtypes` is renamed to `getAllSubtypes` in version 2. See the **[migration guide](https://github.com/acupoftee/pokemon-tcg-sdk-typescript/blob/master/MIGRATING.md)** for more info.
   */
  static async allSubtypes(): Promise<string[]> {
    const response = await Client.get('subtypes');
    return response;
  }

  /**
   * @deprecated `allSupertypes` is renamed to `getAllSupertypes` in version 2. See the **[migration guide](https://github.com/acupoftee/pokemon-tcg-sdk-typescript/blob/master/MIGRATING.md)** for more info.
   */
  static async allSupertypes(): Promise<string[]> {
    const response = await Client.get('supertypes');
    return response;
  }

  /**
   * @deprecated `allRarities` is renamed to `getAllRarities` in version 2. See the **[migration guide](https://github.com/acupoftee/pokemon-tcg-sdk-typescript/blob/master/MIGRATING.md)** for more info.
   */
  static async allRarities(): Promise<string[]> {
    const response = await Client.get('rarities');
    return response;
  }
}
