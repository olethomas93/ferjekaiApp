import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import awsconfig from 'src/aws-exports';
import Amplify from 'aws-amplify';
import { AWSIoTProvider } from '@aws-amplify/pubsub';
// PubSub.configure(environment.awsmobile);
// API.configure(environment.awsmobile)
// Amplify.addPluggable(new AWSIoTProvider({

// aws_pubsub_region:'us-west-2',
// aws_pubsub_endpoint:'wss://a3vwh5519vcrt0-ats.iot.us-west-2.amazonaws.com/mqtt'


// }))


Amplify.configure(awsconfig);
// Apply plugin with configuration

Amplify.addPluggable(new AWSIoTProvider({
  aws_pubsub_region: 'eu-central-1',
  aws_pubsub_endpoint: 'wss://a3vwh5519vcrt0-ats.iot.eu-central-1.amazonaws.com/mqtt',
}));

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
