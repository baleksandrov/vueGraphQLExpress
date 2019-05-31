require("dotenv").config();

import express from "express";
import expressGraphQL from "express-graphql";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

import schema from "./graphql";

const app = express();
const PORT = process.env.PORT || "3000";
const db = process.env.MONGODB_URI;

// Connect to MongoDB with Mongoose.
mongoose
    .connect(
        db
    )
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

app.use(
    "/graphql",
    cors(),
    bodyParser.json(),
    expressGraphQL({
        schema,
        graphiql: true
    })
);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
