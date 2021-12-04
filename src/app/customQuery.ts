import * as APIGateway from "amplify/backend/function/dockToDb/src/node_modules/aws-sdk/clients/apigateway";
import { API, graphqlOperation } from "aws-amplify";

const getAlarms =API.graphql(graphqlOperation(``))