import { RoomTag } from "@app/enums/room-tag.enum";

export interface RoomModel {
    id?: String;
    userId?: String;
    displayName?: String;
    description?: String;
    tags?: RoomTag[];
    dateCreated?: firebase.firestore.Timestamp;
}
