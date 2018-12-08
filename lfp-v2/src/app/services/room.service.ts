import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { RoomModel } from '@app/models/room-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private firestore:AngularFirestore){ }

  hostRoom(roomModel: RoomModel):Promise<void> {
    roomModel.id = this.firestore.createId();
    return this.firestore.collection("rooms").doc(roomModel.id.toString()).set(roomModel);
  }
  
  getRooms(){
    return this.firestore.collection("rooms", ref => {
      let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
      query = query.orderBy("dateCreated", "desc");
      return query;
    }).snapshotChanges();
  }

}
