import React from "react";

import { AppContext } from "../utils/context";

export const withAppContext = (Component) => {
    return function WrapperComponent(props) {
        return (
            <AppContext.Consumer>
                {state => <Component {...props} context={state} />}
            </AppContext.Consumer>
        );
    };
}
