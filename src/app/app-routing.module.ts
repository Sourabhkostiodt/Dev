import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBoardComponent } from './auth/add-board/add-board.component';
import { Add1BoardComponent } from './auth/add1-board/add1-board.component';
import { DashboardComponent } from './auth/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
//import { MatricsComponent } from './auth/matrics/matrics.component';
import { RegisterComponent } from './auth/register/register.component';
import { SourceComponent } from './auth/source/source.component';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component:RegisterComponent },
  { path: 'register', component:RegisterComponent },
  { path: 'dashboard', component:DashboardComponent },
  { path: 'add-board', component:AddBoardComponent },
  { path: 'add-board1', component:Add1BoardComponent },
  { path: 'source', component:SourceComponent },
  //{ path: 'matrics', component:MatricsComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash:false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
