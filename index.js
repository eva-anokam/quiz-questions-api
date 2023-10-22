import express from 'express';
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from "cors";
import bcrypt from "bcrypt";
import pkg from 'jsonwebtoken';
const { Jwt } = pkg;

dotenv.config();

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection

database.on("error", (error) => console.log(error))

database.once("connected", () => console.log("Database connected"))


import questionRoutes from './routes/questions.js';
import quizRoutes from "./routes/quiz.js"


const app = express();
const PORT = 5000;

app.use(cors())

app.use(bodyParser.json())



app.use("/quiz", quizRoutes);
app.use("/quiz/q", questionRoutes);

app.get('/', (req, res) => {
    res.send("Hello from homepage")
});

app.listen(PORT, () => {
    console.log(`Server running on port: http://localhost:${PORT}`)
})