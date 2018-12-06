import { Component, OnInit } from '@angular/core';
import { StatusFormService } from '@app/services/status-form.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '@app/services/login.service';
import { UserModel } from '@app/models/user-model';
import { UserService } from '@app/services/user.service';

@Component({
  selector: 'app-status-form',
  templateUrl: './status-form.component.html',
  styleUrls: ['./status-form.component.css']
})
export class StatusFormComponent implements OnInit {

  userModel: UserModel = {};

  constructor(private service : StatusFormService,
    private firestore:AngularFirestore,
    private toastr : ToastrService,
    private loginService: LoginService,
    private userService: UserService) { }

  ngOnInit() {
    this.userService.getCurrentUser().subscribe(
      documentSnapshot => {
        this.userModel = documentSnapshot.payload.data();
      }
    )
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form != null)
    form.resetForm();
    this.service.formData = {
      id : null,
      status : ''
    }
  }

  onSubmit(form:NgForm){
    let data = form.value;
    this.firestore.collection('status').add(data);
    this.resetForm(form);
    this.toastr.success('Status posted!','LFP>')
  }

  signOut(){
    this.loginService.logoutUser();
    this.toastr.success('Signed out successfully!','LFP>')
  }


}
