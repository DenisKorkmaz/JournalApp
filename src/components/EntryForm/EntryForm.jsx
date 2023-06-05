import './EntryForm.css';

export function EntryForm() {
  return (
    <div className="entry-form">
      <input className="entry-form__input" placeholder="Motto" />
      <textarea className="entry-form__textarea" placeholder="Notes" />
      <button className="entry-form__button">Submit</button>
    </div>
  );
}
