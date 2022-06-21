import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { PricesComponent } from './pages/prices/prices.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'prices', component: PricesComponent },
    { path: 'about', component: AboutComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component:RegisterComponent },
    { path: 'reset-password', component:RegisterComponent },
     { path: '**', redirectTo: '/home' }

  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
