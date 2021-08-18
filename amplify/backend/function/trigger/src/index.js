const axios = require('axios');
const gql = require('graphql-tag');
const graphql = require('graphql');
const { print } = graphql;



const listFerjedata =gql`
query MyQuery {
  listFerjeData {
    items {
      GMT
      ID
      topic
   
    }
  }
}`

const update =gql`
mutation MyMutation($input:UpdateFerjeDataInput!) {
  updateFerjeData(input: $input) {
    GMT
    id
    ID
    topic
   
  }
}
`

exports.handler = async (event) => {
var TagValues ={};
var ID = "alarms" ;
if(event.CollectionId== 1){
    
    ID = "weather";
}
else if(event.CollectionId==2){

  ID="DriftsData"
}

var item ={
  id:ID,
  GMT:Date.now(),
  ID:event.CollectionId,
  topic:event.TagData[0]
};

  console.log(process.env.API_URL)
  try {
    const graphqlData = await axios({
      url: "https://syhhaeb4hfaqheleomqe6oogvy.appsync-api.eu-central-1.amazonaws.com/graphql",
      method: 'post',
      headers: {
        'x-api-key': "da2-jrffhimvmjf4zj5lmwnqq6cef4"
      },
      data: {
        query: print(update),
        variables: {
          input: {
            id: ID,
            GMT: Date.now(),
            ID:event.CollectionId,
            topic:JSON.stringify(event.TagData[0]),
            createdAt: new Date().toISOString(),
            updatedAt:new Date().toISOString()
           
          }
        }
        
      }
    });
    const body = {
      message: "successfully created todo!"
    }
    return {
        statusCode: 200,
        body: JSON.stringify(body),
        headers: {
            "Access-Control-Allow-Origin": "*",
        }
    }
  } catch (err) {
    console.log('error posting to appsync: ', err);
  } 
}