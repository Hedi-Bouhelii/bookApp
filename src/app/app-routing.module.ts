import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { IndexPageComponent } from './components/index-page/index-page.component';

const routes: Routes = [
  {path:'',component:SignInComponent},
  {path:'login',component:SignInComponent},
  {path:'home',component:IndexPageComponent},
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
