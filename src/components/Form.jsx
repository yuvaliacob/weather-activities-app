import "./Form.css";

export default function Form({ onAddActivity }) {
  return (
    <form className="form">
      <h2 className="entry-form__title">Add new activity:</h2>
      <div className="entry-form__fields">
        <div className="entry-form__field">
          <label htmlFor="motto">Name:</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="entry-form__field">
          <label htmlFor="notes">Good-weather activity:</label>
          <input type="checkbox" name="weather" id="weather" />
        </div>
        <div className="entry-form__button-wrapper">
          <button type="submit" onAddActivity={handleAddActivity}>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
