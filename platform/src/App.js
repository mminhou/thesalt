import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// Component
import Nav from "./components/Nav/Nav";
import MediaCardDetail from "./components/ProductCard/ProductCardDetail";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
// Pages
import {Screen} from "./components/Screen/Screen";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";
// AuthRoute
import AuthRoute from "./AuthRoute";

const App = () => {
    const size = useWindowSize();
    // lg(1200), md(1024), sm(480)
    const deviceSize = getBreakPoint(size.width)

    return (
        <Router>
            <Switch>
                <div>
                    {deviceSize == 'lg' | deviceSize == 'md' | deviceSize == 'xl' | deviceSize == 'sm' ?
                        (
                            <div>
                                <ScrollToTop/>
                                <Nav/>
                                <Route exact path="/" component={Screen}/>
                                <Route path="/home" component={Home}/>
                                <Route path="/login" component={Login}/>
                                <Route path="/profile" component={Profile}/>
                                <Route exact path="/product" component={Products}/>
                                <Route path="/productDetail/:path" component={MediaCardDetail}/>
                                {/*<Route path="/detail" component={MediaCardDetail}/>*/}
                            </div>
                        ) :
                        (
                            <div></div>
                        )
                    }
                </div>
            </Switch>
        </Router>

    );
};

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
}

function getBreakPoint(windowWidth) {
    if (windowWidth) {
        if (windowWidth < 480) {
            return "sm";
        } else if (windowWidth < 1024) {
            return "md";
        } else if (windowWidth < 1200) {
            return "lg";
        } else {
            return "xl";
        }
    } else {
        return undefined;
    }
}

export default App;