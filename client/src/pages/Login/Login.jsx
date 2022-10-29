/* Importing the React library from the node_modules folder. */
import React, { useState } from "react";

/* Importing the login.scss file. */
import "./login.scss";

/* Importing the useMutation hook from the apollo client. */
import { useMutation } from "@apollo/client";

/* Importing the LOGIN_USER query from the utils folder. */
import { LOGIN_USER } from "../../utils/mutations";

/* Importing the Auth.js file from the utils folder. */
import Auth from "../../utils/auth";

/* Importing the motion library from framer-motion. */
import { motion } from "framer-motion";

const Login = () => {
  /* We're using the useState hook to keep track of the form state. */
  const [formState, setFormState] = useState({ email: "", password: "" });

  /* We're using the useMutation hook to make a mutation request to our GraphQL API. */
  const [loginuser, { error, data }] = useMutation(LOGIN_USER);

  /* We're using the handleChange function to update the form state based on the input changes.  */
  const handleChange = (event) => {
    const { name, value } = event.target;

    /* We're using the spread operator to copy the formState object and then update the value of the name property. */
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  /* We're using the handleFormSubmit function to submit the form. */
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await loginuser({
        variables: { ...formState },
      });
      /* We're using the Auth.login function to store the token in the local storage.  */
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
      setShowAlert(true);
    }

    /* We're using the setFormState function to clear the form state. */
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    /* It's a framer-motion library that allows you to animate the div. */
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.23 }}
      exit={{ opacity: 0 }}
      className="login-page"
    >
      <div className="login-container">
        <h2>Login</h2>
        {data ? 
          (
            <p>
            Successful! Redirecting...
            <br />

            {/* Do not show "/admin" after trying to login  */}
            <div className="hidden">
              {window.location.href = "/admin"}
            </div>
            </p>
          )
         : (
          <form onSubmit={handleFormSubmit}>
            <div className="email-input">
              <h3 htmlFor="email">Email Address</h3>
              <input
                placeholder="email@email.com"
                name="email"
                type="email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div className="password-input">
              <h3 htmlFor="pwd">Password</h3>
              <input
                placeholder="password"
                name="password"
                type="password"
                id="pwd"
                onChange={handleChange}
              />
            </div>
            <div>
              <button className="signin-btn" type="submit">
                Submit
              </button>
            </div>
          </form>
        )}
        {error ? (
          <div>
            <p className="error-text">
              {" "}
              The provided credentials are incorrect
            </p>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
};

export default Login;
