import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum ModelAttributeTypes {
  BINARY = "binary",
  BINARY_SET = "binarySet",
  BOOL = "bool",
  LIST = "list",
  MAP = "map",
  NUMBER = "number",
  NUMBER_SET = "numberSet",
  STRING = "string",
  STRING_SET = "stringSet",
  NULL = "_null"
}

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export declare class sulesund {
  readonly id: string;
  readonly GMT?: number;
  readonly ID?: number;
  readonly topic?: string;
  readonly _version: number;
  readonly _deleted?: boolean;
  readonly _lastChangedAt: number;
  readonly createdAt: string;
  readonly updatedAt: string;
  constructor(init: ModelInit<sulesund>);
}

export declare class ModelsulesundConnection {
  readonly items?: (sulesund | null)[];
  readonly nextToken?: string;
  readonly startedAt?: number;
  constructor(init: ModelInit<ModelsulesundConnection>);
}



