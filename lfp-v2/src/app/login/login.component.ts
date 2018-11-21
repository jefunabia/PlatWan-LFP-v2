import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { RegisterServiceService } from '../shared/register-service.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service : RegisterServiceService,
    private firestore:AngularFirestore) { }

  ngOnInit() {
    $('.message a').click(function () {
      $('form').animate({ height: "toggle", opacity: "toggle" });
  });

  this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form!=null)
    form.resetForm();
    this.service.formData = {
      id : null,
      email : '',
      username : '',
      displayName : '',
      password : '',
      confirmPassword : ''
    }
  }

  onSubmit(form:NgForm){
    let data = form.value;
    this.firestore.collection('users').add(data);
    this.resetForm(form);
  }
}
