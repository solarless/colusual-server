export class MessagePublishingDto {

    public constructor(
        private readonly senderId: string,
        private readonly roomId: string,
        private readonly content: string,
    ) {}

    public getSenderId(): string {
        return this.senderId;
    }

    public getRoomId(): string {
        return this.roomId;
    }

    public getContent(): string {
        return this.content;
    }
}
