import { tableActions } from ".";
import store from "../index";

export const setPlayer = (seatId, player) =>
  store.dispatch(tableActions.setPlayer({ seatId, player }));

export const setPlayers = (players) =>
  store.dispatch(tableActions.setPlayers(players));

export const setActivaPlayer = (player) =>
  store.dispatch(tableActions.setActivaPlayer(player));

export const setReady = () => store.dispatch(tableActions.setReady(true));
