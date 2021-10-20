import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { DashRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { MapComponent } from '../components/map/map.component';
import { MapPageComponent } from '../components/map-page/map-page.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatProgressBarModule} from '@angular/material/progress-bar'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FerjekaiStatusComponent } from '../dialogs/ferjekai-status/ferjekai-status.component';
import { NgxGaugeModule } from 'ngx-gauge';
import {TilesComponent} from '../dialogs/tiles/tiles.component'
import {MinicardComponent} from '../components/minicard/minicard.component'
import { MatMenuModule } from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import { LandingComponent } from '../components/landing/landing.component';
import { ScrollbarComponent } from '../components/scrollbar/scrollbar.component';
import {NavComponent} from '../components/nav/nav.component'
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';




@NgModule({
  
  declarations: [DashboardComponent, MapComponent,
    MapPageComponent,FerjekaiStatusComponent,TilesComponent,MinicardComponent,LandingComponent,ScrollbarComponent,NavComponent
    ],
  imports: [
    CommonModule,
    DashRoutingModule,
    MatToolbarModule,
    BrowserModule,
    LeafletModule,
    MatRadioModule,
    HttpClientModule,
    MatIconModule,
    MatStepperModule,
    MatTabsModule,
    MatSidenavModule,
    MatButtonModule,
    MatTableModule,
    MatRippleModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatInputModule,
    MatSlideToggleModule,
    FormsModule,
   MatMenuModule,
    MatListModule,
    MatProgressBarModule,
    MatDividerModule,
    MatExpansionModule,
    MatDialogModule,
    MatCardModule,
    ReactiveFormsModule,
    MatGridListModule,
    LeafletModule,
    MatIconModule,
    MatFormFieldModule,
    NgxGaugeModule,
    ScrollingModule,
    MatSelectModule,
    InfiniteScrollModule,
    MatChipsModule
],


})
export class DashboardModule {}
