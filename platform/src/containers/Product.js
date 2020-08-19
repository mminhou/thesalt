import React from 'react';
import { Route, Link } from 'react-router-dom';

const Post = ({match}) => {
    return (
        <h2>
            {match.params.title}
        </h2>
    )
}

const Product = () => {
    return (
        <div>
            <h1>포스트</h1>
            <Link to="/Product/react">React</Link>
            <Link to="/Product/redux">Redux</Link>
            <Link to="/Product/relay">Relay</Link>
            <Route
                path="/Product/:title"
                component={Post}
            />
        </div>
    );
};

export default Product;