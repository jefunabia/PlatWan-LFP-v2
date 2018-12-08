import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from 'src/environments/environment';

import { FormsModule } from '@angular/forms';
import { RoomFormComponent } from '@components/room-form/room-form.component';
import { RoomListComponent } from '@components/room-list/room-list.component';
import { RoomService } from '@app/services/room.service';

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
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    RoomFormComponent,
    RoomListComponent,
    LoginFormComponent,
    RegisterFormComponent,
    ProfileComponent
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
  providers: [RoomService, RegisterService, PasswordSecurityService, LoginService, AuthGuardService, UserService, TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
