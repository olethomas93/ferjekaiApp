// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  httpEndpoint:"12.0.2.0.1",
  firebaseConfig: {
    apiKey: "AIzaSyAviBDJ476cAfbTLQ03_b5trTMWzVuXrps",
    authDomain: "ferjekai.firebaseapp.com",
    projectId: "ferjekai",
    storageBucket: "ferjekai.appspot.com",
    messagingSenderId: "1092784275101",
    appId: "1:1092784275101:web:e2b306f232936a2de7de74",
    measurementId: "G-K67V7VYNPJ"
  },
  cloudConfig:{

    clientId:"b620d3f0-2445-4817-9e17-0936cef1eed9",
    authURL:'https://wcdemob2c.b2clogin.com/wcdemob2c.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1A_signup_signin',
    scopes:'https://wcdemob2c.onmicrosoft.com/330b9121-c376-4111-83b8-b3544137061b/readDefault',
    ApiKey:"b9a966e07cab4145b13b319426a4776f",
    username:"automation@brattvaag-electro.no",
    pwd:"Beas@uto1933"
  },

  mqtt: {
		server: 'mqtt.myweb.com',
		protocol: "wss",
		port: 1883
	},

  awsmobile: {
    "aws_project_region": "eu-central-1",
    "aws_cognito_identity_pool_id": "eu-central-1:827197f4-2eb0-4d0b-b04c-ceb99b53f9dd",
    "aws_cognito_region": "eu-central-1",
    "aws_user_pools_id": "eu-central-1_dZ6GTneB6",
    "aws_user_pools_web_client_id": "1h0rsjhbm4jq9vnvnascputi8q",
    "oauth": {}
}



  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
