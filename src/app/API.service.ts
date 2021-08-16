/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateFerjeDataInput = {
  id?: string | null;
  topic?: string | null;
  GMT?: number | null;
  ID?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelferjeDataConditionInput = {
  topic?: ModelStringInput | null;
  GMT?: ModelIntInput | null;
  ID?: ModelIntInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelferjeDataConditionInput | null> | null;
  or?: Array<ModelferjeDataConditionInput | null> | null;
  not?: ModelferjeDataConditionInput | null;
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

export type ferjeData = {
  __typename: "ferjeData";
  id: string;
  topic?: string | null;
  GMT?: number | null;
  ID?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type UpdateFerjeDataInput = {
  id: string;
  topic?: string | null;
  GMT?: number | null;
  ID?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteFerjeDataInput = {
  id: string;
};

export type ModelferjeDataFilterInput = {
  id?: ModelIDInput | null;
  topic?: ModelStringInput | null;
  GMT?: ModelIntInput | null;
  ID?: ModelIntInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelferjeDataFilterInput | null> | null;
  or?: Array<ModelferjeDataFilterInput | null> | null;
  not?: ModelferjeDataFilterInput | null;
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

export type ModelferjeDataConnection = {
  __typename: "ModelferjeDataConnection";
  items?: Array<ferjeData | null> | null;
  nextToken?: string | null;
};

export type CreateFerjeDataMutation = {
  __typename: "ferjeData";
  id: string;
  topic?: string | null;
  GMT?: number | null;
  ID?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type UpdateFerjeDataMutation = {
  __typename: "ferjeData";
  id: string;
  topic?: string | null;
  GMT?: number | null;
  ID?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteFerjeDataMutation = {
  __typename: "ferjeData";
  id: string;
  topic?: string | null;
  GMT?: number | null;
  ID?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type GetFerjeDataQuery = {
  __typename: "ferjeData";
  id: string;
  topic?: string | null;
  GMT?: number | null;
  ID?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ListFerjeDataQuery = {
  __typename: "ModelferjeDataConnection";
  items?: Array<{
    __typename: "ferjeData";
    id: string;
    topic?: string | null;
    GMT?: number | null;
    ID?: number | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null> | null;
  nextToken?: string | null;
};

export type OnUpdateByIdSubscription = {
  __typename: "ferjeData";
  id: string;
  topic?: string | null;
  GMT?: number | null;
  ID?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnCreateFerjeDataSubscription = {
  __typename: "ferjeData";
  id: string;
  topic?: string | null;
  GMT?: number | null;
  ID?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnUpdateFerjeDataSubscription = {
  __typename: "ferjeData";
  id: string;
  topic?: string | null;
  GMT?: number | null;
  ID?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnDeleteFerjeDataSubscription = {
  __typename: "ferjeData";
  id: string;
  topic?: string | null;
  GMT?: number | null;
  ID?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateFerjeData(
    input: CreateFerjeDataInput,
    condition?: ModelferjeDataConditionInput
  ): Promise<CreateFerjeDataMutation> {
    const statement = `mutation CreateFerjeData($input: CreateFerjeDataInput!, $condition: ModelferjeDataConditionInput) {
        createFerjeData(input: $input, condition: $condition) {
          __typename
          id
          topic
          GMT
          ID
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
    return <CreateFerjeDataMutation>response.data.createFerjeData;
  }
  async UpdateFerjeData(
    input: UpdateFerjeDataInput,
    condition?: ModelferjeDataConditionInput
  ): Promise<UpdateFerjeDataMutation> {
    const statement = `mutation UpdateFerjeData($input: UpdateFerjeDataInput!, $condition: ModelferjeDataConditionInput) {
        updateFerjeData(input: $input, condition: $condition) {
          __typename
          id
          topic
          GMT
          ID
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
    return <UpdateFerjeDataMutation>response.data.updateFerjeData;
  }
  async DeleteFerjeData(
    input: DeleteFerjeDataInput,
    condition?: ModelferjeDataConditionInput
  ): Promise<DeleteFerjeDataMutation> {
    const statement = `mutation DeleteFerjeData($input: DeleteFerjeDataInput!, $condition: ModelferjeDataConditionInput) {
        deleteFerjeData(input: $input, condition: $condition) {
          __typename
          id
          topic
          GMT
          ID
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
    return <DeleteFerjeDataMutation>response.data.deleteFerjeData;
  }
  async GetFerjeData(id: string): Promise<GetFerjeDataQuery> {
    const statement = `query GetFerjeData($id: ID!) {
        getFerjeData(id: $id) {
          __typename
          id
          topic
          GMT
          ID
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
    return <GetFerjeDataQuery>response.data.getFerjeData;
  }
  async ListFerjeData(
    filter?: ModelferjeDataFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListFerjeDataQuery> {
    const statement = `query ListFerjeData($filter: ModelferjeDataFilterInput, $limit: Int, $nextToken: String) {
        listFerjeData(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            topic
            GMT
            ID
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
    return <ListFerjeDataQuery>response.data.listFerjeData;
  }
  OnUpdateByIdListener(
    id: string
  ): Observable<SubscriptionResponse<OnUpdateByIdSubscription>> {
    const statement = `subscription OnUpdateById($id: ID!) {
        onUpdateById(id: $id) {
          __typename
          id
          topic
          GMT
          ID
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnUpdateByIdSubscription>>;
  }

  OnCreateFerjeDataListener: Observable<
    SubscriptionResponse<OnCreateFerjeDataSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateFerjeData {
        onCreateFerjeData {
          __typename
          id
          topic
          GMT
          ID
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateFerjeDataSubscription>>;

  OnUpdateFerjeDataListener: Observable<
    SubscriptionResponse<OnUpdateFerjeDataSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateFerjeData {
        onUpdateFerjeData {
          __typename
          id
          topic
          GMT
          ID
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateFerjeDataSubscription>>;

  OnDeleteFerjeDataListener: Observable<
    SubscriptionResponse<OnDeleteFerjeDataSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteFerjeData {
        onDeleteFerjeData {
          __typename
          id
          topic
          GMT
          ID
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteFerjeDataSubscription>>;
}
