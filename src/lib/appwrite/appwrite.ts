// lib/appwrite.ts

import { Client, Account, TablesDB } from "appwrite";
import { appwriteConfig } from "./config";

const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint!)
    .setProject(appwriteConfig.projectId!);

export const account = new Account(client);
export const tablesDB = new TablesDB(client);
export { ID } from "appwrite";
