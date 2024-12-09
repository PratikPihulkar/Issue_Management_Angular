import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserBasePageComponent } from './user-base-page/user-base-page.component';


@NgModule({
  declarations: [
    UserComponent,
    UserLoginComponent,
    UserBasePageComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
