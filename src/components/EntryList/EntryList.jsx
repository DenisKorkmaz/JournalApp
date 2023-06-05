import "./EntryList.css";
import FavoriteButton from "../FavButton/FavButton.jsx"

export default function EntryList() {
  return (
    <section className="entry-list">
      <p className="entry-list__date">FEB, 27 2028</p>
      <div className="entry-list__content">
        <p className="entry-list__text">Text content</p>
        <FavoriteButton />
      </div>
    </section>
  );
}
