import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PricesComponent } from './prices/prices.component';
import { Route, Router, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'prices', component: PricesComponent },
    { path: 'about', component: AboutComponent },

];

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    PricesComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class PagesModule { }
