import { ISubType } from '../interfaces/subType';

export class SubType implements ISubType {
  constructor() {}

  resource(): string {
    return 'subtypes';
  }

  all(): ISubType[] {
    throw new Error("Method not implemented.");
  }
  
}