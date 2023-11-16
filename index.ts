import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";

import userRouter from "./routes/userRouter";
import { dbConnect } from "./config/connectDB";

//////////VARIABLES

const PORT = process.env.PORT;
const app = express();
app.use(express.json({}));

//////////VARIABLES

//////////DATABASE

dbConnect();

//////////DATABASE

app.use(
    cors({
        credentials: true,
        origin: ["http://localhost:3000"],
    })
);

//////////routes

app.use("/user", userRouter);

//////////routes

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
