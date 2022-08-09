import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBoardComponent } from './add-board/add-board.component';
import { Add1BoardComponent } from './add1-board/add1-board.component';
import { Add2BoardComponent } from './add2-board/add2-board.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
//import { MatricsComponent } from './matrics/matrics.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SourceComponent } from './source/source.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component:RegisterComponent },
  { path: 'reset-password', component:ResetPasswordComponent },
  { path: 'dashboard', component:DashboardComponent },
  { path: 'add-board', component:AddBoardComponent },
  { path: 'add-board1', component:Add1BoardComponent },
  { path: 'add-board2', component:Add2BoardComponent },
  { path: 'source', component:SourceComponent },
  //{ path: 'matrics', component:MatricsComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
