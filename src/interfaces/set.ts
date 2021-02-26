import { ISetImage } from "./image";
import { ILegality } from "./legality";

export interface ISet {
  id: string;
  images: ISetImage;
  legalities: ILegality;
  name:  string;
  printedTotal: number;
  ptcgoCode: string;
  releaseDate: string;
  series:  string;
  total: number;
  updatedAt: string;
}