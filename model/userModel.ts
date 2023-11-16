import { mongoClient } from "../config/connectDB";

export default class UserAuth  {
    public createdAt: Date;
    public updatedAt: Date;
    constructor(public readonly email: string , public name: string, public phone: number) {
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    static getModel() {
        return mongoClient.db("test").collection<UserAuth>("users");
    }
}
