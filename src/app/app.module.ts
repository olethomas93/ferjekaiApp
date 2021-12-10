import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from './dashboard/dashboard.module';
import { MatIconModule } from '@angular/material/icon';
//firebase
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { SignInComponent } from './components/sign-in/sign-in.component';
import {AuthService} from './services/auth.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {MatCardModule} from '@angular/material/card'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button'
import { environment as env } from '../environments/environment';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import Amplify from 'aws-amplify';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import {AuthGuard} from './guards/auth.guard'


import { AWSIoTProvider } from '@aws-amplify/pubsub';
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


PlotlyModule.plotlyjs = PlotlyJS;





Amplify.configure(awsconfig);
Amplify.addPluggable(new AWSIoTProvider({
  aws_pubsub_region: 'eu-central-1',
  aws_pubsub_endpoint: 'wss://a3vwh5519vcrt0-ats.iot.eu-central-1.amazonaws.com/mqtt',
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
    
 
    
    
 
  ],
  imports: [
    AmplifyUIAngularModule,
    BrowserModule,
    DashboardModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatFormFieldModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
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
    PlotlyModule
  ],
  providers: [AuthService,AngularFirestoreModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
