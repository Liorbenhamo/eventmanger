import { useContext, useState } from "react";
import { ThemeContext } from "./App";
import { NavLink } from "react-router-dom";

function InCome() {
  const { plusList, setPlusList } = useContext(ThemeContext);
  console.log(plusList);
  return (
    <div>
      <ul>
        {/* הוא לא מקבל את הערך מאפ פלוס ליסט סתם משתנה לא באמת שווה להגדרה באפ */}
        {plusList.map((event) => {
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
export default InCome;
