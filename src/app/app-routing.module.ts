import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContectComponent } from './contect/contect.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: 'login', component: RegisterComponent },
  
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContectComponent },
  { path: 'search', component: IndexComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
