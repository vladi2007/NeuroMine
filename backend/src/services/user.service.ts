import { User } from "../models/User.js";

export async function getOrCreateUser(vk_id: number) {
  let user = await User.findOne({ where: { vk_id } });

  if (!user) {
    user = await User.create({
      vk_id,
      coins: 0,
      tapPower: 1,
      lastTapAt: 0,
    });
  }

  return user;
}