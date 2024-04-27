import { FC } from "react";

import { useSelector } from "react-redux";
import { RootType } from "../../store";

import "./FavoritesPage.scss";

const FavoritesPage: FC = () => {
  const favorites = useSelector((state: RootType) => state.favorites);

  return (
    <div className="favorites-wrapper">
      {favorites.map((favorite, index) => (
        <div className="favorite" key={index}>
          <a href={`https://github.com/${favorite}`} target="_blank">
            {favorite}
          </a>
        </div>
      ))}
    </div>
  );
};

export default FavoritesPage;
