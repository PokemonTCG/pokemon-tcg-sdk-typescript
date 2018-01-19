import { Client } from './client';
import { Card } from "./classes/card";
import { Set } from "./classes/set";
import { Type } from "./classes/type";
import { SubType } from "./classes/subType";
import { SuperType } from "./classes/superType";
import { IQuery } from './interfaces/query';
import { AxiosResponse } from 'axios';

export class QueryBuilder {
  static find<T>(type: (new() => T), id: string): T {
    Client.get(type.resource())
  }
}