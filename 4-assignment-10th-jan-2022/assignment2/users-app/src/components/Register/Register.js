import { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../store/user-context";
import "./Register.css";

export const Register = (props) => {
  const context = useContext(UserContext);
  const usernameRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();

  const registerSubmitHandler = (event) => {
    event.preventDefault();
    const usernameValue = usernameRef.current.value;
    const passwordValue = passwordRef.current.value;
    const userExists = context.users.find(
      (user) => user.username === usernameValue
    );
    if (userExists) {
      alert("Username already exists");
    } else {
      context.addUser(usernameValue, passwordValue);
      alert("User Registered Successfully");
      history.push("/");
    }
  };
  return (
    <div className="content">
      <form className="register-form" onSubmit={registerSubmitHandler}>
        <label>User Name </label>
        <input name="username" ref={usernameRef} required />
        <label>Password </label>
        <input name="password" type="password" ref={passwordRef} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
