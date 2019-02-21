import React from "react";
import PropTypes from "prop-types";

import CameraContainer from "../containers/camera-container";
import ResultsContainer from "../containers/results-container";
import SplashContainer from "../containers/splash-container";
import TestData from "../containers/test-data-container";

import { ROUTES } from "../utils/constants";

const Router = ({ screen }) => {

	switch(screen) {
		case ROUTES.HOME:
		  return (<CameraContainer />);
		case ROUTES.RESULTS:
		  return (<ResultsContainer />);
		case ROUTES.SPLASH:
		  return (<SplashContainer />);
		case ROUTES.TEST:
		  return (<TestData />);
		default:
		  return null;
	}
}

Router.propTypes = {
	screen: PropTypes.string.isRequired
};

export default Router;
