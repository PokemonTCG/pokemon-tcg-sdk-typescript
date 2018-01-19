export interface ISubType {
  resource(): string;
  all(): ISubType[];
}