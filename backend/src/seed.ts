import { sequelize } from "./db/sequelize.js";
import { User } from "./models/User.js";

async function start() {
  await sequelize.authenticate();
  console.log("DB connected");

  await sequelize.sync({ force: true });

  await User.create({ name: "Alex", email: "alex@test.com" });
  await User.create({ name: "John", email: "john@test.com" });

  console.log("Users added");
}

start();