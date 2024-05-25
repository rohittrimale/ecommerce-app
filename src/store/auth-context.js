import { createContext, useCallback, useEffect, useState } from "react";

export const AuthContext = createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const AuthContextProvider = (props) => {
  const initalToken = localStorage.getItem("token");
  const [token, setToken] = useState(initalToken);

  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);

    const expirationTime = new Date().getTime() + 5 * 60 * 1000;

    localStorage.setItem("tokenExpiration", expirationTime);
  };

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpiration");
  }, []);

  useEffect(() => {
    const checkTokenExpiration = () => {
      const tokenExpiration = localStorage.getItem("tokenExpiration");
      const currentTime = new Date().getTime();

      if (!token || !tokenExpiration || currentTime > tokenExpiration) {
        logoutHandler();
      }
    };
    const intervalId = setInterval(checkTokenExpiration, 1000 * 60);
    return () => clearInterval(intervalId);
  }, [token, logoutHandler]);

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
