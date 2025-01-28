import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerComponent } from './manager.component';
import { ManagerBasePageComponent } from './manager-base-page/manager-base-page.component';

const routes: Routes = [
//   { 
//     path: '', 
//     component: ManagerComponent 
//   } ,
  {
    path:'',
    component:ManagerComponent,
    children:[
      
      {
        path:'',
        component:ManagerBasePageComponent
      },
     
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
