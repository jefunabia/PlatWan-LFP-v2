import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { UserModel } from '@app/models/user-model';
import { LoginService } from '@app/services/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['../login/login.component.css']
})
export class LoginFormComponent implements OnInit {

  userModel: UserModel = {};

  constructor(private loginService: LoginService,
    private toastr : ToastrService) { }

  ngOnInit() {
    this.loginService.checkIfUserIsLoggedIn();
  }

  onSubmit(){
    this.loginService.loginUser(this.userModel);
  }

  showRegisterForm(){
    $('app-login-form').hide();
    $('app-register-form').fadeIn();
  }
  
}
