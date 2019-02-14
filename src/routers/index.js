import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import CameraContainer from "../containers/camera-container";
import TestData from "../containers/test-data-container";

import { ROUTES } from "../utils/constants";

class Router extends Component {
	render() {
		return (
			<Switch>
				<Route path={ROUTES.TEST} component={TestData} />
				<Route path={ROUTES.HOME} component={CameraContainer} />

				<Redirect from="*" to={ROUTES.HOME} />
			</Switch>
		);
	}
}

export default withRouter(Router);
