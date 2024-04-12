import classNames from "classnames";
import { useTable } from "../../store/table/hooks";
import {
  setActivaPlayer,
  setPlayer,
  setReady,
} from "../../store/table/actions";
import {
  GAME_COUNT,
  PLAYER_COUNT,
  PLAYER_TILE_COUNT,
} from "../../utils/constants";
import { Player } from "./player";
import { useEffect } from "react";
import { useGame } from "../../store/game/hooks";
import {
  setOkey,
  setPlayerTiles,
  setStatus,
  setTiles,
} from "../../store/game/actions";
import tilesJSON from "../../utils/tiles.json";
import { shuffleArray } from "../../utils/shuffle-array";
import { Tile } from "./tile";

export const Table = () => {
  const { players, ready, activePlayer } = useTable();
  const { status, okey, currentRound } = useGame();

  const pattern = {
    1: [3, 4, 1, 2],
    2: [4, 1, 2, 3],
    3: [1, 2, 3, 4],
    4: [2, 3, 4, 1],
  }[activePlayer];

  useEffect(() => {
    if (PLAYER_COUNT === Object.keys(players).length) {
      setReady();
    }
  }, [players]);

  useEffect(() => {
    if (status === "playing") {
      // taşları karıştır
      const mixedTiles = shuffleArray(tilesJSON);
      // okeyi belirle
      const beforeOkey = mixedTiles.pop();
      const okey = mixedTiles.find(
        (tile) =>
          tile.color === beforeOkey.color &&
          tile.number === (beforeOkey.number === 13 ? 1 : beforeOkey.number + 1)
      );
      setOkey(okey);

      // taşları oyunuculara dağıttık
      setPlayerTiles(
        new Array(PLAYER_COUNT).fill().reduce((acc, _, index) => {
          acc[index + 1] = mixedTiles.slice(
            index * PLAYER_TILE_COUNT,
            PLAYER_TILE_COUNT * (index + 1)
          );
          return acc;
        }, {})
      );

      // geriye kalan taşlar setlendi.
      setTiles(mixedTiles.slice(PLAYER_COUNT * PLAYER_TILE_COUNT));
    }
  }, [status]);

  return (
    <div className="w-[1200px] h-[1000px] bg-blue-500 mx-auto my-5 relative">
      {PLAYER_COUNT !== Object.keys(players).length && (
        <p className="absolute top-0 left-0 px-4 h-8 text-sm bg-orange-500 text-white rounded-br flex items-center">
          Oyuna başlamak için{" "}
          <span className="text-emerald-500 text-xl font-bold mx-2">
            {PLAYER_COUNT - Object.keys(players).length}
          </span>{" "}
          adet oyuncu gerekiyor.
        </p>
      )}

      {status === "playing" && (
        <div className="absolute top-4 left-4 text-2xl font-semibold text-white">
          El: {currentRound} / {GAME_COUNT}
        </div>
      )}

      {okey && (
        <div className="absolute top-4 right-4 scale-[.6] flex flex-col items-center gap-2">
          <p className="text-2xl font-semibold text-white underline">Okey</p>
          <div className="w-[65px] h-[87px]">
            <Tile tile={okey} hideOkey={false} />
          </div>
        </div>
      )}

      {ready && status === "idle" && (
        <button
          onClick={() => {
            setStatus("playing");
          }}
          type="button"
          className="absolute w-56 h-56 rounded-full bg-red-500 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center border-2 border-white hover:scale-110 transalation-scale duration-200"
        >
          OYUNU BAŞLAT
        </button>
      )}

      {(pattern || [1, 2, 3, 4]).map((seatId, index) => {
        if (players?.[seatId]) {
          return (
            <div
              key={index}
              className={classNames("absolute", {
                "top-10 left-1/2 -translate-x-1/2": index === 0,
                "top-1/2 right-10 -translate-y-1/2": index === 1,
                "bottom-10 left-1/2 -translate-x-1/2": index === 2,
                "top-1/2 left-10 -translate-y-1/2": index === 3,
              })}
            >
              <Player seatId={seatId} player={players?.[seatId]} />
            </div>
          );
        }

        return (
          <button
            key={index}
            type="button"
            onClick={() => {
              setPlayer(seatId, {
                name: "Ali",
              });
              setActivaPlayer(seatId);
            }}
            className={classNames(
              "absolute text-lg text-white w-52 h-52 rounded-full border border-white flex items-center justify-center",
              {
                "top-10 left-1/2 -translate-x-1/2": index === 0,
                "top-1/2 right-10 -translate-y-1/2": index === 1,
                "bottom-10 left-1/2 -translate-x-1/2": index === 2,
                "top-1/2 left-10 -translate-y-1/2": index === 3,
              }
            )}
          >
            BOŞ {seatId}
          </button>
        );
      })}
    </div>
  );
};
