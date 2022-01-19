import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { ViewUsers } from "./components/ViewUsers/ViewUsers";
import { NotFound } from "./components/NotFound/NotFound";
import { Welcome } from "./components/Welcome/Welcome";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";

export const routes = [
  {
    path: "/",
    exact: true,
    jsx: <Welcome />,
  },
  {
    path: "/users/login",
    exact: false,
    jsx: <Login />,
  },
  {
    path: "/users/logout",
    exact: true,
    jsx: <Welcome />,
  },
  {
    path: "/users/register",
    exact: true,
    jsx: <Register />,
  },
  {
    path: "/users/view",
    exact: true,
    jsx: (
      <ProtectedRoute>
        <ViewUsers />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    exact: true,
    jsx: <NotFound />,
  },
];
