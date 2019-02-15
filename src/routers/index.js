import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

import CameraContainer from "../containers/camera-container";
import ResultsContainer from "../containers/results-container";
import TestData from "../containers/test-data-container";

import RedirectRoute from "./redirect.route";
import ResultsRoute from "./results.route";

import { ROUTES } from "../utils/constants";

class Router extends Component {
	render() {
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

export default withRouter(Router);
