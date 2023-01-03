import { useContext } from "react";
import { ThemeContext } from "./App";
import { NavLink } from "react-router-dom";

function OutCome() {
  const { minusList } = useContext(ThemeContext);

  return (
    <div>
      <ul>
        {minusList.map((event) => {
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
      <NavLink to={"/"}>
        <button>home</button>
      </NavLink>
    </div>
  );
}
export default OutCome;
