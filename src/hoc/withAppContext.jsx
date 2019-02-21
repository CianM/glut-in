import React from "react";

import { AppContext } from "../constants/context";

export function withAppContext(Component) {
    return function WrapperComponent(props) {
        return (
            <AppContext.Consumer>
                {state => <Component {...props} context={state} />}
            </AppContext.Consumer>
        );
    };
}
