import { useState } from "react";
import { uid } from "uid";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

export default function App() {
  const [activities, setActivities] = useState([
    {
      id: 45454,
      Name: "Tillmann",
      isForGoodWeather: true,
    },
  ]);

  function handleAddActivity(newActivity) {
    setActivities([...activities, { ...newActivity, id: uid() }]);
  }

  return (
    <main>
      <List activities={activities} />
      <Form onAddActivity={handleAddActivity} />
    </main>
  );
}
