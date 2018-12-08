import { Component, OnInit, OnDestroy } from '@angular/core';
import { RoomService } from '@app/services/room.service';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '@app/services/login.service';
import { UserModel } from '@app/models/user-model';
import { UserService } from '@app/services/user.service';
import { RoomModel } from '@app/models/room-model';
import * as $ from 'jquery';
import { firestore } from 'firebase/app';
import { RoomTag } from '@app/enums/room-tag.enum';


@Component({
  selector: 'app-room-form',
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.css']
})
export class RoomFormComponent implements OnInit {

  userModel: UserModel = {};
  roomModel: RoomModel = {};

  constructor(private service : RoomService,
    private toastr : ToastrService,
    private loginService: LoginService,
    private roomService: RoomService,
    private userService: UserService) { }

  ngOnInit() {
    this.roomModel.tags = [];

    this.userService.getCurrentUser().subscribe(
      documentSnapshot => {
        this.userModel = documentSnapshot.payload.data();
      }
    )
    
    this.resetForm();
  }

  resetForm(){
    this.roomModel = {};
    this.roomModel.tags = [];
  }

  onSubmit(){
    
    this.roomModel.userId = this.userModel.id;

    var gameTag = $("input[name='gameTag']:checked"). val();
    var languageTag = $("input[name='languageTag']:checked"). val();
    var countryTag = $("input[name='countryTag']:checked"). val();

    this.roomModel.tags.push(gameTag);
    this.roomModel.tags.push(languageTag);
    this.roomModel.tags.push(countryTag);

    this.roomModel.dateCreated = firestore.Timestamp.now();
    this.roomModel.displayName = this.userModel.displayName;
    
    this.roomService.hostRoom(this.roomModel).then(
      success => {
        this.toastr.success("Click here to enter your room", "Room hosted");
      }
    )

    this.resetForm();
  }

  signOut(){
    this.loginService.logoutUser();
    this.toastr.success('Signed out successfully!','LFP>')
  }


}
