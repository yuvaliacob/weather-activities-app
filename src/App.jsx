import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import List from "./components/List";
import { useState, useEffect } from "react";

const apiUrl = "https://example-apis.vercel.app/api/weather/europe";

export default function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  const [weather, setWeather] = useState("");

  function handleAddActivity(newActivity) {
    setActivities([...activities, { ...newActivity, id: uid() }]);
  }

  async function getWeather() {
    const response = await fetch(apiUrl);
    const weather = await response.json();

    setWeather(weather);
    console.log("Weather object from API: ", weather);
  }

  useEffect(() => {
    const intervalId = setInterval(getWeather, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const goodWeather = weather.isGoodWeather;

  const goodWeatherActivities = activities.filter(
    (activity) => activity.isForGoodWeather === true
  );
  console.log("Good weather activities: ", goodWeatherActivities);

  const badWeatherActivities = activities.filter(
    (activity) => activity.isForGoodWeather === false
  );
  console.log("BAD weather activities: ", badWeatherActivities);

  console.log("Is the weather good? ", weather.isGoodWeather);

  return (
    <main>
      <Header />
      <List
        activities={goodWeather ? goodWeatherActivities : badWeatherActivities}
      />
      <Form onAddActivity={handleAddActivity} />
    </main>
  );
}
