import { useGame } from "../../../store/game/hooks";
import { useTable } from "../../../store/table/hooks";
import { Tile } from "../tile";

export const Istaka = () => {
  const { playerTiles } = useGame();
  const { activePlayer } = useTable();

  const activePlayerTiles = playerTiles[activePlayer];

  return (
    <div className="flex flex-col w-[1100px] rounded h-[200px] bg-orange-400 border-t-[4px] border-l-[10px] border-r-[10px] border-b-[20px] shadow-lg">
      <div className="flex-1 grid grid-cols-16 gap-0.5">
        {activePlayerTiles?.map((tile, index) => (
          <Tile key={index} tile={tile} />
        ))}
      </div>
      <div className="flex-1 grid grid-cols-16 gap-0.5"></div>
    </div>
  );
};
