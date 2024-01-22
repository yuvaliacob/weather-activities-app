import "./Form.css";

export default function Form({ onAddActivity }) {
  function handleAddActivity(event) {
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
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddActivity(data);
    console.log(data);

    event.target.reset();
    event.target.elements.name.focus();
  }

  return (
    <form onAddActivity={handleAddActivity}>
      <h2>Add new activity:</h2>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" id="name" />

      <label htmlFor="weather">Good-weather activity:</label>
      <input type="checkbox" name="weather" id="weather" />

      <button type="submit">Submit</button>
    </form>
  );
}
