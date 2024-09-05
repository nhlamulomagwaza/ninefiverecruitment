import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6679c11800230c5e3540'); 

export const account = new Account(client);
export { ID } from 'appwrite';
