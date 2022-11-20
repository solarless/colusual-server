import { Room } from "../core/Room";

export interface RoomRepository {

    findOne(roomId: string): Promise<Room>;
    findAll(): Promise<Array<Room>>;
    save(room: Room): Promise<void>;
}
