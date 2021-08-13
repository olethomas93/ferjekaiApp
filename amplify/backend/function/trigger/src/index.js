const redis = require('redis');
const { promisify } = require('util');
const timeout = parseInt(process.env.TIMEOUT);
const graphqlEndpoint = process.env.GRAPHQL_ENDPOINT;



// Initialize GraphQL client
const AWS = require('aws-sdk/global');
const AUTH_TYPE = require('aws-appsync').AUTH_TYPE;
const AWSAppSyncClient = require('aws-appsync').default;
const gql = require('graphql-tag');
const config = {
  url: graphqlEndpoint,
  region: process.env.AWS_REGION,
  auth: {
    type: AUTH_TYPE.AWS_IAM,
    credentials: AWS.config.credentials,
  },
  disableOffline: true
};
const gqlClient = new AWSAppSyncClient(config);
// The mutation query
const mutation = gql`
  mutation expired($id: ID!) {
    expired(id: $id)
  }
`;

// generic mutation function.  A way to quickly reuse mutation statements
async function executeMutation(mutation, operationName, variables) {
  if (!client) {
    initializeClient();
  }

  try {
    const response = await client.mutate({
      mutation: gql(mutation),
      variables,
      fetchPolicy: "network-only"
    });
    return parseResults(operationName, response.data);
  } catch (err) {
    console.log("Error while trying to mutate data");
    throw JSON.stringify(err);
  }
}

exports.handler =  async function(event,contex) {

console.log(event)



}