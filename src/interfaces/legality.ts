export enum Legality {
  LEGAL = 'Legal',
  BANNED = 'Banned',
}

export interface ILegality {
  expanded: Legality | undefined
  standard: Legality | undefined
  unlimited: Legality | undefined
}