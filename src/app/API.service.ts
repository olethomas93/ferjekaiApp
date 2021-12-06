/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onUpdateById: OnUpdateByIdSubscription;
  onCreateDockData: OnCreateDockDataSubscription;
  onUpdateDockData: OnUpdateDockDataSubscription;
  onDeleteDockData: OnDeleteDockDataSubscription;
  onCreateDock: OnCreateDockSubscription;
  onUpdateDock: OnUpdateDockSubscription;
  onDeleteDock: OnDeleteDockSubscription;
};

export type CreateDockDataInput = {
  id?: string | null;
  drift?: Array<OperationInput | null> | null;
  weather?: Array<WeatherInput | null> | null;
  alarms?: Array<AlarmInput | null> | null;
  status?: Array<StatusInput | null> | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OperationInput = {
  name?: string | null;
  value?: string | null;
  icon?: string | null;
  unit?: string | null;
};

export type WeatherInput = {
  name?: string | null;
  value?: string | null;
  icon?: string | null;
  unit?: string | null;
};

export type AlarmInput = {
  id: string;
  value?: string | null;
  name?: string | null;
};

export type StatusInput = {
  value?: string | null;
  name?: string | null;
};

export type ModeldockDataConditionInput = {
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModeldockDataConditionInput | null> | null;
  or?: Array<ModeldockDataConditionInput | null> | null;
  not?: ModeldockDataConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type dockData = {
  __typename: "dockData";
  id: string;
  drift?: Array<Operation | null> | null;
  weather?: Array<Weather | null> | null;
  alarms?: Array<Alarm | null> | null;
  status?: Array<Status | null> | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type Operation = {
  __typename: "Operation";
  name?: string | null;
  value?: string | null;
  icon?: string | null;
  unit?: string | null;
};

export type Weather = {
  __typename: "Weather";
  name?: string | null;
  value?: string | null;
  icon?: string | null;
  unit?: string | null;
};

export type Alarm = {
  __typename: "Alarm";
  id: string;
  value?: string | null;
  name?: string | null;
};

export type Status = {
  __typename: "Status";
  value?: string | null;
  name?: string | null;
};

export type UpdateDockDataInput = {
  id: string;
  drift?: Array<OperationInput | null> | null;
  weather?: Array<WeatherInput | null> | null;
  alarms?: Array<AlarmInput | null> | null;
  status?: Array<StatusInput | null> | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteDockDataInput = {
  id: string;
};

export type CreateDockInput = {
  id?: string | null;
  name?: string | null;
  location?: Array<number | null> | null;
  drift?: Array<OperationInput | null> | null;
  weather?: Array<WeatherInput | null> | null;
  alarms?: Array<AlarmInput | null> | null;
};

export type ModeldockConditionInput = {
  name?: ModelStringInput | null;
  location?: ModelFloatInput | null;
  and?: Array<ModeldockConditionInput | null> | null;
  or?: Array<ModeldockConditionInput | null> | null;
  not?: ModeldockConditionInput | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type dock = {
  __typename: "dock";
  id: string;
  name?: string | null;
  location?: Array<number | null> | null;
  drift?: Array<Operation | null> | null;
  weather?: Array<Weather | null> | null;
  alarms?: Array<Alarm | null> | null;
  data?: dockData | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateDockInput = {
  id: string;
  name?: string | null;
  location?: Array<number | null> | null;
  drift?: Array<OperationInput | null> | null;
  weather?: Array<WeatherInput | null> | null;
  alarms?: Array<AlarmInput | null> | null;
};

export type DeleteDockInput = {
  id: string;
};

export type ModeldockDataFilterInput = {
  id?: ModelIDInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModeldockDataFilterInput | null> | null;
  or?: Array<ModeldockDataFilterInput | null> | null;
  not?: ModeldockDataFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModeldockDataConnection = {
  __typename: "ModeldockDataConnection";
  items: Array<dockData>;
  nextToken?: string | null;
};

export type ModeldockFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  location?: ModelFloatInput | null;
  and?: Array<ModeldockFilterInput | null> | null;
  or?: Array<ModeldockFilterInput | null> | null;
  not?: ModeldockFilterInput | null;
};

export type ModeldockConnection = {
  __typename: "ModeldockConnection";
  items: Array<dock>;
  nextToken?: string | null;
};

export type CreateDockDataMutation = {
  __typename: "dockData";
  id: string;
  drift?: Array<{
    __typename: "Operation";
    name?: string | null;
    value?: string | null;
    icon?: string | null;
    unit?: string | null;
  } | null> | null;
  weather?: Array<{
    __typename: "Weather";
    name?: string | null;
    value?: string | null;
    icon?: string | null;
    unit?: string | null;
  } | null> | null;
  alarms?: Array<{
    __typename: "Alarm";
    id: string;
    value?: string | null;
    name?: string | null;
  } | null> | null;
  status?: Array<{
    __typename: "Status";
    value?: string | null;
    name?: string | null;
  } | null> | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type UpdateDockDataMutation = {
  __typename: "dockData";
  id: string;
  drift?: Array<{
    __typename: "Operation";
    name?: string | null;
    value?: string | null;
    icon?: string | null;
    unit?: string | null;
  } | null> | null;
  weather?: Array<{
    __typename: "Weather";
    name?: string | null;
    value?: string | null;
    icon?: string | null;
    unit?: string | null;
  } | null> | null;
  alarms?: Array<{
    __typename: "Alarm";
    id: string;
    value?: string | null;
    name?: string | null;
  } | null> | null;
  status?: Array<{
    __typename: "Status";
    value?: string | null;
    name?: string | null;
  } | null> | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteDockDataMutation = {
  __typename: "dockData";
  id: string;
  drift?: Array<{
    __typename: "Operation";
    name?: string | null;
    value?: string | null;
    icon?: string | null;
    unit?: string | null;
  } | null> | null;
  weather?: Array<{
    __typename: "Weather";
    name?: string | null;
    value?: string | null;
    icon?: string | null;
    unit?: string | null;
  } | null> | null;
  alarms?: Array<{
    __typename: "Alarm";
    id: string;
    value?: string | null;
    name?: string | null;
  } | null> | null;
  status?: Array<{
    __typename: "Status";
    value?: string | null;
    name?: string | null;
  } | null> | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type CreateDockMutation = {
  __typename: "dock";
  id: string;
  name?: string | null;
  location?: Array<number | null> | null;
  drift?: Array<{
    __typename: "Operation";
    name?: string | null;
    value?: string | null;
    icon?: string | null;
    unit?: string | null;
  } | null> | null;
  weather?: Array<{
    __typename: "Weather";
    name?: string | null;
    value?: string | null;
    icon?: string | null;
    unit?: string | null;
  } | null> | null;
  alarms?: Array<{
    __typename: "Alarm";
    id: string;
    value?: string | null;
    name?: string | null;
  } | null> | null;
  data?: {
    __typename: "dockData";
    id: string;
    drift?: Array<{
      __typename: "Operation";
      name?: string | null;
      value?: string | null;
      icon?: string | null;
      unit?: string | null;
    } | null> | null;
    weather?: Array<{
      __typename: "Weather";
      name?: string | null;
      value?: string | null;
      icon?: string | null;
      unit?: string | null;
    } | null> | null;
    alarms?: Array<{
      __typename: "Alarm";
      id: string;
      value?: string | null;
      name?: string | null;
    } | null> | null;
    status?: Array<{
      __typename: "Status";
      value?: string | null;
      name?: string | null;
    } | null> | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateDockMutation = {
  __typename: "dock";
  id: string;
  name?: string | null;
  location?: Array<number | null> | null;
  drift?: Array<{
    __typename: "Operation";
    name?: string | null;
    value?: string | null;
    icon?: string | null;
    unit?: string | null;
  } | null> | null;
  weather?: Array<{
    __typename: "Weather";
    name?: string | null;
    value?: string | null;
    icon?: string | null;
    unit?: string | null;
  } | null> | null;
  alarms?: Array<{
    __typename: "Alarm";
    id: string;
    value?: string | null;
    name?: string | null;
  } | null> | null;
  data?: {
    __typename: "dockData";
    id: string;
    drift?: Array<{
      __typename: "Operation";
      name?: string | null;
      value?: string | null;
      icon?: string | null;
      unit?: string | null;
    } | null> | null;
    weather?: Array<{
      __typename: "Weather";
      name?: string | null;
      value?: string | null;
      icon?: string | null;
      unit?: string | null;
    } | null> | null;
    alarms?: Array<{
      __typename: "Alarm";
      id: string;
      value?: string | null;
      name?: string | null;
    } | null> | null;
    status?: Array<{
      __typename: "Status";
      value?: string | null;
      name?: string | null;
    } | null> | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteDockMutation = {
  __typename: "dock";
  id: string;
  name?: string | null;
  location?: Array<number | null> | null;
  drift?: Array<{
    __typename: "Operation";
    name?: string | null;
    value?: string | null;
    icon?: string | null;
    unit?: string | null;
  } | null> | null;
  weather?: Array<{
    __typename: "Weather";
    name?: string | null;
    value?: string | null;
    icon?: string | null;
    unit?: string | null;
  } | null> | null;
  alarms?: Array<{
    __typename: "Alarm";
    id: string;
    value?: string | null;
    name?: string | null;
  } | null> | null;
  data?: {
    __typename: "dockData";
    id: string;
    drift?: Array<{
      __typename: "Operation";
      name?: string | null;
      value?: string | null;
      icon?: string | null;
      unit?: string | null;
    } | null> | null;
    weather?: Array<{
      __typename: "Weather";
      name?: string | null;
      value?: string | null;
      icon?: string | null;
      unit?: string | null;
    } | null> | null;
    alarms?: Array<{
      __typename: "Alarm";
      id: string;
      value?: string | null;
      name?: string | null;
    } | null> | null;
    status?: Array<{
      __typename: "Status";
      value?: string | null;
      name?: string | null;
    } | null> | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type GetDockDataQuery = {
  __typename: "dockData";
  id: string;
  drift?: Array<{
    __typename: "Operation";
    name?: string | null;
    value?: string | null;
    icon?: string | null;
    unit?: string | null;
  } | null> | null;
  weather?: Array<{
    __typename: "Weather";
    name?: string | null;
    value?: string | null;
    icon?: string | null;
    unit?: string | null;
  } | null> | null;
  alarms?: Array<{
    __typename: "Alarm";
    id: string;
    value?: string | null;
    name?: string | null;
  } | null> | null;
  status?: Array<{
    __typename: "Status";
    value?: string | null;
    name?: string | null;
  } | null> | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ListDockDataQuery = {
  __typename: "ModeldockDataConnection";
  items: Array<{
    __typename: "dockData";
    id: string;
    drift?: Array<{
      __typename: "Operation";
      name?: string | null;
      value?: string | null;
      icon?: string | null;
      unit?: string | null;
    } | null> | null;
    weather?: Array<{
      __typename: "Weather";
      name?: string | null;
      value?: string | null;
      icon?: string | null;
      unit?: string | null;
    } | null> | null;
    alarms?: Array<{
      __typename: "Alarm";
      id: string;
      value?: string | null;
      name?: string | null;
    } | null> | null;
    status?: Array<{
      __typename: "Status";
      value?: string | null;
      name?: string | null;
    } | null> | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  }>;
  nextToken?: string | null;
};

export type GetDockQuery = {
  __typename: "dock";
  id: string;
  name?: string | null;
  location?: Array<number | null> | null;
  drift?: Array<{
    __typename: "Operation";
    name?: string | null;
    value?: string | null;
    icon?: string | null;
    unit?: string | null;
  } | null> | null;
  weather?: Array<{
    __typename: "Weather";
    name?: string | null;
    value?: string | null;
    icon?: string | null;
    unit?: string | null;
  } | null> | null;
  alarms?: Array<{
    __typename: "Alarm";
    id: string;
    value?: string | null;
    name?: string | null;
  } | null> | null;
  data?: {
    __typename: "dockData";
    id: string;
    drift?: Array<{
      __typename: "Operation";
      name?: string | null;
      value?: string | null;
      icon?: string | null;
      unit?: string | null;
    } | null> | null;
    weather?: Array<{
      __typename: "Weather";
      name?: string | null;
      value?: string | null;
      icon?: string | null;
      unit?: string | null;
    } | null> | null;
    alarms?: Array<{
      __typename: "Alarm";
      id: string;
      value?: string | null;
      name?: string | null;
    } | null> | null;
    status?: Array<{
      __typename: "Status";
      value?: string | null;
      name?: string | null;
    } | null> | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListDocksQuery = {
  __typename: "ModeldockConnection";
  items: Array<{
    __typename: "dock";
    id: string;
    name?: string | null;
    location?: Array<number | null> | null;
    drift?: Array<{
      __typename: "Operation";
      name?: string | null;
      value?: string | null;
      icon?: string | null;
      unit?: string | null;
    } | null> | null;
    weather?: Array<{
      __typename: "Weather";
      name?: string | null;
      value?: string | null;
      icon?: string | null;
      unit?: string | null;
    } | null> | null;
    alarms?: Array<{
      __typename: "Alarm";
      id: string;
      value?: string | null;
      name?: string | null;
    } | null> | null;
    data?: {
      __typename: "dockData";
      id: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  }>;
  nextToken?: string | null;
};

export type OnUpdateByIdSubscription = {
  __typename: "dockData";
  id: string;
  drift?: Array<{
    __typename: "Operation";
    name?: string | null;
    value?: string | null;
    icon?: string | null;
    unit?: string | null;
  } | null> | null;
  weather?: Array<{
    __typename: "Weather";
    name?: string | null;
    value?: string | null;
    icon?: string | null;
    unit?: string | null;
  } | null> | null;
  alarms?: Array<{
    __typename: "Alarm";
    id: string;
    value?: string | null;
    name?: string | null;
  } | null> | null;
  status?: Array<{
    __typename: "Status";
    value?: string | null;
    name?: string | null;
  } | null> | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnCreateDockDataSubscription = {
  __typename: "dockData";
  id: string;
  drift?: Array<{
    __typename: "Operation";
    name?: string | null;
    value?: string | null;
    icon?: string | null;
    unit?: string | null;
  } | null> | null;
  weather?: Array<{
    __typename: "Weather";
    name?: string | null;
    value?: string | null;
    icon?: string | null;
    unit?: string | null;
  } | null> | null;
  alarms?: Array<{
    __typename: "Alarm";
    id: string;
    value?: string | null;
    name?: string | null;
  } | null> | null;
  status?: Array<{
    __typename: "Status";
    value?: string | null;
    name?: string | null;
  } | null> | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnUpdateDockDataSubscription = {
  __typename: "dockData";
  id: string;
  drift?: Array<{
    __typename: "Operation";
    name?: string | null;
    value?: string | null;
    icon?: string | null;
    unit?: string | null;
  } | null> | null;
  weather?: Array<{
    __typename: "Weather";
    name?: string | null;
    value?: string | null;
    icon?: string | null;
    unit?: string | null;
  } | null> | null;
  alarms?: Array<{
    __typename: "Alarm";
    id: string;
    value?: string | null;
    name?: string | null;
  } | null> | null;
  status?: Array<{
    __typename: "Status";
    value?: string | null;
    name?: string | null;
  } | null> | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnDeleteDockDataSubscription = {
  __typename: "dockData";
  id: string;
  drift?: Array<{
    __typename: "Operation";
    name?: string | null;
    value?: string | null;
    icon?: string | null;
    unit?: string | null;
  } | null> | null;
  weather?: Array<{
    __typename: "Weather";
    name?: string | null;
    value?: string | null;
    icon?: string | null;
    unit?: string | null;
  } | null> | null;
  alarms?: Array<{
    __typename: "Alarm";
    id: string;
    value?: string | null;
    name?: string | null;
  } | null> | null;
  status?: Array<{
    __typename: "Status";
    value?: string | null;
    name?: string | null;
  } | null> | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnCreateDockSubscription = {
  __typename: "dock";
  id: string;
  name?: string | null;
  location?: Array<number | null> | null;
  drift?: Array<{
    __typename: "Operation";
    name?: string | null;
    value?: string | null;
    icon?: string | null;
    unit?: string | null;
  } | null> | null;
  weather?: Array<{
    __typename: "Weather";
    name?: string | null;
    value?: string | null;
    icon?: string | null;
    unit?: string | null;
  } | null> | null;
  alarms?: Array<{
    __typename: "Alarm";
    id: string;
    value?: string | null;
    name?: string | null;
  } | null> | null;
  data?: {
    __typename: "dockData";
    id: string;
    drift?: Array<{
      __typename: "Operation";
      name?: string | null;
      value?: string | null;
      icon?: string | null;
      unit?: string | null;
    } | null> | null;
    weather?: Array<{
      __typename: "Weather";
      name?: string | null;
      value?: string | null;
      icon?: string | null;
      unit?: string | null;
    } | null> | null;
    alarms?: Array<{
      __typename: "Alarm";
      id: string;
      value?: string | null;
      name?: string | null;
    } | null> | null;
    status?: Array<{
      __typename: "Status";
      value?: string | null;
      name?: string | null;
    } | null> | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateDockSubscription = {
  __typename: "dock";
  id: string;
  name?: string | null;
  location?: Array<number | null> | null;
  drift?: Array<{
    __typename: "Operation";
    name?: string | null;
    value?: string | null;
    icon?: string | null;
    unit?: string | null;
  } | null> | null;
  weather?: Array<{
    __typename: "Weather";
    name?: string | null;
    value?: string | null;
    icon?: string | null;
    unit?: string | null;
  } | null> | null;
  alarms?: Array<{
    __typename: "Alarm";
    id: string;
    value?: string | null;
    name?: string | null;
  } | null> | null;
  data?: {
    __typename: "dockData";
    id: string;
    drift?: Array<{
      __typename: "Operation";
      name?: string | null;
      value?: string | null;
      icon?: string | null;
      unit?: string | null;
    } | null> | null;
    weather?: Array<{
      __typename: "Weather";
      name?: string | null;
      value?: string | null;
      icon?: string | null;
      unit?: string | null;
    } | null> | null;
    alarms?: Array<{
      __typename: "Alarm";
      id: string;
      value?: string | null;
      name?: string | null;
    } | null> | null;
    status?: Array<{
      __typename: "Status";
      value?: string | null;
      name?: string | null;
    } | null> | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteDockSubscription = {
  __typename: "dock";
  id: string;
  name?: string | null;
  location?: Array<number | null> | null;
  drift?: Array<{
    __typename: "Operation";
    name?: string | null;
    value?: string | null;
    icon?: string | null;
    unit?: string | null;
  } | null> | null;
  weather?: Array<{
    __typename: "Weather";
    name?: string | null;
    value?: string | null;
    icon?: string | null;
    unit?: string | null;
  } | null> | null;
  alarms?: Array<{
    __typename: "Alarm";
    id: string;
    value?: string | null;
    name?: string | null;
  } | null> | null;
  data?: {
    __typename: "dockData";
    id: string;
    drift?: Array<{
      __typename: "Operation";
      name?: string | null;
      value?: string | null;
      icon?: string | null;
      unit?: string | null;
    } | null> | null;
    weather?: Array<{
      __typename: "Weather";
      name?: string | null;
      value?: string | null;
      icon?: string | null;
      unit?: string | null;
    } | null> | null;
    alarms?: Array<{
      __typename: "Alarm";
      id: string;
      value?: string | null;
      name?: string | null;
    } | null> | null;
    status?: Array<{
      __typename: "Status";
      value?: string | null;
      name?: string | null;
    } | null> | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateDockData(
    input: CreateDockDataInput,
    condition?: ModeldockDataConditionInput
  ): Promise<CreateDockDataMutation> {
    const statement = `mutation CreateDockData($input: CreateDockDataInput!, $condition: ModeldockDataConditionInput) {
        createDockData(input: $input, condition: $condition) {
          __typename
          id
          drift {
            __typename
            name
            value
            icon
            unit
          }
          weather {
            __typename
            name
            value
            icon
            unit
          }
          alarms {
            __typename
            id
            value
            name
          }
          status {
            __typename
            value
            name
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateDockDataMutation>response.data.createDockData;
  }
  async UpdateDockData(
    input: UpdateDockDataInput,
    condition?: ModeldockDataConditionInput
  ): Promise<UpdateDockDataMutation> {
    const statement = `mutation UpdateDockData($input: UpdateDockDataInput!, $condition: ModeldockDataConditionInput) {
        updateDockData(input: $input, condition: $condition) {
          __typename
          id
          drift {
            __typename
            name
            value
            icon
            unit
          }
          weather {
            __typename
            name
            value
            icon
            unit
          }
          alarms {
            __typename
            id
            value
            name
          }
          status {
            __typename
            value
            name
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateDockDataMutation>response.data.updateDockData;
  }
  async DeleteDockData(
    input: DeleteDockDataInput,
    condition?: ModeldockDataConditionInput
  ): Promise<DeleteDockDataMutation> {
    const statement = `mutation DeleteDockData($input: DeleteDockDataInput!, $condition: ModeldockDataConditionInput) {
        deleteDockData(input: $input, condition: $condition) {
          __typename
          id
          drift {
            __typename
            name
            value
            icon
            unit
          }
          weather {
            __typename
            name
            value
            icon
            unit
          }
          alarms {
            __typename
            id
            value
            name
          }
          status {
            __typename
            value
            name
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteDockDataMutation>response.data.deleteDockData;
  }
  async CreateDock(
    input: CreateDockInput,
    condition?: ModeldockConditionInput
  ): Promise<CreateDockMutation> {
    const statement = `mutation CreateDock($input: CreateDockInput!, $condition: ModeldockConditionInput) {
        createDock(input: $input, condition: $condition) {
          __typename
          id
          name
          location
          drift {
            __typename
            name
            value
            icon
            unit
          }
          weather {
            __typename
            name
            value
            icon
            unit
          }
          alarms {
            __typename
            id
            value
            name
          }
          data {
            __typename
            id
            drift {
              __typename
              name
              value
              icon
              unit
            }
            weather {
              __typename
              name
              value
              icon
              unit
            }
            alarms {
              __typename
              id
              value
              name
            }
            status {
              __typename
              value
              name
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateDockMutation>response.data.createDock;
  }
  async UpdateDock(
    input: UpdateDockInput,
    condition?: ModeldockConditionInput
  ): Promise<UpdateDockMutation> {
    const statement = `mutation UpdateDock($input: UpdateDockInput!, $condition: ModeldockConditionInput) {
        updateDock(input: $input, condition: $condition) {
          __typename
          id
          name
          location
          drift {
            __typename
            name
            value
            icon
            unit
          }
          weather {
            __typename
            name
            value
            icon
            unit
          }
          alarms {
            __typename
            id
            value
            name
          }
          data {
            __typename
            id
            drift {
              __typename
              name
              value
              icon
              unit
            }
            weather {
              __typename
              name
              value
              icon
              unit
            }
            alarms {
              __typename
              id
              value
              name
            }
            status {
              __typename
              value
              name
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateDockMutation>response.data.updateDock;
  }
  async DeleteDock(
    input: DeleteDockInput,
    condition?: ModeldockConditionInput
  ): Promise<DeleteDockMutation> {
    const statement = `mutation DeleteDock($input: DeleteDockInput!, $condition: ModeldockConditionInput) {
        deleteDock(input: $input, condition: $condition) {
          __typename
          id
          name
          location
          drift {
            __typename
            name
            value
            icon
            unit
          }
          weather {
            __typename
            name
            value
            icon
            unit
          }
          alarms {
            __typename
            id
            value
            name
          }
          data {
            __typename
            id
            drift {
              __typename
              name
              value
              icon
              unit
            }
            weather {
              __typename
              name
              value
              icon
              unit
            }
            alarms {
              __typename
              id
              value
              name
            }
            status {
              __typename
              value
              name
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteDockMutation>response.data.deleteDock;
  }
  async GetDockData(id: string): Promise<GetDockDataQuery> {
    const statement = `query GetDockData($id: ID!) {
        getDockData(id: $id) {
          __typename
          id
          drift {
            __typename
            name
            value
            icon
            unit
          }
          weather {
            __typename
            name
            value
            icon
            unit
          }
          alarms {
            __typename
            id
            value
            name
          }
          status {
            __typename
            value
            name
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetDockDataQuery>response.data.getDockData;
  }
  async ListDockData(
    filter?: ModeldockDataFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListDockDataQuery> {
    const statement = `query ListDockData($filter: ModeldockDataFilterInput, $limit: Int, $nextToken: String) {
        listDockData(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            drift {
              __typename
              name
              value
              icon
              unit
            }
            weather {
              __typename
              name
              value
              icon
              unit
            }
            alarms {
              __typename
              id
              value
              name
            }
            status {
              __typename
              value
              name
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListDockDataQuery>response.data.listDockData;
  }
  async GetDock(id: string): Promise<GetDockQuery> {
    const statement = `query GetDock($id: ID!) {
        getDock(id: $id) {
          __typename
          id
          name
          location
          drift {
            __typename
            name
            value
            icon
            unit
          }
          weather {
            __typename
            name
            value
            icon
            unit
          }
          alarms {
            __typename
            id
            value
            name
          }
          data {
            __typename
            id
            drift {
              __typename
              name
              value
              icon
              unit
            }
            weather {
              __typename
              name
              value
              icon
              unit
            }
            alarms {
              __typename
              id
              value
              name
            }
            status {
              __typename
              value
              name
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetDockQuery>response.data.getDock;
  }
  async ListDocks(
    filter?: ModeldockFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListDocksQuery> {
    const statement = `query ListDocks($filter: ModeldockFilterInput, $limit: Int, $nextToken: String) {
        listDocks(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            location
            drift {
              __typename
              name
              value
              icon
              unit
            }
            weather {
              __typename
              name
              value
              icon
              unit
            }
            alarms {
              __typename
              id
              value
              name
            }
            data {
              __typename
              id
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListDocksQuery>response.data.listDocks;
  }
  OnUpdateByIdListener(
    id: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateById">>
  > {
    const statement = `subscription OnUpdateById($id: ID!) {
        onUpdateById(id: $id) {
          __typename
          id
          drift {
            __typename
            name
            value
            icon
            unit
          }
          weather {
            __typename
            name
            value
            icon
            unit
          }
          alarms {
            __typename
            id
            value
            name
          }
          status {
            __typename
            value
            name
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateById">>
    >;
  }

  OnCreateDockDataListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateDockData">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateDockData {
        onCreateDockData {
          __typename
          id
          drift {
            __typename
            name
            value
            icon
            unit
          }
          weather {
            __typename
            name
            value
            icon
            unit
          }
          alarms {
            __typename
            id
            value
            name
          }
          status {
            __typename
            value
            name
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateDockData">>
  >;

  OnUpdateDockDataListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateDockData">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateDockData {
        onUpdateDockData {
          __typename
          id
          drift {
            __typename
            name
            value
            icon
            unit
          }
          weather {
            __typename
            name
            value
            icon
            unit
          }
          alarms {
            __typename
            id
            value
            name
          }
          status {
            __typename
            value
            name
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateDockData">>
  >;

  OnDeleteDockDataListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteDockData">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteDockData {
        onDeleteDockData {
          __typename
          id
          drift {
            __typename
            name
            value
            icon
            unit
          }
          weather {
            __typename
            name
            value
            icon
            unit
          }
          alarms {
            __typename
            id
            value
            name
          }
          status {
            __typename
            value
            name
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteDockData">>
  >;

  OnCreateDockListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateDock">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateDock {
        onCreateDock {
          __typename
          id
          name
          location
          drift {
            __typename
            name
            value
            icon
            unit
          }
          weather {
            __typename
            name
            value
            icon
            unit
          }
          alarms {
            __typename
            id
            value
            name
          }
          data {
            __typename
            id
            drift {
              __typename
              name
              value
              icon
              unit
            }
            weather {
              __typename
              name
              value
              icon
              unit
            }
            alarms {
              __typename
              id
              value
              name
            }
            status {
              __typename
              value
              name
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateDock">>
  >;

  OnUpdateDockListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateDock">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateDock {
        onUpdateDock {
          __typename
          id
          name
          location
          drift {
            __typename
            name
            value
            icon
            unit
          }
          weather {
            __typename
            name
            value
            icon
            unit
          }
          alarms {
            __typename
            id
            value
            name
          }
          data {
            __typename
            id
            drift {
              __typename
              name
              value
              icon
              unit
            }
            weather {
              __typename
              name
              value
              icon
              unit
            }
            alarms {
              __typename
              id
              value
              name
            }
            status {
              __typename
              value
              name
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateDock">>
  >;

  OnDeleteDockListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteDock">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteDock {
        onDeleteDock {
          __typename
          id
          name
          location
          drift {
            __typename
            name
            value
            icon
            unit
          }
          weather {
            __typename
            name
            value
            icon
            unit
          }
          alarms {
            __typename
            id
            value
            name
          }
          data {
            __typename
            id
            drift {
              __typename
              name
              value
              icon
              unit
            }
            weather {
              __typename
              name
              value
              icon
              unit
            }
            alarms {
              __typename
              id
              value
              name
            }
            status {
              __typename
              value
              name
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteDock">>
  >;
}
