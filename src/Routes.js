import React from "react";
import { Route, Switch } from "react-router-dom";

import AppliedRoute from "./components/AppliedRoute";
import Home from "./containers/Home";
import Login from "./containers/Login";
import ResetPassword from "./containers/ResetPassword";
import Signup from "./containers/Signup";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";
import Settings from "./containers/Settings";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import NotFound from "./containers/NotFound";

export default function Routes({ appProps }) {
    return (
        <Switch>
            <AppliedRoute path="/" exact component={Home} appProps={appProps} />
            <UnauthenticatedRoute
                path="/login"
                exact
                component={Login}
                appProps={appProps}
            />
            <UnauthenticatedRoute
                path="/signup"
                exact
                component={Signup}
                appProps={appProps}
            />
            <UnauthenticatedRoute
                path="/login/reset"
                exact
                component={ResetPassword}
                props={childProps}
            />
            <AuthenticatedRoute
                path="/settings"
                exact
                component={Settings}
                appProps={appProps}
            />
            <AuthenticatedRoute
                path="/notes/new"
                exact
                component={NewNote}
                appProps={appProps}
            />
            <AuthenticatedRoute
                path="/notes/:id"
                exact
                component={Notes}
                appProps={appProps}
            />
            <Route component={NotFound} />
        </Switch>
    );
}
