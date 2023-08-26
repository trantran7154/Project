import dotenv from 'dotenv';
dotenv.config();

const environment = process.env.NODE_ENV || 'development';
const envFilePath = environment === 'production' ? '.env.production' : environment == 'test' ? '.env.test' : '.env.development';
dotenv.config({ path: envFilePath });

class Default {
    public _PORT = String(process.env.PORT);
    public _ENV_NODE = environment;
    public _MONGO_DBNAME = String(process.env.MONGO_DBNAME);
}

export default new Default()