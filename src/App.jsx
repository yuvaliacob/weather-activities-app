import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

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

export default function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

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
