import "./List.css";

export default function List({ activities }) {
  return (
    <>
      <ul className="list">
        {activities.map((activity) => (
          <li key={activity.id}>
            <h3>{activity.name}</h3>
          </li>
        ))}
      </ul>
      <div className="separator"></div>
    </>
  );
}
