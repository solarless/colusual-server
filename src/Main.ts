import * as crypto from "crypto";
import { Message } from "./messaging/core/Message";
import { Role } from "./messaging/core/Role";
import { Room } from "./messaging/core/Room";
import { User } from "./messaging/core/User";

const billy = new User(crypto.randomBytes(8).toString('hex'), 'Billy', new Array<Role>());
const john = new User(crypto.randomBytes(8).toString('hex'), 'John', new Array<Role>());

const room = new Room(crypto.randomBytes(8).toString('hex'), 'wow', new Array<Message>());

const message1 = new Message(crypto.randomBytes(8).toString('hex'), billy, "foo");
const message2 = new Message(crypto.randomBytes(8).toString('hex'), john, "bar");

room.publishMessage(message1);
room.publishMessage(message2);

console.log(room);
