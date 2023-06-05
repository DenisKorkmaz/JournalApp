import './Entries.css';

export function Entries() {
  return (
    <ul className="entries">
      <li>
        <a className="entries__link" href="#tab1">All Entries</a>
      </li>
      <li>
        <a className="entries__link" href="#tab2">Favorites</a>
      </li>
    </ul>
  );
}
