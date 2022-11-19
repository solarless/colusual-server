import { Role } from "./Role";
import { RolePermission } from "./RolePermission";

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

    public addRole(role: Role): void {
        this.roles.push(role);
    }

    public hasPermission(permission: RolePermission): boolean {
        let permissions = new Array<RolePermission>();
        this.roles.forEach(r => permissions = permissions.concat(r.getPermissions()));
        return permissions.includes(permission);
    }
}
