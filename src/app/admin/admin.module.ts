import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { BasePageComponent } from './base-page/base-page.component';
import { SingleProjectViewComponent } from './single-project-view/single-project-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { CalenderComponent } from './single-project-view/calender/calender.component';


@NgModule({
  declarations: [
    AdminComponent,
    BasePageComponent,
    SingleProjectViewComponent,
    AddComponent,
    CalenderComponent,
 
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule
  ],
  exports: [ CalenderComponent ]
})
export class AdminModule { }
