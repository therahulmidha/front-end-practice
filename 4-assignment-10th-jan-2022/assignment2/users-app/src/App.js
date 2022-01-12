import { Fragment } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { ViewUsers } from "./components/ViewUsers/ViewUsers";
import { NotFound } from "./components/NotFound/NotFound";
import { Navbar } from "./components/Navbar/Navbar";
import { Welcome } from "./components/Welcome/Welcome";

function App() {
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
        <Route path="/users/register">
          <Register />
        </Route>
        <Route path="/users/view">
          <ViewUsers />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
