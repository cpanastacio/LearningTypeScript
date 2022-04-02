import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import todoRoutes from './routes'

const server: Express = express();

const PORT: string | number = process.env.PORT || 4000;

server.use(express.json())
server.use(cors());
server.use(todoRoutes)

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.zgoi4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose
    .connect(uri)
    .then(() => {
        server.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        })
    }).catch(error => {
        throw error
    })