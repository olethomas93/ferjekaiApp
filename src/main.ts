import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import Amplify,{Auth} from "aws-amplify";
import { AWSIoTProvider } from '@aws-amplify/pubsub';
import awsconfig from 'src/aws-exports'


Amplify.configure(awsconfig);
// PubSub.configure(environment.awsmobile);
// API.configure(environment.awsmobile)
// Amplify.addPluggable(new AWSIoTProvider({

// aws_pubsub_region:'us-west-2',
// aws_pubsub_endpoint:'wss://a3vwh5519vcrt0-ats.iot.us-west-2.amazonaws.com/mqtt'


// }))

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
