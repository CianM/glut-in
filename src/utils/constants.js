export const ROUTES = Object.freeze({
    HOME: "/",
    RESULTS: "/results",
    SPLASH: "/splash",
    TEST: "/test-data"
});

export const INITIAL_APP_STATE = Object.freeze({
    imageData: null,
    screen: ROUTES.SPLASH,
  
    setImageData: () => {},
    setScreen: () => {}
});

export const ENVIRONMENTS = Object.freeze({
    DEV: "development",
    PROD: "production"
});

