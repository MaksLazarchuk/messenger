import { useState } from "react";
import SignIn from "./components/SignIn/SignIn";
import Chat from "./components/Chat/Chat";
import "./App.css";

function App() {
  const [login, setLogin] = useState(false);

  return (
    <div className="App">
      {!login && <SignIn setLogin={setLogin} />}
      {login && <Chat />}
    </div>
  );
}

export default App;
