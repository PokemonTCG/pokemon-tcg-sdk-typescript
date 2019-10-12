import { Client } from '../client';

export class Meta {
  static allTypes(): Promise<string[]> {
    return Client.get('types');
  }

  static allSubtypes(): Promise<string[]> {
    return Client.get('subtypes');
  }

  static allSupertypes(): Promise<string[]> {
    return Client.get('supertypes');
  }
}