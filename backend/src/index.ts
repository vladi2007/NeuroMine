import express from "express";
import "dotenv/config";
import cors from "cors";
import gameRouter from "./routes/game.routes.js";
import { sequelize } from "./db/sequelize.js";

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: [
      "https://sketchily-fortuitous-phoebe.cloudpub.ru",
      "http://localhost:5173"
    ],
    credentials: true,
  })
);
app.use("/", gameRouter);
async function start() {
  try {
    await sequelize.authenticate();
    

    console.log("DB connected");


    

    app.listen(6000, () => {
      console.log("Backend running on 6000");
    });
  } catch (e) {
    console.error(e);
  }
}

start();
