import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';

import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { LoginFrontComponent } from './login-front/login-front.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { LoginComponent } from './login-front/login/login.component';
import { RegisterComponent } from './login-front/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginFrontComponent,
    LoginComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AdminModule,
    UserModule,
    HttpClientModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
