import { useState } from "react";
import { uid } from "uid";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./components/Form";

export default function App() {
  const [activities, setActivities] = useState("");

  function handleAddActivity(newActivity) {
    setActivities([...activities, { ...newActivity, id: uid() }]);
  }

  return (
    <>
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}
