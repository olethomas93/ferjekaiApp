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
 



  
const listFerjedata =gql`
query MyQuery {
    listDockData {
   items {
      id
      drift  {
        name
        value
        icon
        unit
      }
      weather {
        name
        value
        icon
        unit
      }
      alarms {
        name
        value
      }
      createdAt
      updatedAt
    }
  }
}`

const update =gql(`
mutation UpdateDockData(
  $input: UpdateDockDataInput!
  $condition: ModeldockDataConditionInput
) {
  updateDockData(input: $input, condition: $condition) {
    id
    drift {
      name
      value
      icon
      unit
    }
    weather {
      name
      value
      icon
      unit
    }
    alarms {
      id
      value
      name
    }
    status {
      value
      name
    }
    createdAt
    updatedAt
  }
}
`)

const create =gql`
mutation CreateLoggingTest(
  $input: CreateLoggingTestInput!
  $condition: ModelloggingTestConditionInput
) {
  createLoggingTest(input: $input, condition: $condition) {
    id
    ferry
    data
    timeStamp
    createdAt
    updatedAt
  }
}
`

function addMonth(){
  var x = 1; //or whatever offset
  var CurrentDate = new Date();
  CurrentDate.setMonth(CurrentDate.getMonth() + x);
 return CurrentDate.getTime()
}




exports.handler = async function(event, context,callback) {
    var ferry = Object.keys(event)[0]
    var data = event[ferry];

    var dataName = Object.keys(data)[0];



// const item = {
//   input: {
//     id:ferry,
//     [dataName]:data[dataName],
//     createdAt: new Date().toISOString(),
//     updatedAt:new Date().toISOString()
//   }
// };

//   try{
//   const result = await graphqlClient.mutate({
//     mutation:update,
//     variables: item
  
// })

//       console.log(result.data);
//       callback(null, result.data);

//   }catch(e){

//     console.log(e)
//     console.warn('Error sending mutation: ',  e);
//     callback(Error(e))
//   }


  const item1 = {
    input: {
      id: new Date().toISOString(),
      ferry:ferry,
      data:JSON.stringify(data),
      timeStamp:addMonth(),
      createdAt: new Date().toISOString(),
      updatedAt:new Date().toISOString()
    }
  };



  try{
    const result = await graphqlClient.mutate({
      mutation:create,
      variables: item1
    
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
