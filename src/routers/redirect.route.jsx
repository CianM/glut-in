import React from "react";
import { Redirect } from "react-router-dom";

import { ROUTES } from "../utils/constants";

const RedirectRoute = () => (<Redirect from="*" to={ROUTES.HOME} />)

export default RedirectRoute;
