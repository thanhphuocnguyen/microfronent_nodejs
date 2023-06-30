import React, { lazy, Suspense, useState, useEffect } from "react";
import {
	BrowserRouter,
	Switch,
	Route,
	Redirect,
	Router,
} from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import Header from "./components/Header";
import Progress from "./components/Progress";
const MarketingApp = lazy(() => import("./components/MarketingApp"));
const DashBoardApp = lazy(() => import("./components/DashBoardApp"));
const AuthApp = lazy(() => import("./components/AuthApp"));
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
const generatedClassName = createGenerateClassName({ productionPrefix: "con" });

export default () => {
	const [isSignedIn, setIsSignedIn] = useState(false);

	useEffect(() => {
		if (isSignedIn) {
			history.push("/dashboard");
		}
	}, [isSignedIn]);

	return (
		<Router history={history}>
			<StylesProvider generateClassName={generatedClassName}>
				<div>
					<Header
						signedIn={isSignedIn}
						onSignOut={() => setIsSignedIn(false)}
					/>
					<Suspense fallback={<Progress />}>
						<Switch>
							<Route path="/auth">
								<AuthApp onSignIn={() => setIsSignedIn(true)} />
							</Route>
							<Route path="/dashboard">
								{!isSignedIn && <Redirect to="/" />}
								<DashBoardApp />
							</Route>
							<Route path="/" component={MarketingApp} />
						</Switch>
					</Suspense>
				</div>
			</StylesProvider>
		</Router>
	);
};
