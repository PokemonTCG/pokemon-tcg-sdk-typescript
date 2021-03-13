export enum Legality {
  Legal = 'Legal',
  Banned = 'Banned',
}

export interface ILegality {
  expanded?: Legality;
  standard?: Legality;
  unlimited?: Legality;
}