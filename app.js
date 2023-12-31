import express from 'express';
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";
import ItemRoutes from "./items/routes.js";
import CommentRoutes from "./comments/routes.js";
import FollowRoutes from "./follows/routes.js";
import cors from "cors";
import "dotenv/config";
import session from "express-session";
import OnlineItemRoutes from "./onlineItems/routes.js";
const CONNECTION_STRING = 'mongodb+srv://huajinglu0312:cerf0312*@cluster0.99a5v7l.mongodb.net/project?retryWrites=true&w=majority'
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(cors({
    origin: process.env.NODE_ENV === 'production' ? "https://magnificent-treacle-96f77f.netlify.app" : "http://localhost:3000",
    credentials: true,
    preflightContinue: false,
}));
app.use(express.json());
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: true,

};
if (process.env.NODE_ENV !== "production") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        httpOnly: true,
    };
} else {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: 'none',
        secure: true,
    };
}

app.use(
    session(sessionOptions)
);


//const CONNECTION_STRING = 'mongodb://127.0.0.1:27017/project'

app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
UserRoutes(app);
ItemRoutes(app);
CommentRoutes(app);
FollowRoutes(app);
OnlineItemRoutes(app);
app.listen(process.env.PORT || 4000);