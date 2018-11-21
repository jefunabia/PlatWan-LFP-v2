import { Injectable } from '@angular/core';
import { UserModel } from './user-model.model';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  formData : UserModel;
  constructor() { }
}
