import { Injectable } from '@angular/core';
import { StatusForm } from '@models/status-form.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class StatusFormService {
  formData: StatusForm;
  constructor(private firestore:AngularFirestore) { }

  getStatus(){
    return this.firestore.collection('status').snapshotChanges();
  }
  
}
