import { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../store/user-context";
import "./Login.css";

export const Login = (props) => {
  const context = useContext(UserContext);
  const usernameRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();

  const loginSubmitHandler = (event) => {
    event.preventDefault();
    const usernameValue = usernameRef.current.value;
    const passwordValue = passwordRef.current.value;
    const existingUser = context.users.find(
      (user) => user.username === usernameValue
    );
    if (!existingUser) {
      alert("Username does not exists");
    } else if (existingUser.password !== passwordValue) {
      alert("Invalid Password!");
    } else {
      context.onLogin();
      history.replace("/users/view");
    }
  };
  return (
    <div className="content">
      <form className="login-form" onSubmit={loginSubmitHandler}>
        <label>User Name </label>
        <input name="username" ref={usernameRef} />
        <label>Password </label>
        <input name="password" type="password" ref={passwordRef} />
        <button>Login</button>
      </form>
    </div>
  );
};
