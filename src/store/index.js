import { configureStore } from "@reduxjs/toolkit";

import table from "./table";
import game from "./game";

const store = configureStore({
  reducer: {
    table,
    game,
  },
});

export default store;
