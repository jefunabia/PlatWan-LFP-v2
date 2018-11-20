import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from 'src/environments/environment';


import { FormsModule } from '@angular/forms';
import { StatusFormComponent } from './home/status-form/status-form.component';
import { StatusListComponent } from './home/status-list/status-list.component';
import { StatusFormService } from './shared/status-form.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { LoginUserComponent } from './login/login-user/login-user.component';
import { RegisterUserComponent } from './login/register-user/register-user.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    StatusFormComponent,
    StatusListComponent,
    LoginUserComponent,
    RegisterUserComponent
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
  providers: [StatusFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
