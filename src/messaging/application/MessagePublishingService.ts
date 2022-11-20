import { IdGenerator } from "../../shared/application/IdGenerator";
import { Message } from "../core/Message";
import { RolePermission } from "../core/RolePermission";
import { MessagePublishingDto } from "./MessagePublishingDto";
import { MessageRepository } from "./MessageRepository";
import { RoomRepository } from "./RoomRepository";
import { UserCantSendMessagesException } from "./UserCantSendMessagesException";
import { UserRepository } from "./UserRepository";

export class MessagePublishingService {

    public constructor(
        private readonly userRepository: UserRepository,
        private readonly roomRepository: RoomRepository,
        private readonly messageRepository: MessageRepository,
        private readonly idGenerator: IdGenerator,
    ) {}

    public async publishMessage(dto: MessagePublishingDto): Promise<void> {

        const senderId = dto.getSenderId();
        const roomId = dto.getRoomId();
        const content = dto.getContent();

        const sender = await this.userRepository.findOne(senderId);

        const senderCantSendMessages =
            !sender.hasPermission(RolePermission.WRITE_MESSAGES);
        if (senderCantSendMessages) {
            throw new UserCantSendMessagesException();
        }

        const room = await this.roomRepository.findOne(roomId);

        const messageId = await this.idGenerator.generateId();
        const message = new Message(messageId, sender, content);
        room.publishMessage(message);

        await this.roomRepository.save(room);
        await this.messageRepository.save(message);
    }
}
