import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapPageComponent } from '../components/map-page/map-page.component';
import { DashboardComponent } from './dashboard.component';
import {AuthGuard} from '../guards/auth.guard'
import { LandingComponent } from '../components/landing/landing.component';
const routes: Routes = [
  { 
    path: '', 
    component: DashboardComponent,canActivate:[AuthGuard],
    children:[
      
      
      {
      
      path: 'map', component: MapPageComponent,


      data: { animationState: "One" }},

      {path:'landing',component:LandingComponent,
    data:{animationState:'Two'}},

      {path:"",redirectTo:"landing",pathMatch:"full"},

     

    ]
    
  }
 
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashRoutingModule { }
