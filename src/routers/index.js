import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route, Switch, withRouter } from "react-router-dom";

import CameraContainer from "../containers/camera-container";
import ResultsContainer from "../containers/results-container";
import SplashContainer from "../containers/splash-container";
import TestData from "../containers/test-data-container";

import RedirectRoute from "./redirect.route";
import ResultsRoute from "./results.route";

import { ROUTES } from "../utils/constants";

class Router extends Component {

	state = {
		showSplashScreen: true
	};
	
	componentDidMount() {
		this.setSplashScreenTimeout();
	}

	setSplashScreenTimeout() {
		const { history: { push } } = this.props;

		const navigateToHome = () => {
			this.setState({ showSplashScreen: false });
			push(ROUTES.HOME);
		};

		setTimeout(navigateToHome, 3000);
	}

	render() {
		const { showSplashScreen } = this.state;
		
		if(showSplashScreen) {
			return (<SplashContainer />);
		}

		return (
			<Switch>
				<Route exact path={ROUTES.HOME} component={CameraContainer} />
				<ResultsRoute path={ROUTES.RESULTS} component={ResultsContainer} />

				<Route path={ROUTES.TEST} component={TestData} />

				<RedirectRoute />
			</Switch>
		);
	}
}

Router.propTypes = {
	history: PropTypes.object
};

export default withRouter(Router);
