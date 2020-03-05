import React from "react";
import NavbarContainer from '../components/navbar/navbar_container';
import {Route, Link, Switch, HashRouter} from "react-router-dom";
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashContainer from './splash/splash_container';


const App = () => (
    <div>
        <header>
            <Link to="/" className="">
                <h1>Facebook</h1>
            </Link>
            <NavbarContainer />
        </header>
        <Switch>
            <Route exact path="/" component={SplashContainer} />
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        </Switch>
    </div>
);

export default App;