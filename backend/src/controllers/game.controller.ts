import type { Response, RequestHandler } from "express";
import { getOrCreateUser } from "../services/user.service.js";


export const tap: RequestHandler = async (req, res) => {
  const vkReq = req as any;

  const vk_id = vkReq.vk?.vk_user_id;

  if (!vk_id) {
    res.status(401).json({ error: "No VK user" });
    return;
  }

  const countRaw = req.body?.count ?? 1;
  const count = Math.max(1, Math.min(Number(countRaw), 10));

  const now = Date.now();

  const user = await getOrCreateUser(vk_id);

  if (now - user.lastTapAt < 50) {
    res.status(429).json({ error: "too fast" });
    return;
  }

  user.lastTapAt = now;
  user.coins += user.tapPower * count;

  await user.save();

  res.json({
    coins: user.coins,
    tapPower: user.tapPower,
  });
};

// 📊 STATE
export const state: RequestHandler = async (req, res) => {
  const vkReq = req as any;

  const vk_id = vkReq.vk?.vk_user_id;

  if (!vk_id) {
    res.status(401).json({ error: "No VK user" });
    return;
  }

  const user = await getOrCreateUser(vk_id);

  res.json({
    coins: user.coins,
    tapPower: user.tapPower,
  });
};