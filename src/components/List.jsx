import "./List.css";
import { useEffect } from "react";

export default function List({ activities, onDeleteActivity, goodWeather }) {
  useEffect(() => {
    const liElements = document.querySelectorAll("li");
    const buttonElements = document.querySelectorAll("button");

    liElements.forEach((li) => {
      if (goodWeather) {
        li.classList.add("good-weather-li");
        li.classList.remove("bad-weather-li");
      } else {
        li.classList.add("bad-weather-li");
        li.classList.remove("good-weather-li");
      }
    });

    buttonElements.forEach((button) => {
      if (
        button.id !== "submit" &&
        button.id !== "europe" &&
        button.id !== "arctic" &&
        button.id !== "sahara" &&
        button.id !== "rainforest"
      ) {
        if (goodWeather) {
          button.classList.add("good-weather-list-button");
          button.classList.remove("bad-weather-list-button");
        } else {
          button.classList.add("bad-weather-list-button");
          button.classList.remove("good-weather-list-button");
        }
      }
    });
  }, [goodWeather, activities]);

  return (
    <>
      <ul className="list">
        {activities.map((activity) => (
          <li key={activity.id}>
            <h3>{activity.name}</h3>
            <button
              type="button"
              aria-label="delete list item"
              onClick={() => onDeleteActivity(activity.id)}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
      <div className="separator"></div>
    </>
  );
}
