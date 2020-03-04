import React from "react";
import NavbarContainer from '../components/navbar/navbar_container';
import {Route, Link, Switch, HashRouter} from "react-router-dom";
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
    <div>
        <header>
            <h1>Facebook</h1>
            <NavbarContainer />
        </header>

        <Switch>
            <Route exact path="/">
                <LogInFormContainer />
                <br />
                <SignUpFormContainer />
                </Route>
            {/* <Route exact path='/' component={FeedContainer} /> */}
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        </Switch>
    </div>
);

export default App;