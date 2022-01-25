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
  onDeleteMaintenaceByFerry: OnDeleteMaintenaceByFerrySubscription;
  onCreateMaintenaceByFerry: OnCreateMaintenaceByFerrySubscription;
  onCreateDockData: OnCreateDockDataSubscription;
  onUpdateDockData: OnUpdateDockDataSubscription;
  onDeleteDockData: OnDeleteDockDataSubscription;
  onCreateDock: OnCreateDockSubscription;
  onUpdateDock: OnUpdateDockSubscription;
  onDeleteDock: OnDeleteDockSubscription;
  onCreateLoggingTest: OnCreateLoggingTestSubscription;
  onUpdateLoggingTest: OnUpdateLoggingTestSubscription;
  onDeleteLoggingTest: OnDeleteLoggingTestSubscription;
  onCreateMaintenanceReport: OnCreateMaintenanceReportSubscription;
  onUpdateMaintenanceReport: OnUpdateMaintenanceReportSubscription;
  onDeleteMaintenanceReport: OnDeleteMaintenanceReportSubscription;
};

export enum MaintenanceReportStatus {
  done = "done",
  inProgress = "inProgress"
}

export type MaintenanceReport = {
  __typename: "MaintenanceReport";
  id: string;
  reportedBy?: string | null;
  description?: string | null;
  comment?: Array<Comment | null> | null;
  date?: string | null;
  status?: MaintenanceReportStatus | null;
  ferry?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type Comment = {
  __typename: "Comment";
  maintenanceReportid: string;
  commentid: string;
  content?: string | null;
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

export type CreateLoggingTestInput = {
  id: string;
  ferry?: string | null;
  data?: string | null;
  timeStamp?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelloggingTestConditionInput = {
  ferry?: ModelStringInput | null;
  data?: ModelStringInput | null;
  timeStamp?: ModelIntInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelloggingTestConditionInput | null> | null;
  or?: Array<ModelloggingTestConditionInput | null> | null;
  not?: ModelloggingTestConditionInput | null;
};

export type ModelIntInput = {
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

export type loggingTest = {
  __typename: "loggingTest";
  id: string;
  ferry?: string | null;
  data?: string | null;
  timeStamp?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type UpdateLoggingTestInput = {
  id: string;
  ferry?: string | null;
  data?: string | null;
  timeStamp?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteLoggingTestInput = {
  id: string;
};

export type CreateMaintenanceReportInput = {
  id?: string | null;
  reportedBy?: string | null;
  description?: string | null;
  comment?: Array<CommentInput | null> | null;
  date?: string | null;
  status?: MaintenanceReportStatus | null;
  ferry?: string | null;
};

export type CommentInput = {
  maintenanceReportid: string;
  commentid: string;
  content?: string | null;
};

export type ModelMaintenanceReportConditionInput = {
  reportedBy?: ModelStringInput | null;
  description?: ModelStringInput | null;
  date?: ModelStringInput | null;
  status?: ModelMaintenanceReportStatusInput | null;
  ferry?: ModelStringInput | null;
  and?: Array<ModelMaintenanceReportConditionInput | null> | null;
  or?: Array<ModelMaintenanceReportConditionInput | null> | null;
  not?: ModelMaintenanceReportConditionInput | null;
};

export type ModelMaintenanceReportStatusInput = {
  eq?: MaintenanceReportStatus | null;
  ne?: MaintenanceReportStatus | null;
};

export type UpdateMaintenanceReportInput = {
  id: string;
  reportedBy?: string | null;
  description?: string | null;
  comment?: Array<CommentInput | null> | null;
  date?: string | null;
  status?: MaintenanceReportStatus | null;
  ferry?: string | null;
};

export type DeleteMaintenanceReportInput = {
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

export type ModelloggingTestFilterInput = {
  id?: ModelStringInput | null;
  ferry?: ModelStringInput | null;
  data?: ModelStringInput | null;
  timeStamp?: ModelIntInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelloggingTestFilterInput | null> | null;
  or?: Array<ModelloggingTestFilterInput | null> | null;
  not?: ModelloggingTestFilterInput | null;
};

export type ModelloggingTestConnection = {
  __typename: "ModelloggingTestConnection";
  items: Array<loggingTest>;
  nextToken?: string | null;
};

export type ModelMaintenanceReportFilterInput = {
  id?: ModelIDInput | null;
  reportedBy?: ModelStringInput | null;
  description?: ModelStringInput | null;
  date?: ModelStringInput | null;
  status?: ModelMaintenanceReportStatusInput | null;
  ferry?: ModelStringInput | null;
  and?: Array<ModelMaintenanceReportFilterInput | null> | null;
  or?: Array<ModelMaintenanceReportFilterInput | null> | null;
  not?: ModelMaintenanceReportFilterInput | null;
};

export type ModelMaintenanceReportConnection = {
  __typename: "ModelMaintenanceReportConnection";
  items: Array<MaintenanceReport>;
  nextToken?: string | null;
};

export type AddMaintenanceReportMutation = {
  __typename: "MaintenanceReport";
  id: string;
  reportedBy?: string | null;
  description?: string | null;
  comment?: Array<{
    __typename: "Comment";
    maintenanceReportid: string;
    commentid: string;
    content?: string | null;
  } | null> | null;
  date?: string | null;
  status?: MaintenanceReportStatus | null;
  ferry?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type AddCommentMutation = {
  __typename: "Comment";
  maintenanceReportid: string;
  commentid: string;
  content?: string | null;
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

export type CreateLoggingTestMutation = {
  __typename: "loggingTest";
  id: string;
  ferry?: string | null;
  data?: string | null;
  timeStamp?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type UpdateLoggingTestMutation = {
  __typename: "loggingTest";
  id: string;
  ferry?: string | null;
  data?: string | null;
  timeStamp?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteLoggingTestMutation = {
  __typename: "loggingTest";
  id: string;
  ferry?: string | null;
  data?: string | null;
  timeStamp?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type CreateMaintenanceReportMutation = {
  __typename: "MaintenanceReport";
  id: string;
  reportedBy?: string | null;
  description?: string | null;
  comment?: Array<{
    __typename: "Comment";
    maintenanceReportid: string;
    commentid: string;
    content?: string | null;
  } | null> | null;
  date?: string | null;
  status?: MaintenanceReportStatus | null;
  ferry?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateMaintenanceReportMutation = {
  __typename: "MaintenanceReport";
  id: string;
  reportedBy?: string | null;
  description?: string | null;
  comment?: Array<{
    __typename: "Comment";
    maintenanceReportid: string;
    commentid: string;
    content?: string | null;
  } | null> | null;
  date?: string | null;
  status?: MaintenanceReportStatus | null;
  ferry?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteMaintenanceReportMutation = {
  __typename: "MaintenanceReport";
  id: string;
  reportedBy?: string | null;
  description?: string | null;
  comment?: Array<{
    __typename: "Comment";
    maintenanceReportid: string;
    commentid: string;
    content?: string | null;
  } | null> | null;
  date?: string | null;
  status?: MaintenanceReportStatus | null;
  ferry?: string | null;
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

export type GetLoggingTestQuery = {
  __typename: "loggingTest";
  id: string;
  ferry?: string | null;
  data?: string | null;
  timeStamp?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ListLoggingTestsQuery = {
  __typename: "ModelloggingTestConnection";
  items: Array<{
    __typename: "loggingTest";
    id: string;
    ferry?: string | null;
    data?: string | null;
    timeStamp?: number | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  }>;
  nextToken?: string | null;
};

export type GetMaintenanceReportQuery = {
  __typename: "MaintenanceReport";
  id: string;
  reportedBy?: string | null;
  description?: string | null;
  comment?: Array<{
    __typename: "Comment";
    maintenanceReportid: string;
    commentid: string;
    content?: string | null;
  } | null> | null;
  date?: string | null;
  status?: MaintenanceReportStatus | null;
  ferry?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListMaintenanceReportsQuery = {
  __typename: "ModelMaintenanceReportConnection";
  items: Array<{
    __typename: "MaintenanceReport";
    id: string;
    reportedBy?: string | null;
    description?: string | null;
    comment?: Array<{
      __typename: "Comment";
      maintenanceReportid: string;
      commentid: string;
      content?: string | null;
    } | null> | null;
    date?: string | null;
    status?: MaintenanceReportStatus | null;
    ferry?: string | null;
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

export type OnDeleteMaintenaceByFerrySubscription = {
  __typename: "MaintenanceReport";
  id: string;
  reportedBy?: string | null;
  description?: string | null;
  comment?: Array<{
    __typename: "Comment";
    maintenanceReportid: string;
    commentid: string;
    content?: string | null;
  } | null> | null;
  date?: string | null;
  status?: MaintenanceReportStatus | null;
  ferry?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateMaintenaceByFerrySubscription = {
  __typename: "MaintenanceReport";
  id: string;
  reportedBy?: string | null;
  description?: string | null;
  comment?: Array<{
    __typename: "Comment";
    maintenanceReportid: string;
    commentid: string;
    content?: string | null;
  } | null> | null;
  date?: string | null;
  status?: MaintenanceReportStatus | null;
  ferry?: string | null;
  createdAt: string;
  updatedAt: string;
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

export type OnCreateLoggingTestSubscription = {
  __typename: "loggingTest";
  id: string;
  ferry?: string | null;
  data?: string | null;
  timeStamp?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnUpdateLoggingTestSubscription = {
  __typename: "loggingTest";
  id: string;
  ferry?: string | null;
  data?: string | null;
  timeStamp?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnDeleteLoggingTestSubscription = {
  __typename: "loggingTest";
  id: string;
  ferry?: string | null;
  data?: string | null;
  timeStamp?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnCreateMaintenanceReportSubscription = {
  __typename: "MaintenanceReport";
  id: string;
  reportedBy?: string | null;
  description?: string | null;
  comment?: Array<{
    __typename: "Comment";
    maintenanceReportid: string;
    commentid: string;
    content?: string | null;
  } | null> | null;
  date?: string | null;
  status?: MaintenanceReportStatus | null;
  ferry?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateMaintenanceReportSubscription = {
  __typename: "MaintenanceReport";
  id: string;
  reportedBy?: string | null;
  description?: string | null;
  comment?: Array<{
    __typename: "Comment";
    maintenanceReportid: string;
    commentid: string;
    content?: string | null;
  } | null> | null;
  date?: string | null;
  status?: MaintenanceReportStatus | null;
  ferry?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteMaintenanceReportSubscription = {
  __typename: "MaintenanceReport";
  id: string;
  reportedBy?: string | null;
  description?: string | null;
  comment?: Array<{
    __typename: "Comment";
    maintenanceReportid: string;
    commentid: string;
    content?: string | null;
  } | null> | null;
  date?: string | null;
  status?: MaintenanceReportStatus | null;
  ferry?: string | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async AddMaintenanceReport(
    id: string,
    reportedBy?: string,
    description?: string,
    date?: string,
    status?: MaintenanceReportStatus,
    ferry?: string
  ): Promise<AddMaintenanceReportMutation> {
    const statement = `mutation AddMaintenanceReport($id: ID!, $reportedBy: String, $description: String, $date: AWSDateTime, $status: MaintenanceReportStatus, $ferry: String) {
        addMaintenanceReport(id: $id, reportedBy: $reportedBy, description: $description, date: $date, status: $status, ferry: $ferry) {
          __typename
          id
          reportedBy
          description
          comment {
            __typename
            maintenanceReportid
            commentid
            content
          }
          date
          status
          ferry
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    if (reportedBy) {
      gqlAPIServiceArguments.reportedBy = reportedBy;
    }
    if (description) {
      gqlAPIServiceArguments.description = description;
    }
    if (date) {
      gqlAPIServiceArguments.date = date;
    }
    if (status) {
      gqlAPIServiceArguments.status = status;
    }
    if (ferry) {
      gqlAPIServiceArguments.ferry = ferry;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <AddMaintenanceReportMutation>response.data.addMaintenanceReport;
  }
  async AddComment(
    maintenanceReportid: string,
    content?: string
  ): Promise<AddCommentMutation> {
    const statement = `mutation AddComment($maintenanceReportid: ID!, $content: String) {
        addComment(maintenanceReportid: $maintenanceReportid, content: $content) {
          __typename
          maintenanceReportid
          commentid
          content
        }
      }`;
    const gqlAPIServiceArguments: any = {
      maintenanceReportid
    };
    if (content) {
      gqlAPIServiceArguments.content = content;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <AddCommentMutation>response.data.addComment;
  }
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
  async CreateLoggingTest(
    input: CreateLoggingTestInput,
    condition?: ModelloggingTestConditionInput
  ): Promise<CreateLoggingTestMutation> {
    const statement = `mutation CreateLoggingTest($input: CreateLoggingTestInput!, $condition: ModelloggingTestConditionInput) {
        createLoggingTest(input: $input, condition: $condition) {
          __typename
          id
          ferry
          data
          timeStamp
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
    return <CreateLoggingTestMutation>response.data.createLoggingTest;
  }
  async UpdateLoggingTest(
    input: UpdateLoggingTestInput,
    condition?: ModelloggingTestConditionInput
  ): Promise<UpdateLoggingTestMutation> {
    const statement = `mutation UpdateLoggingTest($input: UpdateLoggingTestInput!, $condition: ModelloggingTestConditionInput) {
        updateLoggingTest(input: $input, condition: $condition) {
          __typename
          id
          ferry
          data
          timeStamp
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
    return <UpdateLoggingTestMutation>response.data.updateLoggingTest;
  }
  async DeleteLoggingTest(
    input: DeleteLoggingTestInput,
    condition?: ModelloggingTestConditionInput
  ): Promise<DeleteLoggingTestMutation> {
    const statement = `mutation DeleteLoggingTest($input: DeleteLoggingTestInput!, $condition: ModelloggingTestConditionInput) {
        deleteLoggingTest(input: $input, condition: $condition) {
          __typename
          id
          ferry
          data
          timeStamp
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
    return <DeleteLoggingTestMutation>response.data.deleteLoggingTest;
  }
  async CreateMaintenanceReport(
    input: CreateMaintenanceReportInput,
    condition?: ModelMaintenanceReportConditionInput
  ): Promise<CreateMaintenanceReportMutation> {
    const statement = `mutation CreateMaintenanceReport($input: CreateMaintenanceReportInput!, $condition: ModelMaintenanceReportConditionInput) {
        createMaintenanceReport(input: $input, condition: $condition) {
          __typename
          id
          reportedBy
          description
          comment {
            __typename
            maintenanceReportid
            commentid
            content
          }
          date
          status
          ferry
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
    return <CreateMaintenanceReportMutation>(
      response.data.createMaintenanceReport
    );
  }
  async UpdateMaintenanceReport(
    input: UpdateMaintenanceReportInput,
    condition?: ModelMaintenanceReportConditionInput
  ): Promise<UpdateMaintenanceReportMutation> {
    const statement = `mutation UpdateMaintenanceReport($input: UpdateMaintenanceReportInput!, $condition: ModelMaintenanceReportConditionInput) {
        updateMaintenanceReport(input: $input, condition: $condition) {
          __typename
          id
          reportedBy
          description
          comment {
            __typename
            maintenanceReportid
            commentid
            content
          }
          date
          status
          ferry
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
    return <UpdateMaintenanceReportMutation>(
      response.data.updateMaintenanceReport
    );
  }
  async DeleteMaintenanceReport(
    input: DeleteMaintenanceReportInput,
    condition?: ModelMaintenanceReportConditionInput
  ): Promise<DeleteMaintenanceReportMutation> {
    const statement = `mutation DeleteMaintenanceReport($input: DeleteMaintenanceReportInput!, $condition: ModelMaintenanceReportConditionInput) {
        deleteMaintenanceReport(input: $input, condition: $condition) {
          __typename
          id
          reportedBy
          description
          comment {
            __typename
            maintenanceReportid
            commentid
            content
          }
          date
          status
          ferry
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
    return <DeleteMaintenanceReportMutation>(
      response.data.deleteMaintenanceReport
    );
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
  async GetLoggingTest(id: string): Promise<GetLoggingTestQuery> {
    const statement = `query GetLoggingTest($id: ID!) {
        getLoggingTest(id: $id) {
          __typename
          id
          ferry
          data
          timeStamp
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
    return <GetLoggingTestQuery>response.data.getLoggingTest;
  }
  async ListLoggingTests(
    filter?: ModelloggingTestFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListLoggingTestsQuery> {
    const statement = `query ListLoggingTests($filter: ModelloggingTestFilterInput, $limit: Int, $nextToken: String) {
        listLoggingTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            ferry
            data
            timeStamp
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
    return <ListLoggingTestsQuery>response.data.listLoggingTests;
  }
  async GetMaintenanceReport(id: string): Promise<GetMaintenanceReportQuery> {
    const statement = `query GetMaintenanceReport($id: ID!) {
        getMaintenanceReport(id: $id) {
          __typename
          id
          reportedBy
          description
          comment {
            __typename
            maintenanceReportid
            commentid
            content
          }
          date
          status
          ferry
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
    return <GetMaintenanceReportQuery>response.data.getMaintenanceReport;
  }
  async ListMaintenanceReports(
    filter?: ModelMaintenanceReportFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListMaintenanceReportsQuery> {
    const statement = `query ListMaintenanceReports($filter: ModelMaintenanceReportFilterInput, $limit: Int, $nextToken: String) {
        listMaintenanceReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            reportedBy
            description
            comment {
              __typename
              maintenanceReportid
              commentid
              content
            }
            date
            status
            ferry
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
    return <ListMaintenanceReportsQuery>response.data.listMaintenanceReports;
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

  OnDeleteMaintenaceByFerryListener(
    ferry?: string
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteMaintenaceByFerry">
    >
  > {
    const statement = `subscription OnDeleteMaintenaceByFerry($ferry: String) {
        onDeleteMaintenaceByFerry(ferry: $ferry) {
          __typename
          id
          reportedBy
          description
          comment {
            __typename
            maintenanceReportid
            commentid
            content
          }
          date
          status
          ferry
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (ferry) {
      gqlAPIServiceArguments.ferry = ferry;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onDeleteMaintenaceByFerry">
      >
    >;
  }

  OnCreateMaintenaceByFerryListener(
    ferry?: string
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateMaintenaceByFerry">
    >
  > {
    const statement = `subscription OnCreateMaintenaceByFerry($ferry: String) {
        onCreateMaintenaceByFerry(ferry: $ferry) {
          __typename
          id
          reportedBy
          description
          comment {
            __typename
            maintenanceReportid
            commentid
            content
          }
          date
          status
          ferry
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (ferry) {
      gqlAPIServiceArguments.ferry = ferry;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onCreateMaintenaceByFerry">
      >
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

  OnCreateLoggingTestListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateLoggingTest">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateLoggingTest {
        onCreateLoggingTest {
          __typename
          id
          ferry
          data
          timeStamp
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateLoggingTest">>
  >;

  OnUpdateLoggingTestListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateLoggingTest">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateLoggingTest {
        onUpdateLoggingTest {
          __typename
          id
          ferry
          data
          timeStamp
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateLoggingTest">>
  >;

  OnDeleteLoggingTestListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteLoggingTest">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteLoggingTest {
        onDeleteLoggingTest {
          __typename
          id
          ferry
          data
          timeStamp
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteLoggingTest">>
  >;

  OnCreateMaintenanceReportListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateMaintenanceReport">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateMaintenanceReport {
        onCreateMaintenanceReport {
          __typename
          id
          reportedBy
          description
          comment {
            __typename
            maintenanceReportid
            commentid
            content
          }
          date
          status
          ferry
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateMaintenanceReport">
    >
  >;

  OnUpdateMaintenanceReportListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateMaintenanceReport">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateMaintenanceReport {
        onUpdateMaintenanceReport {
          __typename
          id
          reportedBy
          description
          comment {
            __typename
            maintenanceReportid
            commentid
            content
          }
          date
          status
          ferry
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateMaintenanceReport">
    >
  >;

  OnDeleteMaintenanceReportListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteMaintenanceReport">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteMaintenanceReport {
        onDeleteMaintenanceReport {
          __typename
          id
          reportedBy
          description
          comment {
            __typename
            maintenanceReportid
            commentid
            content
          }
          date
          status
          ferry
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteMaintenanceReport">
    >
  >;
}
