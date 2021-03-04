export enum Legality {
  LEGAL = 'Legal',
  BANNED = 'Banned',
}

export interface ILegality {
  expanded?: Legality;
  standard?: Legality;
  unlimited?: Legality;
}