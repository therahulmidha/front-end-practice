import { useContext } from "react";
import { Redirect } from "react-router-dom";
import UserContext from "../../store/user-context";
import "./ViewUsers.css";

export const ViewUsers = (props) => {
  const context = useContext(UserContext);

  return (
    <div className="content">
      {context.users.length > 0 ? (
        <h1>
          Users List:
          {context.users.map((user, index) => (
            <div key={index}>
              <p>
                {index + 1}. {user.username}
              </p>
            </div>
          ))}
        </h1>
      ) : (
        <h1>No Users added yet!</h1>
      )}
    </div>
  );
};
