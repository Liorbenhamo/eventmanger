import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "./App";
import { NavLink } from "react-router-dom";
function HomePage() {
  const [outin, setOutin] = useState();
  const [reason, setReason] = useState();
  const [list, setList] = useState([]);
  const {
    setPlusList,
    plusList,
    setMinusList,
    minusList,
    obj1,
    setObj1,
    add,
    setAdd,
    setBalance,
    balance,
    setIncome,
    income,
    setOutcome,
    outcome,
  } = useContext(ThemeContext);
  function change() {
    if (outin === "outcome") {
      const obj = { ofType: "outcome", num: add, description: reason };
      setObj1(obj);
      setList([...list, obj]);
      setMinusList([...minusList, obj]);
      setBalance(balance - add);
      setOutcome(outcome + add);
    } else if (outin === "income") {
      const obj = { ofType: "income", num: add, description: reason };
      setObj1(obj);
      setList([...list, obj]);
      setPlusList([...plusList, obj]);
      setBalance(balance + add);
      setIncome(income + add);
    }
  }
  console.log(list);
  return (
    <div>
      <NavLink to={"/income"}>
        <button>income</button>
      </NavLink>
      <NavLink to={"/outcome"}>
        <button>outcome</button>
      </NavLink>
      <h1>user name</h1>
      <h2>balance</h2>
      <p>{balance}</p>
      <h2>income</h2>
      <p>{income}</p>
      <h2>outcome</h2>
      <p>{outcome}</p>
      <select onChange={(e) => setOutin(e.target.value)}>
        <option value="none">none</option>
        <option value="outcome">outcome</option>
        <option value="income">income</option>
      </select>
      <input type="number" onChange={(e) => setAdd(Number(e.target.value))} />
      <input type="text" onChange={(e) => setReason(e.target.value)} />
      <button onClick={() => change()}>button</button>
      <ul>
        {list.map((event) => {
          return (
            <li>
              <div>
                <span>{event.ofType}</span>
                <span>" "</span>
                <span>{event.num}</span>
                <span>" "</span>
                <span>{event.description}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default HomePage;
