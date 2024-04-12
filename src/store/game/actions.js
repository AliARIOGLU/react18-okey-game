import { gameActions } from "./index";
import store from "../index";

export const setStatus = (status) =>
  store.dispatch(gameActions.setStatus(status));

export const setCurrentRound = (currentRound) =>
  store.dispatch(gameActions.setCurrentRound(currentRound));

export const setOkey = (okey) => store.dispatch(gameActions.setOkey(okey));

export const setPlayerTiles = (playerTiles) =>
  store.dispatch(gameActions.setPlayerTiles(playerTiles));

export const setTiles = (restTiles) =>
  store.dispatch(gameActions.setTiles(restTiles));
