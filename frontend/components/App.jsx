import React from "react";
import NavbarContainer from '../components/navbar/navbar_container';
import {Route, Link, Switch, HashRouter} from "react-router-dom";
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashContainer from './splash/splash_container';
import UserAbout from './user/user_about';
import Footer from './footer/footer'


const App = () => (
    <div id="main-div">
        <header>
            <Link to="/" className="">
                <h1>Fcbk</h1>
            </Link>
            <NavbarContainer />
        </header>
        <Switch>
            <Route exact path="/" component={SplashContainer} />
            <Route exact path="/users/:id" component={UserAbout} />
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        </Switch>
        <footer>
            <Footer/>
        </footer>
    </div>
);

export default App;