import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { RegisterServiceService } from '../shared/register-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service : RegisterServiceService) { }

  ngOnInit() {
    $('.message a').click(function () {
      $('form').animate({ height: "toggle", opacity: "toggle" });
  });
  }

}
