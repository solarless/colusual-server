import { Role } from "./Role";

export class User {

    public constructor(
        private readonly id: string,
        private name: string,
        private readonly roles: Array<Role>,
    ) {}

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getRoles(): Array<Role> {
        return this.roles;
    }
}
