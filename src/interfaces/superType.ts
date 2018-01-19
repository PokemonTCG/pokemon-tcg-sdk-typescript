export interface ISuperType {
  resource(): string;
  all(): ISuperType[];
}