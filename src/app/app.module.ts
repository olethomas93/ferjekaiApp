import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from './dashboard/dashboard.module';
import { MatIconModule } from '@angular/material/icon';


import { SignInComponent } from './components/sign-in/sign-in.component';
import {AuthService} from './services/auth.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {MatCardModule} from '@angular/material/card'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import Amplify,{PubSub} from 'aws-amplify';
import { SignUpComponent } from './components/sign-up/sign-up.component';



import { AWSIoTProvider } from '@aws-amplify/pubsub/lib/Providers';
import awsconfig from 'src/aws-exports';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { LoginformComponent } from './components/loginform/loginform.component';
import { ConfirmFormComponent } from './components/confirm-form/confirm-form.component';
import { CreateDockComponent } from './components/create-dock/create-dock.component';
import { SidescrollComponent } from './components/sidescroll/sidescroll.component';
import { AlarmconfComponent } from './components/alarmconf/alarmconf.component';
import { DeleteDockComponent } from './dialogs/delete-dock/delete-dock.component';
import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';
import { ChartComponent } from './dialogs/chart/chart.component';
import { UUID } from 'angular2-uuid';
import { ApiComponent } from './components/api/api.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';



const url ="https://ferryapi.azurewebsites.net"
const  devurl = "http://localhost:8000"
const config: SocketIoConfig = { url: url, options: {} };

PlotlyModule.plotlyjs = PlotlyJS;


const uuid =UUID.UUID();

PubSub.configure({});


Amplify.configure(awsconfig);
Amplify.addPluggable(new AWSIoTProvider({
  aws_pubsub_region: 'eu-central-1',
  aws_pubsub_endpoint: 'wss://a3vwh5519vcrt0-ats.iot.eu-central-1.amazonaws.com/mqtt',
  clientId:uuid

}));




@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    LoginformComponent,
    ConfirmFormComponent,
    CreateDockComponent,
    SidescrollComponent,
    AlarmconfComponent,
    DeleteDockComponent,
    ChartComponent,
    ApiComponent,
    


  
  
  
 
    
    
 
  ],
  imports: [
   
    BrowserModule,
    DashboardModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
   
    MatGridListModule,
    MatMenuModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatSnackBarModule,
    PlotlyModule,
    SocketIoModule.forRoot(config)
    // ServiceWorkerModule.register('ngsw-worker.js', {
    //   enabled: env.production,
    //   // Register the ServiceWorker as soon as the app is stable
    //   // or after 30 seconds (whichever comes first).
    //   registrationStrategy: 'registerWhenStable:30000'
    // }),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
