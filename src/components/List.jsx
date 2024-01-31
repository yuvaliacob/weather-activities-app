import "./List.css";
import { useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

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

  // For Drag&Drop:

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const reorderedItems = Array.from(listItems);
    const [removed] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, removed);

    setListItems(reorderedItems);
  };

  //

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="activities">
        {(provided) => (
          <ul
            className="list"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {activities.map((activity, index) => (
              <Draggable
                key={activity.id}
                draggableId={activity.id}
                index={index}
              >
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <h3>{activity.name}</h3>
                    <button
                      type="button"
                      aria-label="delete list item"
                      onClick={() => onDeleteActivity(activity.id)}
                    >
                      ✕
                    </button>
                  </li>
                )}
              </Draggable>
            ))}
            <div className="drag-drop-placeholder">{provided.placeholder}</div>
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}
