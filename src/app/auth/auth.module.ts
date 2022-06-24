import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddBoardComponent } from './add-board/add-board.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AngularDraggableModule } from 'ngx-draggable-resize';
import { SourceComponent } from './source/source.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    DashboardComponent,
    AddBoardComponent,
    SourceComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    DragDropModule,
    AngularDraggableModule
  ]
})
export class AuthModule { }
