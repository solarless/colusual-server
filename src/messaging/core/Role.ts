import { RolePermission } from "./RolePermission";

export class Role {

    public constructor(
        private readonly id: string,
        private name: string,
        private color: string,
        private readonly permissions: Array<RolePermission>,
    ) {}

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getColor(): string {
        return this.color;
    }

    public getPermissions(): Array<RolePermission> {
        return this.permissions;
    }
}
