import * as crypto from "crypto";
import { Message } from "./messaging/core/Message";
import { Role } from "./messaging/core/Role";
import { RolePermission } from "./messaging/core/RolePermission";
import { Room } from "./messaging/core/Room";
import { User } from "./messaging/core/User";

const roleAdmin = new Role(
    crypto.randomBytes(8).toString('hex'),
    'admin',
    '#ff0000',
    new Array<RolePermission>(),
);
roleAdmin.addPermission(RolePermission.READ_ROOM_HISTORY);
roleAdmin.addPermission(RolePermission.WRITE_MESSAGES);
roleAdmin.addPermission(RolePermission.GRANT_ROLES);
roleAdmin.addPermission(RolePermission.MUTE_USERS);
roleAdmin.addPermission(RolePermission.KICK_USERS);
roleAdmin.addPermission(RolePermission.BAN_USERS);
const roleGuest = new Role(
    crypto.randomBytes(8).toString('hex'),
    'guest',
    '#00ff00',
    new Array<RolePermission>(),
);
roleGuest.addPermission(RolePermission.READ_ROOM_HISTORY);
roleGuest.addPermission(RolePermission.WRITE_MESSAGES);

const billy = new User(
    crypto.randomBytes(8).toString('hex'),
    'Billy',
    new Array<Role>(),
);
billy.addRole(roleAdmin);
const john = new User(
    crypto.randomBytes(8).toString('hex'),
    'John',
    new Array<Role>(),
);
john.addRole(roleGuest);

console.log(billy.hasPermission(RolePermission.BAN_USERS));
console.log(john.hasPermission(RolePermission.BAN_USERS));

const room = new Room(
    crypto.randomBytes(8).toString('hex'),
    'wow',
    new Array<Message>(),
);

const message1 = new Message(
    crypto.randomBytes(8).toString('hex'),
    billy,
    "foo",
);
const message2 = new Message(
    crypto.randomBytes(8).toString('hex'),
    john,
    "bar",
);

room.publishMessage(message1);
room.publishMessage(message2);

console.log(room);
