import "./NavBar.css";
import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <div id="navbar">
      <NavLink to={`/`}>
        <button>event manger</button>
      </NavLink>
      <NavLink to={`/allevent`}>
        <button>All the events</button>
      </NavLink>
    </div>
  );
}

export default NavBar;
