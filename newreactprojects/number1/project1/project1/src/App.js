import { createContext, useState } from "react";
import "./App.css";
import HomePage from "./HomePage";
import InCome from "./InCome";
import OutCome from "./OutCome";
import { Route, Routes } from "react-router-dom";
export const ThemeContext = createContext();
function App() {
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [outcome, setOutcome] = useState(0);
  const [add, setAdd] = useState(0);
  const [obj1, setObj1] = useState({});
  const [minusList, setMinusList] = useState([]);
  const [plusList, setPlusList] = useState([]);
  return (
    <ThemeContext.Provider
      value={{
        minusList,
        setMinusList,
        plusList,
        setPlusList,
        obj1,
        setObj1,
        balance,
        setBalance,
        income,
        setIncome,
        outcome,
        add,
        setAdd,
        setOutcome,
      }}
    >
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/income" element={<InCome />}></Route>
          <Route path="/outcome" element={<OutCome />}></Route>
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
