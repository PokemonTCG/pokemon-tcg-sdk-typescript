export interface IType {
  type: string;
  value: string;
  
  resource(): string;
  all(): IType[];
}