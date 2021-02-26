import { SetImage } from "./image";
import { Legality } from "./legality";

export interface Set {
  id: string;
  images: SetImage;
  legalities: Legality;
  name:  string;
  printedTotal: number;
  ptcgoCode: string;
  releaseDate: string;
  series:  string;
  total: number;
  updatedAt: string;
}