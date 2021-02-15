import "./SignIn.css";
import React from 'react';
import { Button } from '@material-ui/core';

function SignIn() {
  return (
    <div className="sign-in">
      <div className="admittance">
        <div className="box-input">
          <input type="Email" name="Email" placeholder="Email" />
          <input type="Password" name="Password" placeholder="Password" />
        </div>
        <Button className="enter-button" variant="contained" color="primary">
          Увійти
        </Button>
      </div>
    </div>
  );
}

export default SignIn;
