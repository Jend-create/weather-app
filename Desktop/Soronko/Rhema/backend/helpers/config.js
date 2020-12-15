require('dotenv').config()


let MONGODB_URI;
const MONGOOSE_OPTIONS = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}


switch (process.env.NODE_ENV) {
    case "development":
        MONGODB_URI = process.env.MONGODB_DEV_URI;
        break;

    case "production":
        MONGODB_URI = process.env.MONGODB_PROD_URI;
        break;
    
    default:
        throw ("No environment specified")
}

const PORT = process.env.PORT
const JWT_SECRET = process.env.JWT_SECRET; 



module.exports = {
    MONGODB_URI, 
    MONGOOSE_OPTIONS,
    PORT,
    JWT_SECRET
}
