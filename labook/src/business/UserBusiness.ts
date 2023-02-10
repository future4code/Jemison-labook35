import { UserDatabase } from './../data/UserDatabase';
import { IdGenerator } from './../services/IdGeneration';

export class UserBusiness {

    userDatabase = new UserDatabase

    public createUser = async (input: any) => {

        try {
            const { name, email, password } = input

            if (
                !name ||
                !email ||
                !password
            ) {
                throw new Error("Preencha todos os campos");
            }

            const id = IdGenerator.generateId()

            await this.userDatabase.createUser({
                id,
                name,
                email,
                password
            })

        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    public getUsers = async () => {

        try {
            console.log("Tudo Certo")
            return await this.userDatabase.getUsers()

        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}