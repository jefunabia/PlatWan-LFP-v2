import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { LoginServiceService } from '../shared/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service : LoginServiceService) { }

  ngOnInit() {
    $('.message a').click(function () {
      $('form').animate({ height: "toggle", opacity: "toggle" });
  });
  }

}
