import React, { Component } from "react";

import Router from "./routers";

import { INITIAL_APP_STATE, ROUTES } from "./utils/constants";
import { AppContext } from "./utils/context";

class App extends Component {

  state = {
    ...INITIAL_APP_STATE,
    setImageData: imageData => this.setState({ imageData }),
    setScreen: screen => this.setState({ screen })
  };
  
  componentDidMount() {
		this.setSplashScreenTimeout();
  }

	setSplashScreenTimeout() {
		const navigateToHome = () => this.setState({ screen: ROUTES.HOME });
		setTimeout(navigateToHome, 3000);
  }

  render() {
    const { screen } = this.state;

    return (
      <AppContext.Provider value={this.state}>
        <Router screen={screen} />
      </AppContext.Provider>
    );
  }
}

export default App;
