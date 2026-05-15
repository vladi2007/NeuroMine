import { useQuery } from "@tanstack/react-query";
import { getState } from "@api/game";

export function useGameState() {
  return useQuery({
    queryKey: ["state"],
    queryFn: getState,
  });
}