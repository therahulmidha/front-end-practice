import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../store/user-context";
import "./Register.css";

export const Register = (props) => {
  const context = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const registerSubmitHandler = (event) => {
    event.preventDefault();
    const usernameValue = username;
    const passwordValue = password;
    const userExists = context.users.find(
      (user) => user.username === usernameValue
    );
    if (userExists) {
      alert("Username already exists");
    } else {
      context.addUser(usernameValue, passwordValue);
      alert("User Registered Successfully");
      setUsername("");
      setPassword("");
      history.push("/");
    }
  };

  const usernameOnChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordOnChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  return (
    <div className="content">
      <form className="register-form" onSubmit={registerSubmitHandler}>
        <label>User Name </label>
        <input
          name="username"
          required
          value={username}
          onChange={usernameOnChangeHandler}
        />
        <label>Password </label>
        <input
          name="password"
          type="password"
          value={password}
          required
          onChange={passwordOnChangeHandler}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
