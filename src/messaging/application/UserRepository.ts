import { User } from "../core/User";

export interface UserRepository {

    findOne(userId: string): Promise<User>;
    findAll(): Promise<Array<User>>;
    save(user: User): Promise<void>;
}
