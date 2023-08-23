import mongoose from "mongoose";
import "dotenv/config";

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@cluster0.qvfkmgt.mongodb.net/?retryWrites=true&w=majority`);

const database = mongoose.connection;

export default database;