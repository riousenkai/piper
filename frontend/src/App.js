import React, { useEffect, useState } from "react";
import { getOneUser } from "./store/user";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const [person, getPerson] = useState({});
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(getOneUser(1));
  }, []);

  return (
    <div className="App">
      <header className="App-header">{user?.id}</header>
    </div>
  );
}

export default App;
