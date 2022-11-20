import * as uuid from "uuid";
import { IdGenerator } from "../application/IdGenerator";

export class UuidIdGenerator implements IdGenerator {

    public async generateId(): Promise<string> {
        return uuid.v4();
    }
}
