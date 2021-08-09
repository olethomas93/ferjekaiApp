import { NgModule } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';
import {SignInComponent} from './components/sign-in/sign-in.component'
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  {path:'',redirectTo:'dash',pathMatch:'full'},
  {path:'login',component:SignInComponent},
  { path: 'dash',  loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  canActivate:[AuthGuard]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
