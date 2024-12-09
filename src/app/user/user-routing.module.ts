import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserBasePageComponent } from './user-base-page/user-base-page.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes: Routes = [
 
   {
    path: '',
    component: UserComponent,
    children: [
      { path: '', 
        component: UserLoginComponent 
      }, 
      { path: 'user_login', 
        component: UserLoginComponent 
      }, 
      { 
        path: 'user_base_page', 
        component: UserBasePageComponent 
      },
      
    ],
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
