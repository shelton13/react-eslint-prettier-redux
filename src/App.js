import React from "react";
import "./App.css";
import PureReduxCounter from "./Counter/Counter.jsx";
import CounterComponent from "./ReactRedux/CounterComponent.jsx";
import UserListComponent from "./Async-Redux/UserListComponent.jsx";

function App() {
  return (
    <div className="App">
        <UserListComponent />
      </div>
  );
}

export default App;
