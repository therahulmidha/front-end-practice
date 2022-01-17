import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../store/user-context";
import "./Login.css";

export const Login = (props) => {
  const context = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const loginSubmitHandler = (event) => {
    event.preventDefault();
    const usernameValue = username;
    const passwordValue = password;
    const existingUser = context.users.find(
      (user) => user.username === usernameValue
    );
    if (!existingUser) {
      alert("Username does not exists");
    } else if (existingUser.password !== passwordValue) {
      alert("Invalid Password!");
    } else {
      context.onLogin();
      setUsername("");
      setPassword("");
      history.replace("/users/view");
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
      <form className="login-form" onSubmit={loginSubmitHandler}>
        <label>User Name </label>
        <input
          name="username"
          value={username}
          onChange={usernameOnChangeHandler}
          required
        />
        <label>Password </label>
        <input
          name="password"
          type="password"
          value={password}
          required
          onChange={passwordOnChangeHandler}
        />
        <button>Login</button>
      </form>
    </div>
  );
};
