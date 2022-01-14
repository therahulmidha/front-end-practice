import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import UserContext from "../../store/user-context";
import "./Navbar.css";

export const Navbar = (props) => {
  const context = useContext(UserContext);
  const history = useHistory();
  const logoutHandler = (event) => {
    event.preventDefault();
    context.onLogout();
    history.replace("/");
  };

  return (
    <div className="nav-content">
      <ul className="nav-title nav-items">
        <Link to="/">Users Directory</Link>
      </ul>
      {context.isLoggedIn ? (
        <ul className="nav-links nav-items">
          <Link to="/users/view">View Users</Link>
          <Link to="/users/logout" onClick={logoutHandler}>
            Logout
          </Link>
        </ul>
      ) : (
        <ul className="nav-links nav-items">
          <Link to="/users/register">Register</Link>
          <Link to="/users/login">Login</Link>
        </ul>
      )}
    </div>
  );
};
