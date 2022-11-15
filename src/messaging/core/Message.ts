import { User } from "./User";

export class Message {

    public constructor(
        private readonly id: string,
        private readonly sender: User,
        private readonly content: string,
    ) {}

    public getId(): string {
        return this.id;
    }

    public getSender(): User {
        return this.sender;
    }

    public getContent(): string {
        return this.content;
    }
}
