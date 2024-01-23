import "./List.css";
import { useEffect } from "react";

export default function List({ activities, onDeleteActivity, goodWeather }) {
  useEffect(() => {
    const liElements = document.querySelectorAll("li");

    liElements.forEach((li) => {
      if (goodWeather) {
        li.classList.add("good-weather-li");
        li.classList.remove("bad-weather-li");
      } else {
        li.classList.add("bad-weather-li");
        li.classList.remove("good-weather-li");
      }
    });
  }, [goodWeather]);

  return (
    <>
      <ul className="list">
        {activities.map((activity) => (
          <li key={activity.id}>
            <h3>{activity.name}</h3>
            <button
              className="tag-list__item-button"
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
