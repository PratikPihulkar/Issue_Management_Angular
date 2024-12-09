import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminModule } from './admin.module';
import { AdminComponent } from './admin.component';
import { BasePageComponent } from './base-page/base-page.component';
import { SingleProjectViewComponent } from './single-project-view/single-project-view.component';

const routes: Routes = [
  

  {
    path: '',
    component: AdminComponent,
    children: [
      { 
        path: '', 
        component: AdminLoginComponent 
      }, 
      { 
        path: 'admin_login', 
        component: AdminLoginComponent 
      }, 
      { 
        path: 'admin_base_page', 
        component: BasePageComponent 
      },
      { 
        path: 'single_project_view', 
        component: SingleProjectViewComponent 
      },
    ],
  },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {

}
