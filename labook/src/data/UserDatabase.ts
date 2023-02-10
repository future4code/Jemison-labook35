import { user } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";
import { CustomError } from './../error/CustomError';

export class UserDatabase extends BaseDatabase {

    private userTable = 'labook_users'

    public createUser = async (user: user) => {

        try {
            UserDatabase.connection.initialize()
            await UserDatabase.connection.insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password
            }).into(this.userTable)
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        } finally {
            console.log("Conexão Encerrada!");
            UserDatabase.connection.destroy();
        }
    }

    public getUsers = async () => {

        try {
            UserDatabase.connection.initialize()
            const allUsers = await UserDatabase.connection.select().from(this.userTable)

            return allUsers;
        } catch (error: any) {
            throw new Error(error.message);
        } finally {
            console.log("Conexão Encerrada!")
            UserDatabase.connection.destroy();
        }
    }
}