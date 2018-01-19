import { IType } from '../interfaces/type';

export class Type implements IType {
  type: string;
  value: string;

  constructor() {}

  resource(): string {
    return 'types';
  }

  all(): IType[] {
    throw new Error("Method not implemented.");
  } 
}