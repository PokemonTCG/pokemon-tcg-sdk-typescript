import { ISuperType } from '../interfaces/superType';

export class SuperType implements ISuperType {
  constructor () {}

  resource(): string {
    return 'supertypes';
  }

  all(): ISuperType[] {
    throw new Error("Method not implemented.");
  }
}