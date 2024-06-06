import { createContext, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({
  token: "",
  email: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const AuthContextProvider = (props) => {
  const initalToken = localStorage.getItem("token");
  const [token, setToken] = useState(initalToken);
  const [email, setEmail] = useState("");
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(!!token);
  console.log(email);

  const loginHandler = async ({ enteredEmail, enteredPassword }) => {
    console.log(enteredPassword, enteredEmail);
    setEmail(enteredEmail);

    let url;
    if (!userIsLoggedIn) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDkzN10Vvdn3JGR_tME3ZfwgVvJKp3mLMs";
    } else {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDkzN10Vvdn3JGR_tME3ZfwgVvJKp3mLMs`;
    }

    try {
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
      if (res.ok) {
        const token = data.idToken;

        console.log(token);
        // navigator("/");
        localStorage.setItem("token", token);

        const expirationTime = new Date().getTime() + 5 * 60 * 1000;

        localStorage.setItem("tokenExpiration", expirationTime);
        setUserIsLoggedIn(true);
        return data;
      } else {
        let errorMessage = "Authtication failed";
        if (data && data.error && data.error.message) {
          errorMessage = data.error.message;
        }
        console.log(errorMessage);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpiration");
    setUserIsLoggedIn(false);
  }, []);

  // useEffect(() => {
  //   const checkTokenExpiration = () => {
  //     const tokenExpiration = localStorage.getItem("tokenExpiration");
  //     const currentTime = new Date().getTime();

  //     if (!token || !tokenExpiration || currentTime > tokenExpiration) {
  //       logoutHandler();
  //     }
  //   };
  //   const intervalId = setInterval(checkTokenExpiration, 1000 * 60);
  //   return () => clearInterval(intervalId);
  // }, [token, logoutHandler]);

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    email: email,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
