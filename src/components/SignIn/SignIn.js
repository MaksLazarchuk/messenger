import { useState } from "react";
import "./SignIn.css";
import React from "react";
import { Button } from "@material-ui/core";

function SignIn({ setLogin }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const Submit = () => {
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
        console.log(data.status);
        if (!data.token) {
          throw new Error();
        }
        setLogin(true);
        localStorage.setItem("token", data.token);
        console.log(data);
      })
      .catch((error) => {
        console.error(`${error}`);
      });
  };

  return (
    <div className="sign-in">
      <div className="admittance">
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
          onClick={Submit}
          className="enter-button"
          variant="contained"
          color="primary"
        >
          Log in
        </Button>
      </div>
    </div>
  );
}

export default SignIn;
