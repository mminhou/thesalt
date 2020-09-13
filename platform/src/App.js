import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import About from './containers/About';
import Product from './containers/Product';
import MyPage from './containers/MyPage';
import Login from './containers/Login';
import Search from './containers/Search';
import NoMatch from './containers/NoMatch';
import Header from './components/Header';
import {Screen} from "./components/Screen/Screen";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer";
//import Profile from './containers/Profile';

const App = () => {
    const size = useWindowSize();
    // lg(1200), md(1024), sm(480)
    const deviceSize = getBreakPoint(size.width)
    return (
        <div>
        { deviceSize == 'lg' | deviceSize == 'md' | deviceSize == 'xl' ?
            (
                <div>
                <Nav></Nav>
                <Screen></Screen>
                    <Footer></Footer>
                </div>
            ):
            (
                <div></div>
            )
        }
        </div>
        // <Router>
        //     <div>
        //         <Header/>
        //         <div>
        //             <Switch>
        //                 <Route exact path="/" component={Home}/>
        //                 <Route path="/about/:username" component={About}/>
        //                 <Route path="/Product" component={Product}/>
        //                 <Route path="/Login" component={Login}/>
        //                 <Route path="/me" component={MyPage}/>
        //                 <Route path="/search" component={Search}/>
        //                 <Route component={NoMatch}/>
        //             </Switch>
        //         </div>
        //     </div>
        // </Router>
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