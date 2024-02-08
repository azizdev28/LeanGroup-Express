import { Fragment, useState } from "react";

import "./App.css";
// import Home from "./page/Home/Home";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";

function App() {
  return (
    <Fragment>
      <Header />
      <Main />
    </Fragment>
  );
}

export default App;
