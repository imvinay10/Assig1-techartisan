import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./reducer";
import { localStorageMiddleWare } from "./middleware";

const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleWare),
});

export default store;
