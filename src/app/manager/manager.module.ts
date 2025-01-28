import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerComponent } from './manager.component';
import { ManagerBasePageComponent } from './manager-base-page/manager-base-page.component';

import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminModule } from '../admin/admin.module';

@NgModule({
  declarations: [
    ManagerComponent,
    ManagerBasePageComponent,
 
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    NgSelectModule,
    ReactiveFormsModule,
    AdminModule
 
  ]
})
export class ManagerModule { }
