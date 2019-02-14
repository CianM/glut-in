import React, { Component } from "react";

import CameraContainer from "./containers/camera-container";
import TestData from "./containers/test-data-container";

import { ROUTES } from "./utils/constants";

class App extends Component {
  render() {
    const { pathname } = window.location;
    
    switch(pathname) {
      case ROUTES.TEST:
        return (<TestData />);
      case ROUTES.HOME:
      default:
        return (<CameraContainer />);
    }
  }
}

export default App;
