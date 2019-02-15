import React, { Component } from "react";
import { BrowserRouter } from 'react-router-dom';

import Router from "./routers";

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Router />
      </BrowserRouter>
    );
  }
}

export default App;
