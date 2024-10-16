import  {connect} from 'mongoose'
import { config } from 'dotenv'
config()

export async function connectToDatabase() {
    try {
        await connect(process.env.MONGO_URL)
    } catch (error) {
            console.log(error);
            throw new Error("cannot connect to database")
    }
}