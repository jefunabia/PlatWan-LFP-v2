import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/shared/login-service.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['../login.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private service: LoginServiceService, 
    private firestore : AngularFirestore) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form!=null)
    form.resetForm();
    this.service.loginFormData = {
      id : null,
      username : '',
      password : ''
    }
  }
  onSubmit(form:NgForm){
    let data = form.value;
    this.firestore.collection('users').add(data);
    this.resetForm(form);
  }

}
