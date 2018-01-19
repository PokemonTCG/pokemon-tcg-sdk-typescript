export interface ISet {
  code: string;
  name: string;
  series: string;
  totalCards: number;
  standardLegal: boolean;
  expandedLegal: boolean;
  releaseDate: string;
  symbolUrl: string;
  ptcgoCode: string;

  resource(): string;
  find(id:  number): ISet;
  all(): ISet[];
  where(args: object): ISet;
}