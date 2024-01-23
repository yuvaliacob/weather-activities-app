import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import List from "./components/List";
import { useState, useEffect } from "react";

// {
//   id: 45454,
//   Name: "Tillmann",
//   isForGoodWeather: true,
// },

// const [activities, setActivities] = useLocalStorageState("activities", {
//   defaultValue: [];
// });
// const [filter, setFilter] = useLocalStorageState("filter", {
//   defaultValue: "all",
// });

const apiUrl = "https://example-apis.vercel.app/api/weather/europe";

export default function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  const [isGoodWeather, setIsGoodWeather] = useState("");

  // const [weatherIcon, setWeatherIcon] = useState("");

  function getWeather() {
    (async () => {
      const response = await fetch(apiUrl);
      const weather = await response.json();

      setIsGoodWeather(weather.isGoodWeather);
      console.log(weather.isGoodWeather);

      // setIsGoodWeather(response.ok ? "✅" : "❌");
    })();
  }

  useEffect(() => {
    const intervalId = setInterval(getWeather, 5000);

    return () => clearInterval(intervalId);
  }, []);

  function handleAddActivity(newActivity) {
    setActivities([...activities, { ...newActivity, id: uid() }]);
  }

  // const goodWeatherActivities = activities.filter(
  //   (activity) => activity.weather.checked
  // );
  // console.log(goodWeatherActivities);

  // const badWeatherActivities = activities.filter(
  //   (activity) => activity.weather.checked
  // );
  // console.log(badWeatherActivities);

  return (
    <main>
      <Header />
      <List activities={activities} />
      <Form onAddActivity={handleAddActivity} />
    </main>
  );
}
