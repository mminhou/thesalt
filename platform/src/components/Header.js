import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
//
// class Header extends Component{
//     render() {
//         const { logged, onLogout} = this.props;
//     }
// }
const Header = () => {
    return (
        <div className="header">
            <NavLink exact to="/" className="item" activeClassName="active">HOME</NavLink>
            <NavLink to="/about/velopert" className="item" activeClassName="active">ABOUT</NavLink>
            <NavLink to="/Product" className="item" activeClassName="active">Product</NavLink>
            <NavLink to="/me" className="item" activeClassName="active">MyPage</NavLink>
            <NavLink to="/login" className="item" activeClassName="active">LogIn</NavLink>
            <NavLink to="/search" className="item" activeClassName="active">SEARCH</NavLink>
        </div>
    );
};

export default Header;