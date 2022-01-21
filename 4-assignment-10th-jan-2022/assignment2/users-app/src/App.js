import { Fragment } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { routes } from "./routes";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        {routes.map((mapping) => (
          <Route path={mapping.path} exact={mapping.exact}>
            {mapping.loginCheckRequired ? (
              <ProtectedRoute>{mapping.jsx}</ProtectedRoute>
            ) : (
              mapping.jsx
            )}
          </Route>
        ))}
      </Switch>
    </Fragment>
  );
}

export default App;
