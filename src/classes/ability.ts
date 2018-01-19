import { IAbility } from '../interfaces/ability';

export class Ability implements IAbility {
  name: string;
  text: string;
  type: string;
  
  constructor() {}
}