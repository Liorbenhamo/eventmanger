//  use context
import { useContext } from "react";
import { useState } from "react";
// useContext ThemeContext is the name of the context can be everything
import { ThemeContext } from "./App";
import "./eventmanger.css";
function EveMenager() {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  //  use context
  const { newEvent, setNewEvent } = useContext(ThemeContext);

  function TakeData() {
    setNewEvent([
      ...newEvent,
      {
        name: name,
        description: description,
        startDate: startDate,
        endDate: endDate,
      },
    ]);
  }
  return (
    <div>
      <h1>event manger</h1>
      <div id="eventmangerdiv">
        <input
          required
          placeholder="name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          required
          placeholder="description"
          type="text"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          required
          placeholder="start date"
          type="date"
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          required
          placeholder="end date"
          type="date"
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button id="button1" onClick={TakeData}>
          add new event
        </button>
      </div>
    </div>
  );
}
export default EveMenager;
