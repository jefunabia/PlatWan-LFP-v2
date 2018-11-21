import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/shared/login-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['../login.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private service: LoginServiceService) { }

  ngOnInit() {
  }

}
