import "./Form.css";

export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    // event.preventDefault();
    // // function creates the data name and email from the form below
    // const formData = new FormData(event.target);
    // const data = Object.fromEntries(formData);
    // const formInput = {
    //   name: data.name.value,
    //   isForGoodWeather: data.weather.checked,
    // };

    // console.log(formInput);

    // // calls the prop-function from App.js and passes the created data name and email as arguments (lifts up)
    // onAddActivity(formInput);

    // event.target.reset();
    // event.target.elements.name.focus();

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
      <button type="submit" className="submit">
        Submit
      </button>
    </form>
  );
}
