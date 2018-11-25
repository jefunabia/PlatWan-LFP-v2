import { Component, OnInit } from '@angular/core';
import { StatusFormService } from 'src/app/shared/status-form.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-status-form',
  templateUrl: './status-form.component.html',
  styleUrls: ['./status-form.component.css']
})
export class StatusFormComponent implements OnInit {

  constructor(private service : StatusFormService,
    private firestore:AngularFirestore,
    private toastr : ToastrService) { }

  ngOnInit() {
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

    
}
