import { Component, OnInit } from '@angular/core';
import { RoomService } from '@app/services/room.service';
import { RoomModel } from '@app/models/room-model';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  constructor(private roomService: RoomService) { }

  roomList: RoomModel[] = [];

  ngOnInit() {
    this.roomService.getRooms().subscribe(
      collectionSnapshot => {
        this.roomList = [];
        for(let i = 0 ; i < collectionSnapshot.length; i++){
          this.roomList.push(collectionSnapshot[0].payload.doc.data());
        }
      }
    )
  }

}
