import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../store/auth-context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const navigator = useNavigate();
  const authContext = useContext(AuthContext);

  console.log(authContext);

  const postData = async () => {
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    if (!enteredEmail || !enteredPassword) {
      setError("All fields are required.");
      return;
    }

    await authContext.login({ enteredPassword, enteredEmail });
    navigator("/");
  };

  const submitHandler = (event) => {
    event.preventDefault();

    setIsLoading(true);
    postData();
  };

  return (
    <div>
      <div className="w-full max-w-sm px-5 pb-5  mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="px-6 py-4">
          <div className="flex justify-center mx-auto w-full">
            <img
              className="w-auto h-12 sm:h-12"
              src="https://uxwing.com/wp-content/themes/uxwing/download/editing-user-action/attendance-icon.png"
              alt="Logo"
            />
          </div>

          {isLogin ? (
            <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
              Welcome Back
            </h3>
          ) : (
            <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
              Create an Account
            </h3>
          )}

          {isLogin ? (
            <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
              Login or create account
            </p>
          ) : (
            <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
              Fill in the details to register
            </p>
          )}

          <form>
            <div className="flex justify-center">
              {error && <p className="text-red-500 mt-2  w-[75%] ">{error}</p>}
            </div>

            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-gray-100 border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                placeholder="Email"
                ref={emailInputRef}
              />
            </div>

            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-gray-100 border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                placeholder="Password"
                ref={passwordInputRef}
              />
            </div>

            <div className="flex items-center justify-center mt-4">
              <button
                onClick={submitHandler}
                className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                {isLogin ? "Log In" : "Create new Account"}
              </button>
            </div>
          </form>
        </div>

        <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
          <span className="text-sm text-gray-600 dark:text-gray-200">
            {isLogin
              ? " Don't have an account?"
              : "Fill in the details to register"}
          </span>
          <button
            onClick={() => {
              setIsLogin((prevState) => !prevState);
            }}
            className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
          >
            {isLogin ? "Register" : "Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
