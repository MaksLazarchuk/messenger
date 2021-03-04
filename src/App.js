import { useState } from "react";
import SignIn from "./components/SignIn/SignIn";
import Chat from "./components/Chat/Chat";
import "./App.css";

function App() {
  const [login, setLogin] = useState(!!localStorage.getItem('token'));

  return (
    <div className="App">
      {login ? <Chat setLogin={setLogin} /> : <SignIn setLogin={setLogin} />}
    </div>
  );
}

export default App;
