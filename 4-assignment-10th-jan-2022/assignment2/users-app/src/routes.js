import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { ViewUsers } from "./components/ViewUsers/ViewUsers";
import { NotFound } from "./components/NotFound/NotFound";
import { Welcome } from "./components/Welcome/Welcome";

export const routes = [
  {
    path: "/",
    exact: true,
    jsx: <Welcome />,
  },
  {
    path: "/users/login",
    jsx: <Login />,
  },
  {
    path: "/users/logout",
    jsx: <Welcome />,
  },
  {
    path: "/users/register",
    jsx: <Register />,
  },
  {
    path: "/users/view",
    jsx: <ViewUsers />,
    loginCheckRequired: true,
  },
  {
    path: "*",
    jsx: <NotFound />,
  },
];
