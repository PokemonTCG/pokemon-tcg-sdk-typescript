import { IAttack } from '../interfaces/attack';

export class Attack implements IAttack {
  cost: string[];
  name: string;
  text: string;
  damage: string;
  convertedEnergyCost: string;

  constructor() {}
}