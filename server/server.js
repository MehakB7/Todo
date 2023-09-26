const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const { strategy } = require("./Config/Passport");
const passport = require("passport");
const { userRouter } = require("./routes/user");
const { todoRouter } = require("./routes/todo");

require("dotenv").config();

const app = express();

const connection = mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((m) => m.connection.getClient());

const sessionStore = new MongoStore({
  clientPromise: connection,
  collection: "sessions",
});

app.use(
  session({
    secret: "Hheheh",
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
passport.use(strategy);

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", userRouter);
app.use("/todo", todoRouter);

app.listen(4000, () => {
  console.log("server start listening to port");
});
