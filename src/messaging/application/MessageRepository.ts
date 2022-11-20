import { Message } from "../core/Message";

export interface MessageRepository {

    findOne(messageId: string): Promise<Message>;
    findAll(): Promise<Array<Message>>;
    save(message: Message): Promise<void>;
}
