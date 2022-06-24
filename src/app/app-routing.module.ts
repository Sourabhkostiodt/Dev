import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBoardComponent } from './auth/add-board/add-board.component';
import { DashboardComponent } from './auth/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { SourceComponent } from './auth/source/source.component';
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
    { path: 'register', component:RegisterComponent },
    { path: 'dashboard', component:DashboardComponent },
    { path: 'add-board', component:AddBoardComponent },
    { path: 'source', component:SourceComponent },
    { path: '**', redirectTo: '/home' }

  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
