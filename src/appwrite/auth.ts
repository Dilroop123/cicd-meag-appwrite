import { Client, Account, ID } from "appwrite";
import config from "../config/config";

export type CreateAccount = {
    email: string;
    password: string;
    name: string;
}

export type LoginAccount = {
    email: string;
    password: string;
}

class AuthService {
    client = new Client();
    account;


    constructor() {
        this.client.setProject(config?.appwriteProjectId).setEndpoint(config?.appwriteUrl);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }: CreateAccount) {

        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            //      console.log(userAccount);
            if (userAccount) {
                // if created succesfully , login the user directly
                this.loginAccount({ email, password });
            } else {
                return userAccount;
            }


        } catch (err: any) {
            throw err;
        }
    }

    async loginAccount({ email, password }: LoginAccount) {

        try {
            const promise = await this.account.createEmailPasswordSession(email, password);
            return promise;

        } catch (err: any) {
            throw err;
        }

    }

    async getCurrentUser() {
        try {
            const promise = await this.account.get();
            return promise;
        } catch (error) {
            console.log(error);
        }
        return null;
    }

    async logout() {
        try {
            const promise = await this.account.deleteSessions();
            return promise;
        } catch (error) {
            throw error;
        }
    }

}

const authService = new AuthService();
export default authService;