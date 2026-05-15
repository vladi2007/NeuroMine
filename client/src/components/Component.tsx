import { useGameState } from "@/hooks/useGameState";
import { useTap } from "@/hooks/useTap";

export default function Component() {
  const { data, isLoading } = useGameState();
  const tapMutation = useTap();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Coins: {data?.coins}</h1>
      <h2>TapPower: {data?.tapPower}</h2>

      <button onClick={() => tapMutation.mutate(1)}>
        TAP
      </button>
    </div>
  );
}