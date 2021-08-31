import React, {useEffect, useState} from 'react';

import {Screen} from "./components/Screen/Screen";
import Nav from "./components/Nav/Nav";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Products from "./components/Products/Products";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Login from "./components/Login/Login";
import MediaCardDetail from "./components/ProductCard/ProductCardDetail";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import AuthRoute from "./AuthRoute";

const App = () => {
    const size = useWindowSize();
    // lg(1200), md(1024), sm(480)
    const deviceSize = getBreakPoint(size.width)

    return (
        <Router>
            <Switch>
                <div>
                    {deviceSize == 'lg' | deviceSize == 'md' | deviceSize == 'xl' ?
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
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount

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