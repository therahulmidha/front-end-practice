import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import UserContext from "../../store/user-context";

export const ProtectedRoute = (props) => {
  const context = useContext(UserContext);
  return (
    <Fragment>
      {context.isLoggedIn ? (
        props.children
      ) : (
        <div className="content">
          <Redirect to="/" />
        </div>
      )}
    </Fragment>
  );
};
