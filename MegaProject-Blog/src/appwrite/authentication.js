/* eslint-disable no-useless-catch */
import { Account, Client, ID } from 'appwrite';
import conf from "../conf/conf";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client.
            setEndpoint(conf.appwriteUrl).
            setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.login({ email, password });
            }
            else {
                return userAccount;
            }

        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getAccountUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Error", error);
        }
        return null;
    }
    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService();
export default authService