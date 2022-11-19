import { Message } from "./Message";

export class Room {

    public constructor(
        private readonly id: string,
        private name: string,
        private readonly messages: Array<Message>,
    ) {}

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getMessages(): Array<Message> {
        return this.messages;
    }

    public publishMessage(message: Message): void {
        this.messages.push(message);
    }
}
