import mongoose from "mongoose"

mongoose.connect("mongodb+srv://admin:admin123@cluster0.hpmh66t.mongodb.net/Livraria?");

let db = mongoose.connection;

export default db;