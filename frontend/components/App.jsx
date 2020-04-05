import React from "react";
import NavbarContainer from '../components/navbar/navbar_container';
import {Route, Link, Switch, HashRouter} from "react-router-dom";
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashContainer from './splash/splash_container';
import UserAboutContainer from './user/user_about_container';
import Footer from './footer/footer';
import CommentListContainer from "./comment/comments_container";



const NoMatchPage = () => {
    return (
        <div>
            <img src={window.notfound} style={{ width: 500, height: 500, display: 'flex', margin: 'auto', position: 'relative', justifyContent: 'center' }} />
        </div>

    );
};

const App = () => (
    <div id="main-div">
        <header>
            {/* <Link to="/" className="">
                <h1>FriendsBook</h1>
            </Link> */}
            <NavbarContainer />
        </header>
        <Switch>
            <ProtectedRoute path="/users/:userId" component={UserAboutContainer} />
            <ProtectedRoute path="/posts/:postId/comments" component={CommentListContainer} />
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <Route exact path="/" component={SplashContainer} />
            <Route component={NoMatchPage} />
        </Switch>
        <footer>
            <Footer/>
        </footer>
    </div>
);

export default App;