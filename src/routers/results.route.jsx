import React from "react";
import { Route } from "react-router-dom";

import RedirectRoute from "./redirect.route";

// Only allow access to route if image data is present, else redirect
const hasImageData = ({ location: { state: { image } = {} } = {} }) => Boolean(image);

const ResultsRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={
		props => hasImageData(props) ? (<Component {...props} />) : (<RedirectRoute />)
	} />
);

export default ResultsRoute;