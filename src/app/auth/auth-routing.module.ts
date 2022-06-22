import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBoardComponent } from './add-board/add-board.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component:RegisterComponent },
  { path: 'reset-password', component:ResetPasswordComponent },
  { path: 'dashboard', component:DashboardComponent },
  { path: 'add-board', component:AddBoardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
