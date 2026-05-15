import express from "express";
import "dotenv/config";

import { sequelize } from "./db/sequelize.js";
import { User } from "./models/User.js";

const app = express();
app.use(express.json());

async function start() {
  try {
    await sequelize.authenticate();
    await sequelize.sync(); // dev only

    console.log("DB connected");

    app.get("/users", async (_, res) => {
      const users = await User.findAll();
      res.json(users);
    });

    app.post("/users", async (req, res) => {
      const user = await User.create(req.body);
      res.json(user);
    });

    app.listen(6000, () => {
      console.log("Backend running on 6000");
    });
  } catch (e) {
    console.error(e);
  }
}

start();