import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import About from './containers/About';
import Product from './containers/Product';
import MyPage from './containers/MyPage';
import Login from './containers/Login';
import Search from './containers/Search';
import NoMatch from './containers/NoMatch';
import Header from './components/Header';
import {Screen} from "./components/Screen";
//import Profile from './containers/Profile';

const App = () => {
    return (
        <Screen></Screen>
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

export default App;