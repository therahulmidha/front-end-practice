import { Fragment, useContext } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { ViewUsers } from "./components/ViewUsers/ViewUsers";
import { NotFound } from "./components/NotFound/NotFound";
import { Navbar } from "./components/Navbar/Navbar";
import { Welcome } from "./components/Welcome/Welcome";
import { Logout } from "./components/Logout/Logout";
import UserContext from "./store/user-context";

function App() {
  const context = useContext(UserContext);
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Welcome />
        </Route>
        <Route path="/users/login">
          <Login />
        </Route>
        <Route path="/users/logout">
          <Welcome />
        </Route>
        <Route path="/users/register">
          <Register />
        </Route>
        <Route path="/users/view">
          {context.isLoggedIn ? (
            <ViewUsers />
          ) : (
            <div className="content">
              <Redirect to="/" />
            </div>
          )}
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
