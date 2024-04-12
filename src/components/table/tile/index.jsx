import { useGame } from "../../../store/game/hooks";
import { TILE_COLORS } from "../../../utils/constants";

export const Tile = ({ tile, hideOkey = true }) => {
  const { okey } = useGame();

  return (
    <div
      style={{
        color: TILE_COLORS[tile.color],
      }}
      className="h-full w-full rounded-md gap-1 bg-white flex flex-col items-center justify-center"
    >
      {(!(tile.number === okey.number && tile.color === okey.color) ||
        !hideOkey) && (
        <>
          <div className="text-4xl font-extrabold">
            {String(tile.number).includes("FAKE") ? "∑" : tile.number}
          </div>
          <div className="w-10 h-10 text-xl rounded-full shadow-inner flex items-center justify-center">
            ♥
          </div>
        </>
      )}
    </div>
  );
};
