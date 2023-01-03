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
              <ul key={indexEvent}>
                <li key={"indexEvent" + "name"}>{event.name}</li>
                <li key={"indexEvent" + "startdate"}>{event.startDate}</li>
                <li key={"indexEvent" + "enddate"}>{event.endDate}</li>
                <li key={"indexEvent" + "description"}>{event.description}</li>
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
