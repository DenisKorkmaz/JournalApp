import { useState } from "react";
import Star from "../FavButton/star.svg"
import StarFilled from "../FavButton/star-filled.svg"
import "./FavButton.css";

export default function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <button
      className="favorite-button"
      onClick={() => {
        setIsFavorite(!isFavorite);
      }}
      aria-label="favorite"
    >
      {isFavorite ? <img src={StarFilled} alt="filled star"/> : <img src={Star} alt="empty star"/>}
    </button>
  );
}

