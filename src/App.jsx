import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import List from "./components/List";
import { useState, useEffect } from "react";
import "./components/List";

export default function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  const [weather, setWeather] = useState("");

  const [location, setLocation] = useState("Europe");

  const [apiUrl, setApiUrl] = useState(
    "https://example-apis.vercel.app/api/weather/europe"
  );

  function handleChangeLocation(location) {
    setApiUrl(`https://example-apis.vercel.app/api/weather/${location}`);
    console.log(apiUrl);

    switch (location.toLowerCase()) {
      case "sahara":
        setLocation("the Sahara");
        break;
      case "europe":
        setLocation("Europe");
        break;
      case "arctic":
        setLocation("the Arctic");
        break;
      case "rainforest":
        setLocation("the Rainforest");
        break;
    }
  }

  function handleAddActivity(newActivity) {
    const isActivityExists = activities.some(
      (activity) =>
        activity.name.toLowerCase() === newActivity.name.toLowerCase()
    );

    // console.log("Duplicate activity? ", isActivityExists);

    if (isActivityExists) {
      alert(`Activity already exists!`);
    } else {
      setActivities([...activities, { ...newActivity, id: uid() }]);
    }
  }

  async function getWeather() {
    const response = await fetch(apiUrl);
    const weather = await response.json();

    setWeather(weather);
    console.log("Weather object from API: ", weather);
  }

  const condition = weather.condition;
  const temperature = weather.temperature;
  // console.log("Header: condition: ", condition, "temperature: ", temperature);

  useEffect(() => {
    getWeather();
  }, [apiUrl]);

  useEffect(() => {
    const intervalId = setInterval(getWeather, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const goodWeather = weather.isGoodWeather;

  const currentLocation = weather.location;
  console.log("Current location: ", weather.location);

  const goodWeatherActivities = activities.filter(
    (activity) => activity.isForGoodWeather === true
  );
  // console.log("Good weather activities: ", goodWeatherActivities);

  const badWeatherActivities = activities.filter(
    (activity) => activity.isForGoodWeather === false
  );
  // console.log("BAD weather activities: ", badWeatherActivities);

  // console.log("Is the weather good? ", weather.isGoodWeather);

  function handleDeleteActivity(activityToRemove) {
    setActivities(
      activities.filter((activity) => activity.id !== activityToRemove)
    );
  }

  if (!weather) {
    return <h1 style={{ color: "black" }}>Loading...</h1>;
  }
  return (
    <>
      <div className={goodWeather ? "good-weather-bg" : "bad-weather-bg"}>
        <Header
          currentLocation={currentLocation}
          condition={condition}
          temperature={temperature}
          headline={
            <p>
              The weather in{" "}
              {<span className="headline-location">{location}</span>} is{" "}
              {goodWeather
                ? "awesome! Go outside and:"
                : "terrible! Here's what you can do indoors:"}
            </p>
          }
          onChangeLocation={handleChangeLocation}
        />
        <main>
          <List
            activities={
              goodWeather ? goodWeatherActivities : badWeatherActivities
            }
            onDeleteActivity={handleDeleteActivity}
            goodWeather={goodWeather}
          />
          <Form onAddActivity={handleAddActivity} />
        </main>
      </div>
    </>
  );
}
