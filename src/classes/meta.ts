import { Client } from '../client';

export class Meta {
  static async allTypes(): Promise<string[]> {
    const resposne = await Client.get('types');
    return resposne;
  }

  static async allSubtypes(): Promise<string[]> {
    const response = await Client.get('subtypes');
    return response;
  }

  static async allSupertypes(): Promise<string[]> {
    const response = await Client.get('supertypes');
    return response;
  }

  static async allRarities(): Promise<string[]> {
    const response = await Client.get('rarities');
    return response;
  }
}
