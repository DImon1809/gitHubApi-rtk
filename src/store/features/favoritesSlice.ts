import { createSlice, PayloadAction } from "@reduxjs/toolkit";

let initialState: string[] = [];

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    setUsersInFavorites: (state, action: PayloadAction<string>) => {
      state.push(action.payload);
    },

    removeUsersInFavorites: (state, action: PayloadAction<string>) => {
      state = state.filter((elem) => elem !== action.payload);
    },
  },
});

export const { setUsersInFavorites, removeUsersInFavorites } =
  favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
