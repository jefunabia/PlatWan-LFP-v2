import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { RegisterService } from '@services/register.service';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from '@app/models/user-model';
import { RegisterErrorCode } from '@app/enums/register-error-code.enum';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['../login/login.component.css']
})
export class RegisterFormComponent implements OnInit {

  userModel: UserModel = {};

  constructor(private service : RegisterService,
    private toastr : ToastrService) { }

  ngOnInit() {
  }

  resetForm(){
    this.userModel = {};
  }

  onSubmit(){
    this.service.registerUser(this.userModel)
    .then( 
      success => {
        this.toastr.success("Click to continue logging in", "Register Successful").onTap.subscribe(
          action => {
            this.resetForm();
            this.showLoginForm();
          }
        )
      }
    )
    .catch( 
      errorCode => {
        switch(errorCode){
          case RegisterErrorCode.UsernameIsTaken:{
            this.toastr.error("Username is already taken", "Registration Failed");
            break;
          }
          case RegisterErrorCode.EmailIsTaken:{
            this.toastr.error("Email is already taken", "Registration Failed");
            break;
          }
          case RegisterErrorCode.PasswordsDontMatch:{
            this.toastr.error("Passwords don't match ", "Registration Failed");
            break;
          }
          case RegisterErrorCode.PasswordTooShort:{
            this.toastr.error("Password is too short. Must be atleast 6 characters.", "Registration Failed");
            break;
          }
          case RegisterErrorCode.UsernameTooShort:{
            this.toastr.error("Username is too short. Must be atleast 6 characters.", "Registration Failed");
            break;
          }
          case RegisterErrorCode.DisplayNameTooShort:{
            this.toastr.error("Display Name is too short. Must be atleast 4 characters.", "Registration Failed");
            break;
          }
          case RegisterErrorCode.MissingEntries:{
            this.toastr.error("Input missing entries", "Registration Failed");
            break;
          }
          default:{
            this.toastr.error("Error Code:" + errorCode, "Registration Failed");
            break;
          }
        }
      }
    );
  }

  showLoginForm(){
    $('app-register-form').hide();
    $('app-login-form').fadeIn();
  }

}
