import { ISet } from '../interfaces/set';

export class Set implements ISet {
  code: string;
  name: string;
  series: string;
  totalCards: number;
  standardLegal: boolean;
  expandedLegal: boolean;
  releaseDate: string;
  symbolUrl: string;
  ptcgoCode: string;

  constructor() {}

  resource(): string {
    return "sets";
  }

  find(id: number): ISet {
    throw new Error("Method not implemented.");
  }

  all(): ISet[] {
    throw new Error("Method not implemented.");
  }

  where(args: object): ISet {
    throw new Error("Method not implemented.");
  }
  
}