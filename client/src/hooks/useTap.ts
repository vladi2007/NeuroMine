import { useMutation, useQueryClient } from "@tanstack/react-query";
import { tap } from "@/api/game";

export function useTap() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (count: number) => tap(count),

    onMutate: async (count) => {
      await queryClient.cancelQueries({ queryKey: ["state"] });

      const prev = queryClient.getQueryData(["state"]);

      queryClient.setQueryData(["state"], (old: any) => {
        if (!old) return old;
        return {
          ...old,
          coins: old.coins + count * old.tapPower,
        };
      });

      return { prev };
    },

    onError: (_err, _count, context) => {
      queryClient.setQueryData(["state"], context?.prev);
    },

    onSuccess: () => {
      // НЕ делаем invalidate на каждый тап
    },
  });
}