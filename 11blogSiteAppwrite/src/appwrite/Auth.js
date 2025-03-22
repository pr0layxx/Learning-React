import config from "../config/config";
import { Client, Account, ID } from "appwrite";

class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appWriteUrl)
      .setProject(config.appWriteProjectId);

    this.account = new Account(this.client);
  }

  async createAccount({ email, pasword, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        "password"
      );
      if (userAccount) {
        //call another method
        return this.logIn(email, pasword);
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async logIn({ email, pasword }) {
    try {
      return await this.account.createEmailPasswordSession(email, pasword);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: error", error);
    }
    return null;
  }

  async logOut() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite service :: logOut :: error", error);
    }
  }
}

const authService = new AuthService();
export default authService;
