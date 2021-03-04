import { useState } from "react";
import "./SignIn.css";
import React from "react";
import { Button } from "@material-ui/core";

function SignIn({ setLogin }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const submit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3030/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.token) {
          throw new Error();
        }
        localStorage.setItem("token", data.token);
        setLogin(true);
      })
      .catch((error) => {
        console.error(`${error}`);
      });

  };

  return (
    <div className="sign-in">
      <form className="admittance" onSubmit={submit}>
        <div className="box-input">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="Email"
            name="Email"
            placeholder="Email"
            required
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="Password"
            name="Password"
            placeholder="Password"
            required
          />
        </div>
        <Button
          className="enter-button"
          variant="contained"
          color="primary"
          type="submit"
        >
          Log in
        </Button>
      </form>
    </div>
  );
}

export default SignIn;
