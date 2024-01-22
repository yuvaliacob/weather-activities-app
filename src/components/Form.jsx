import "./Form.css";

export default function Form({ onAddActivity }) {
  function handleAddActivity(event) {
    event.preventDefault();
    // function creates the data name and email from the form below
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const formInput = {
      name: data.name.value,
      isForGoodWeather: data.weather.checked,
    };

    // calls the prop-function from App.js and passes the created data name and email as arguments (lifts up)
    onAddActivity(formInput);

    event.target.reset();
    event.target.elements.name.focus();
  }

  return (
    <form className="form">
      <h2 className="entry-form__title">Add new activity:</h2>
      <label htmlFor="motto">Name:</label>
      <input type="text" name="name" id="name" />

      <label htmlFor="notes">Good-weather activity:</label>
      <input type="checkbox" name="weather" id="weather" />

      <button type="submit" onAddActivity={handleAddActivity}>
        Submit
      </button>
    </form>
  );
}
