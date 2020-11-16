import { Client } from '../client';

export class Meta {
  static async allTypes(): Promise<string[]> {
    return Client.get('types');
  }

  static async allSubtypes(): Promise<string[]> {
    return Client.get('subtypes');
  }

  static async allSupertypes(): Promise<string[]> {
    return Client.get('supertypes');
  }
}