import React, { FC } from "react";

import {
  setUsersInFavorites,
  removeUsersInFavorites,
} from "../../store/features/favoritesSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootType } from "../../store";

import "./SearchItem.scss";

export interface IItem {
  count: number;
  login: string;
  url: string;
  requestRepos?: (login: string) => Promise<void>;
}

const SearchItem: FC<IItem> = ({ count, login, url, requestRepos }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootType) => state.favorites);

  const addToFavorites = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();

    dispatch(removeUsersInFavorites(login));
  };

  const removeToFavorites = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    event.preventDefault();

    dispatch(setUsersInFavorites(login));
  };

  return (
    <div className="search-item">
      <div className="count-wrapper">{count}</div>
      <div className="search-item-data">
        <div className="login-wrapper">{login}</div>
        <div className="url-wrapper">{url}</div>

        {requestRepos && (
          <div className="button-wrapper">
            {favorites.includes(login) ? (
              <button onClick={addToFavorites}>Remove</button>
            ) : (
              <button onClick={removeToFavorites}>Add</button>
            )}

            <button onClick={() => requestRepos(login)}>View repos</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchItem;
