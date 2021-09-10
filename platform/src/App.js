import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {useSelector} from "react-redux";
// Component
import Nav from "./components/Nav/Nav";
import MediaCardDetail from "./components/ProductCard/ProductCardDetail";
// Pages
import {Screen} from "./components/Screen/Screen";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Profile from "./components/Profile/Profile";
import MyAccount from "./components/Account/Account";
import Login from "./components/Login/Login";
import Order from "./components/Order/Order";
import Shipping from "./components/Shipping/Shipping";
// AuthRoute
import AuthRoute from "./AuthRoute";
import MyOrder from "./components/MyOrder/MyOrder";

const App = () => {
    const isLoggedIn = useSelector(state => state.signIn.isLoggedIn);
    return (
        <Router>
            <div>
                <Nav/>
                <Switch>
                    <Route exact path="/" component={Screen}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route exact path="/product" component={Products}/>
                    <Route path="/productDetail/:path" component={MediaCardDetail}/>
                    <Route path="/myAccount/:id" component={MyAccount}/>
                    <Route path="/order" component={Order}/>
                    <AuthRoute
                        authenticated={isLoggedIn}
                        path="/profile"
                        render={props => <Profile {...props} />}
                    />
                    <AuthRoute
                        authenticated={isLoggedIn}
                        path="/shipping"
                        render={props => <Shipping {...props} />}
                    />
                    <AuthRoute
                        authenticated={isLoggedIn}
                        path="/myOrder"
                        render={props => <MyOrder {...props} />}
                    />

                </Switch>
            </div>
        </Router>

    );
};

export default App;