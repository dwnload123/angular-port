import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { SigninComponent } from './modules/auth/signin/signin.component';
import { SignupComponent } from './modules/auth/signup/signup.component';
import { UserComponent } from './modules/user/user.component';
import { AuthGuardService } from './services/auth/auth.guard';

const routes: Routes = [
  {path:'' , component:HomeComponent , pathMatch:'full'},
  {path:'signin' , component:SigninComponent},
  {path:'signup' , component:SignupComponent},
  {path:'user' , component:UserComponent, canActivate:[AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
