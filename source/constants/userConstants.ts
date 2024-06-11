import { config } from 'dotenv';
config();

export const USER_CREDENTIALS = {
    OrangeHRM: {
        username: process.env.orangeHRM_userName as string,
        password: process.env.orangeHRM_password as string
    }
}
interface credTemplate {
    username: string,
    password: string
}

export const getCredential = (role: string): credTemplate => {
    const user = USER_CREDENTIALS[role];
    if (!user) throw new Error(`Incorrect role !!`)
    return user;
}