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

const isGoodWeather = true;

const apiUrl = "https://example-apis.vercel.app/api/weather/europe";

export default function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  function handleAddActivity(newActivity) {
    setActivities([...activities, { ...newActivity, id: uid() }]);
  }

  const [isGoodWeather, setIsGoodWeather] = useState("");

  // const [weatherIcon, setWeatherIcon] = useState("");
  // => this is our FETCH
  function getWeather() {
    (async () => {
      const response = await fetch(apiUrl);
      const weather = await response.json();

      setIsGoodWeather(weather.isGoodWeather);
      console.log(weather.isGoodWeather);

      if (isGoodWeather === true) {
        // Filter activities for good weather
        const goodWeatherActivities = activities.filter(
          (activity) => activity.weather
        );
        setActivities(goodWeatherActivities);
      } else {
        // Filter activities for bad weather
        const badWeatherActivities = activities.filter(
          (activity) => !activity.weather
        );
        setActivities(badWeatherActivities);
      }

      // setIsGoodWeather(response.ok ? "✅" : "❌");
    })();
  }

  useEffect(() => {
    getWeather();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(getWeather, 5000);

    return () => clearInterval(intervalId);
  }, []);
  // END OF FETCH

  // const filteredActivities = activities.filter(
  //   (activity) => isGoodWeather === activity.weather
  // );
  // console.log("this is our filter:", filteredActivities);

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
