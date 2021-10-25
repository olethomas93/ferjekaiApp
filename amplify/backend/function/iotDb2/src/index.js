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


const config = {
    url: "https://m44yw2z75bhzxk6psdgb5tuhqe.appsync-api.eu-central-1.amazonaws.com/graphql",
    region: "eu-central-1",
    auth: {
      type: AUTH_TYPE.AWS_IAM,
      credentials: AWS.config.credentials,
    },
    disableOffline: true
  };

  console.log(config)





  
const listFerjedata =gql`
query MyQuery {
    listDockData {
   items {
      id
      drift
      weather
      alarms {
        id
        value
        message
      }
      createdAt
      updatedAt
    }
  }
}`

const update =`
mutation updateDockData($input:UpdateDockDataInput!) {
  updateDockData(input: $input) {
    id
    drift
    weather
    alarms {
      id
      value
      message
    }
    createdAt
    updatedAt
  }
}
`

const create =gql`
mutation CreateDockData(
  $input: CreateDockDataInput!
  $condition: ModeldockDataConditionInput
) {
  createDockData(input: $input, condition: $condition) {
    id
    drift
    weather
    alarms {
      id
      value
      message
    }
    createdAt
    updatedAt
  }
}
`
// Set up Apollo client
const client = new AWSAppSyncClient(config);


exports.handler = (event, context, callback) => {
    var ferry = Object.keys(event)[0]
    var data = event[ferry];


const item = {
  input: {
    id:ferry,
    weather:JSON.stringify(data.weather),
  drift:JSON.stringify(data.drift),
  alarms:data.alarms,
    createdAt: new Date().toISOString(),
    updatedAt:new Date().toISOString()
  }
};

(async () => {
    try {

      const result = await client.mutate({
        mutation: gql(update),
        variables: item
      });
      console.log(result.data);
      callback(null, result.data);
    } catch (e) {
      console.warn('Error sending mutation: ',  e);
      callback(Error(e));
    }
  })();






  // try {
  //   const graphqlData = await axios({
  //     url: "https://cwv5hklocvelle3dgk6iho6ake.appsync-api.eu-central-1.amazonaws.com/graphql",
  //     method: 'post',
  //     headers: {
  //       'x-api-key': "da2-gki4ztnd2zgvjegn2aqfs7hsci"
  //     },
  //     data: {
  //       query: print(update),
  //       variables: {
  //         input: {
  //           id:ferry,
  //           weather:JSON.stringify(data.weather),
  //         drift:JSON.stringify(data.drift),
  //         alarms:data.alarms,
  //           createdAt: new Date().toISOString(),
  //           updatedAt:new Date().toISOString()
            
           
  //         }
  //       }
        
  //     }
  //   });
  //   const body = {
  //     message: "successfully created item!",
  //   }
  //   return {
  //       statusCode: 200,
  //       body: JSON.stringify(body),
  //       headers: {
  //           "Access-Control-Allow-Origin": "*",
  //       }
  //   }
  // } catch (err) {
  //   console.log('error posting to appsync: ', err);
  // } 
}
