import dotenv from 'dotenv';
import { join } from 'path';
const environment = process.env.ENVIRONMENT

if (!(environment == 'OrangeHRM')) throw new Error(`>> Selected environment::${environment} is not proper env, Please a valid environment `)

dotenv.config({
    path: join(process.cwd(), 'source', 'env', `${environment}.env`)
})

export const WebApp = {
    APP_URL: process.env.BASE_URL as string
};