import React, { useEffect, useState } from "react";

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

  useEffect(() => {
    const isLoggedInUserStorageValue = localStorage.getItem("isLoggedIn");

    if (isLoggedInUserStorageValue === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
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
