import "./App.scss";

import { AppRouter } from "./Routes/Router";
import { BrowserRouter } from "react-router-dom";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
