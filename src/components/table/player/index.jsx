import { useGame } from "../../../store/game/hooks";
import { setActivaPlayer } from "../../../store/table/actions";
import { useTable } from "../../../store/table/hooks";
import { Istaka } from "../istaka";

export const Player = ({ seatId, player }) => {
  const { activePlayer } = useTable();
  const { status } = useGame();

  return (
    <>
      <button
        type="button"
        onClick={() => setActivaPlayer(seatId)}
        className="bg-white py-4 px-10 rounded text-black"
      >
        {player.name}
      </button>

      {activePlayer === seatId && status === "playing" && <Istaka />}
    </>
  );
};
