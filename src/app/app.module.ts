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
import { SignInComponent } from './components/sign-in/sign-in.component';
import {AuthService} from './services/auth.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {MatCardModule} from '@angular/material/card'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button'
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import {AuthGuard} from './guards/auth.guard'

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
import { HistoricDataComponent } from './dialogs/historic-data/historic-data.component';

import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';

PlotlyModule.plotlyjs = PlotlyJS;











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
    HistoricDataComponent,
    
 
    
    
 
  ],
  imports: [
    AmplifyUIAngularModule,
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
    PlotlyModule,
    MatGridListModule,
    MatMenuModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatSnackBarModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
