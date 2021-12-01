/* Amplify Params - DO NOT EDIT
	API_FERRYDOCK_GRAPHQLAPIENDPOINTOUTPUT
	API_FERRYDOCK_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */



require('isomorphic-fetch');
const AWS = require('aws-sdk/global');
const AUTH_TYPE = require('aws-appsync').AUTH_TYPE;
const AWSAppSyncClient = require('aws-appsync').default;
const gql = require('graphql-tag');
require('cross-fetch/polyfill');

const config ={
  url: 'https://m44yw2z75bhzxk6psdgb5tuhqe.appsync-api.eu-central-1.amazonaws.com/graphql',
  region: process.env.AWS_REGION,
  auth: {
    type: AUTH_TYPE.AWS_IAM,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      sessionToken: process.env.AWS_SESSION_TOKEN
    }
  },
  disableOffline: true


}
const graphqlClient = new AWSAppSyncClient({
  url: 'https://m44yw2z75bhzxk6psdgb5tuhqe.appsync-api.eu-central-1.amazonaws.com/graphql',
  region: process.env.AWS_REGION,
  auth: {
    type: AUTH_TYPE.AWS_IAM,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      sessionToken: process.env.AWS_SESSION_TOKEN
    }
  },
  disableOffline: true
});
 

console.log(config)


  
const listFerjedata =gql`
query MyQuery {
    listDockData {
   items {
      id
      drift
      weather {
        name
        value
        icon
        unit
      }
      alarms 
      createdAt
      updatedAt
    }
  }
}`

const update =gql(`
mutation updateDockData($input:UpdateDockDataInput!) {
  updateDockData(input: $input) {
    id
    drift
    weather {
      name
      value
      icon
      unit
    }
    alarms 
    createdAt
    updatedAt
  }
}
`)

const create =gql`
mutation CreateDockData(
  $input: CreateDockDataInput!
  $condition: ModeldockDataConditionInput
) {
  createDockData(input: $input, condition: $condition) {
    id
    drift
    weather {
      name
      value
      icon
      unit
    }
    alarms
    createdAt
    updatedAt
  }
}
`



exports.handler = async function(event, context,callback) {
    var ferry = Object.keys(event)[0]
    var data = event[ferry];


const item = {
  input: {
    id:ferry,
    weather:data.weather,
  drift:data.drift,
  alarms:JSON.stringify(data.alarms),
    createdAt: new Date().toISOString(),
    updatedAt:new Date().toISOString()
  }
};



  try{
  const result = await graphqlClient.mutate({
    mutation:update,
  variables: item
  
})

      console.log(result.data);
      callback(null, result.data);

  }catch(e){

    console.log(e)
    console.warn('Error sending mutation: ',  e);
    callback(Error(e))
  }

return context.logStreamName
}
