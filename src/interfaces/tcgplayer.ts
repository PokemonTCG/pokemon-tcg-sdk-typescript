export interface ITCGPlayer {
  url: string;
  updatedAt: string;
  prices: {
    normal: IPrice | undefined;
    holofoil: IPrice | undefined;
    reverseHolofoil: IPrice | undefined;
    '1stEditionNormal': IPrice | undefined;
    '1stEditionHolofoil': IPrice | undefined;
  }
}

export interface IPrice {
  low: number | null
  mid: number | null
  high: number | null
  market: number | null
  directLow: number | null
}