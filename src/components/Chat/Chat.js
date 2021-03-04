import "./Chat.css";
import React from "react";
import { Input } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import IconButton from "@material-ui/core/IconButton";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

function Chat({ setLogin }) {
  const handleRemove = (exit) => {
    setLogin(false);
    localStorage.removeItem("token");
  };
  return (
    <div className="chat">
      <header className="header">
        <div className="container-box">
          <div className="container-header">
            <div className="name-chat">
              <p>Chat</p>
            </div>
            <div className="exit">
              <IconButton aria-label="exit" onClick={() => handleRemove()}>
                Exit
                <ExitToAppIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </header>
      <div className="container-box">
        <div className="container">
          <article id="article">
            <div className="box-message">
              <p className="user-name">Maks</p>
              <p className="text-message">Що робиш?</p>
            </div>
            <div className="box-message">
              <p className="user-name">Maks</p>
              <p className="text-message">Що робиш?</p>
            </div>
            <div className="box-message">
              <p className="user-name">Maks</p>
              <p className="text-message">Що робиш?</p>
            </div>
            <div className="box-message">
              <p className="user-name">Maks</p>
              <p className="text-message">Що робиш?</p>
            </div>

            <div className="box-message">
              <p className="user-name">Maks</p>
              <p className="text-message">Що робиш?</p>
            </div>
            <div className="box-message">
              <p className="user-name">Maks</p>
              <p className="text-message">Що робиш?</p>
            </div>
            <div className="box-message">
              <p className="user-name">Maks</p>
              <p className="text-message">Що робиш?</p>
            </div>
            <div className="box-message">
              <p className="user-name">Maks</p>
              <p className="text-message">Що робиш?</p>
            </div>
            <div className="box-message">
              <p className="user-name">Maks</p>
              <p className="text-message">Що робиш?</p>
            </div>
            <div className="box-message">
              <p className="user-name">Maks</p>
              <p className="text-message">Що робиш?</p>
            </div>
            <div className="box-message">
              <p className="user-name">Maks</p>
              <p className="text-message">Що робиш?</p>
            </div>

            <div className="box-message">
              <p className="user-name">Maks</p>
              <p className="text-message">Що робиш?</p>
            </div>
            <div className="box-message">
              <p className="user-name">Maks</p>
              <p className="text-message">Що робиш?</p>
            </div>
            <div className="box-message">
              <p className="user-name">Maks</p>
              <p className="text-message">Що робиш?</p>
            </div>
            <div className="box-message">
              <p className="user-name">Maks</p>
              <p className="text-message">Що робиш?</p>
            </div>
            <div className="box-message">
              <p className="user-name">Maks</p>
              <p className="text-message">Що робиш?</p>
            </div>
            <div className="box-message">
              <p className="user-name">Maks</p>
              <p className="text-message">Що робиш?</p>
            </div>

          </article>
        </div>
      </div>
      <footer className="footer">
        <Input
          placeholder="Write message..."
          inputProps={{ "aria-label": "description" }}
        />
        <IconButton aria-label="send">
          <SendIcon />
        </IconButton>
      </footer>
    </div>
  );
}

export default Chat;
