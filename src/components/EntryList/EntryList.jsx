
import "./EntryList.css";
import FavIcon from "./star-filled.svg";

export default function EntryList() {
  return (
    <section className="entry-list">
      <p className="entry-list__date">FEB, 27 2028</p>
      <p className="entry-list__text">Text content</p>
      <button className="entry-list__button">
        <img src={FavIcon} alt="Fav" className="entry-list__button-icon" />
      </button>
    </section>
  );
}
