import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './admin/admin.component';
import { BasePageComponent } from './admin/base-page/base-page.component';
import { SingleProjectViewComponent } from './admin/single-project-view/single-project-view.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginFrontComponent } from './login-front/login-front.component';
import { RegisterComponent } from './login-front/register/register.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: 'register',
    component:RegisterComponent
  },
  {
    path: 'Navbar',
    component:NavbarComponent
  },
  {
    path:'login',
    component:LoginFrontComponent
  },
  

  { path: 'admin_module', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'user_module', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  
  {
    path: '**',
    component:PageNotFoundComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  
}
