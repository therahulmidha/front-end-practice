import React, { useState } from "react";

const UserContext = React.createContext({
  users: [],
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
  addUser: (username, password) => {},
});

export const UserContextProvider = (props) => {
  const [users, setUsers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  const addUserHandler = (username, password) => {
    setUsers((prevUsers) => {
      return [...prevUsers, { username, password }];
    });
  };

  return (
    <UserContext.Provider
      value={{
        users,
        isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
        addUser: addUserHandler,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
