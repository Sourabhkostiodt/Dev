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
import { ResizableDraggableComponent } from './resizable-draggable/resizable-draggable.component';
import { MatricsComponent } from './matrics/matrics.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    DashboardComponent,
    AddBoardComponent,
    SourceComponent,
    ResizableDraggableComponent,
    MatricsComponent

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    DragDropModule,
    AngularDraggableModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
