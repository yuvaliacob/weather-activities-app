import "./Form.css";

export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formElements = event.target.elements;

    const formInput = {
      name: formElements.name.value,
      isForGoodWeather: formElements.weather.checked,
    };

    console.log("new form input: ", formInput);

    onAddActivity(formInput);

    event.target.reset();
    event.target.elements.name.focus();
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Add new activity</h2>
      <div className="form-field-name">
        <label htmlFor="name">Activity name</label>
        <input type="text" name="name" id="name" required />
      </div>
      <div className="form-field-weather">
        <label htmlFor="weather">For good weather?</label>
        <input type="checkbox" name="weather" id="weather" />
      </div>
      <button type="submit" className="submit" id="submit">
        Submit
      </button>
    </form>
  );
}
