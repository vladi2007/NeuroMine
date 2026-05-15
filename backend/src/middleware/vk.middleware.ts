import crypto from "crypto";
import querystring from "querystring";
import type { Request, Response, NextFunction } from "express";

export function verifyVK(req: Request, res: Response, next: NextFunction) {
  const secret = process.env.VK_SECRET;

  if (!secret) {
    return res.status(500).json({ error: "VK_SECRET missing" });
  }

  try {
    const launchParamsRaw =
      req.query.launchParams || req.body.launchParams;

    if (!launchParamsRaw) {
      return res.status(400).json({ error: "Missing launchParams" });
    }

    // 💥 decode base64 JSON
    const data = JSON.parse(
      Buffer.from(String(launchParamsRaw), "base64").toString("utf-8")
    );

    const { sign, ...rest } = data;

    if (!sign) {
      return res.status(400).json({ error: "Missing sign (inside launchParams)" });
    }

    // берём ВСЕ vk_*
    const vkParams = Object.fromEntries(
      Object.entries(rest)
        .filter(([k]) => k.startsWith("vk_"))
        .map(([k, v]) => [k, String(v)])
    );

    if (!Object.keys(vkParams).length) {
      return res.status(400).json({ error: "No vk_* params" });
    }

    // ksort
    const sorted = Object.keys(vkParams)
      .sort()
      .reduce<Record<string, string>>((acc, key) => {
        acc[key] = vkParams[key]!;
        return acc;
      }, {});

    // http_build_query
    const queryString = querystring.stringify(sorted);

    // HMAC SHA256
    const expectedSign = crypto
      .createHmac("sha256", secret)
      .update(queryString)
      .digest("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");

    console.log("STRING:", queryString);
    console.log("EXPECTED:", expectedSign);
    console.log("REAL:", sign);

    if (expectedSign !== sign) {
      return res.status(403).json({ error: "Invalid sign" });
    }

    // ts check
    const now = Math.floor(Date.now() / 1000);
    const ts = Number(data.vk_ts);

    if (!ts || now - ts > 3600) {
      return res.status(403).json({ error: "Expired" });
    }
(req as any).vk = data;

next();
  } catch (e) {
    console.error(e);
    return res.status(400).json({ error: "Bad launchParams" });
  }
}