import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from 'src/environments/environment';

import { FormsModule } from '@angular/forms';
import { StatusFormComponent } from '@components/status-form/status-form.component';
import { StatusListComponent } from '@components/status-list/status-list.component';
import { StatusFormService } from '@services/status-form.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { RegisterService } from '@services/register.service';
import { LoginFormComponent } from '@components/login-form/login-form.component';
import { RegisterFormComponent } from '@components/register-form/register-form.component';
import { PasswordSecurityService } from '@services/password-security.service';
import { LoginService } from '@services/login.service';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { UserService } from './services/user.service';
import { TokenService } from './services/token.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    StatusFormComponent,
    StatusListComponent,
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [StatusFormService, RegisterService, PasswordSecurityService, LoginService, AuthGuardService, UserService, TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
