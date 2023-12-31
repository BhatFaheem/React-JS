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
        // console.log(this.account);
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
            throw error.message || error.toString();
        }
    }
    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error.message || error.toString();
        }
    }
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
            throw error.message || error.toString();

        }
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