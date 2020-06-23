const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();

// Require Ruotes
const gameRouter = require("./routes/game");
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");
const courseRouter = require("./routes/course");
const learnRouter = require("./routes/learn");
//  reuqire App
const app = express();

// Data
mongoose
  .connect(process.env.DB, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connecting database thành công rồi...."));

// Middware
app.use(morgan("dev"));
app.use(bodyParser.json());

// Routes
app.use("/api/game", gameRouter);
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/course", courseRouter);
app.use("/api/learn", learnRouter);

// Connect Server
const port = 5000;
app.listen(port, () => console.log("Kết nối thành công và không có lỗi hé hé"));
