import "./App.css";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import EveMenager from "./EveMenager";
import NavBar from "./NavBar";
import EventList from "./EventList";

export const ThemeContext = React.createContext();

export default function App() {
  const [newEvent, setNewEvent] = useState([]);

  return (
    <ThemeContext.Provider value={{ newEvent, setNewEvent }}>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<EveMenager />}></Route>
          <Route path="/allevent" element={<EventList />}></Route>
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}
