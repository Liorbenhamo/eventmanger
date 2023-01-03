import { useContext } from "react";
import { ThemeContext } from "./App";
import "./eventList.css";
function EventList() {
  const { newEvent, setNewEvent } = useContext(ThemeContext);
  function deleteEvent(indexEvent) {
    const list = newEvent;
    list.splice(indexEvent, 1);
    setNewEvent([...list]);
  }
  return (
    <div>
      <ul>
        {newEvent.map((event, indexEvent) => {
          return (
            <div id="listdiv">
              <ul>
                <li>{event.name}</li>
                <li>{event.description}</li>
                <li>{event.startDate}</li>
                <li>{event.endDate}</li>
              </ul>
              <button>edit</button>
              <button onClick={() => deleteEvent(indexEvent)}>delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
export default EventList;
