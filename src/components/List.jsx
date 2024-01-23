import "./List.css";

export default function List({ activities, onDeleteActivity }) {
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
