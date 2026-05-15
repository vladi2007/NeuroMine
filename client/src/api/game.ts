import { api } from "./axios";
import { type GameStateResponse, type TapResponse } from "@/types/game.types";

export async function getState(): Promise<GameStateResponse> {
  const res = await api.get<GameStateResponse>("/api/state");
  return res.data;
}

export async function tap(count: number): Promise<TapResponse> {
  const res = await api.post<TapResponse>("/api/tap", { count });
  return res.data;
}