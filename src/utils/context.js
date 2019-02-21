import React from "react";

import { INITIAL_APP_STATE } from "./constants";

// Created in a separate file from App.js to prevent circular dependencies 
export const AppContext = React.createContext(INITIAL_APP_STATE);
