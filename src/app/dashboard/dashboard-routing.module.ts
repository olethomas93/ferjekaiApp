import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapPageComponent } from '../components/map-page/map-page.component';
import { DashboardComponent } from './dashboard.component';
import {AuthGuard} from '../guards/auth.guard'
const routes: Routes = [
  { 
    path: '', 
    component: DashboardComponent,canActivate:[AuthGuard],
    children:[
      
      
      {
      
      path: 'map', component: MapPageComponent,


      data: { animationState: "One" }},

      {path:"",redirectTo:"map",pathMatch:"full"},

     

    ]
    
  }
 
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashRoutingModule { }
