import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  currentRound: 1,
  okey: null,
  playerTiles: {},
  tiles: [],
  playOrder: [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1],
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setCurrentRound(state, action) {
      state.currentRound = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    setOkey(state, action) {
      state.okey = action.payload;
    },
    setPlayerTiles(state, action) {
      state.playerTiles = action.payload;
    },
    setTiles(state, action) {
      state.tiles = action.payload;
    },
  },
});

export const gameActions = gameSlice.actions;

export default gameSlice.reducer;
