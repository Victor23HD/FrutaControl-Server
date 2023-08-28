import mongoose from "mongoose";
import "dotenv/config";

const user = process.env.DB_USER;
const password = process.env.DB_PASS;


mongoose.connect(`mongodb+srv://${user}:${password}@cluster0.qvfkmgt.mongodb.net/?retryWrites=true&w=majority`);

const database = mongoose.connection;

export default database;