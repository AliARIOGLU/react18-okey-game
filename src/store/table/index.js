import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  players: {
    2: {
      name: "Player-2",
    },
    3: {
      name: "Player-3",
    },
    4: {
      name: "Player-4",
    },
  },
  activePlayer: null,
  ready: false,
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setPlayer(state, action) {
      state.players[action.payload.seatId] = action.payload.player;
    },
    setPlayers(state, action) {
      state.players = action.payload;
    },
    setActivaPlayer(state, action) {
      state.activePlayer = action.payload;
    },
    setReady(state, action) {
      state.ready = action.payload;
    },
  },
});

export const tableActions = tableSlice.actions;

export default tableSlice.reducer;
