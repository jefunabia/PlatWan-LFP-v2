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
import { LoginServiceService } from './shared/login-service.service';
import { RegisterServiceService } from './shared/register-service.service';
import { LoginPageComponent } from './login/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    StatusFormComponent,
    StatusListComponent,
    LoginPageComponent

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
  providers: [StatusFormService, LoginServiceService, RegisterServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
