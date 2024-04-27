import { configureStore } from "@reduxjs/toolkit";

import { githubApi } from "./github/github.api";

import { favoritesReducer } from "./features/favoritesSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,

    favorites: favoritesReducer,
  },

  middleware: (defaultMiddlewares) =>
    defaultMiddlewares().concat(githubApi.middleware),
});

setupListeners(store.dispatch);

export type RootType = ReturnType<typeof store.getState>;
