import { SetImage } from "./image";
import { ILegality } from "./legality";

export interface Set {
  id: string;
  name: string;
  series: string;
  printedTotal: number;
  total: number;
  legalities: ILegality;
  ptcgoCode: string;
  releaseDate: string;
  updatedAt: string;
  images: SetImage;
}