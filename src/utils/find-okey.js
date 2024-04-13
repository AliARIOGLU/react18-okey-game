export function findOkey(mixedTiles, beforeOkey) {
  return mixedTiles.find(
    (tile) =>
      tile.color === beforeOkey.color &&
      tile.number === (beforeOkey.number === 13 ? 1 : beforeOkey.number + 1)
  );
}
