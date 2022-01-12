import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = (props) => {
  return (
    <div className="nav-content">
      <ul className="nav-title">
        <Link to="/">Users Directory</Link>
      </ul>
      <ul className="nav-links">
        <Link to="/users/view">View Users</Link>
        <Link to="/users/register">Register</Link>
        <Link to="/users/login">Login</Link>
      </ul>
    </div>
  );
};
