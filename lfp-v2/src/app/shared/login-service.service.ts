import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoginUser } from './loginUser.model';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  loginFormData : LoginUser;
  constructor(private firestore:AngularFirestore) { }
 
  getUsers(){
    return this.firestore.collection('users').snapshotChanges();
  }
  
}
