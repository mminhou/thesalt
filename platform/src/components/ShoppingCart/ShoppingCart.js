import React, {useEffect} from 'react';
import {Button, DialogTitle, DialogContent, DialogContentText, DialogActions,} from '@material-ui/core';
import {connect} from "react-redux";
import { removeProductFromCart } from "../../modules/actions/shoppingCartAction";



const ShoppingCart = (props) => {
    const calculateTotal = (total, currentItem) =>
        parseFloat(total + currentItem.price * (currentItem.quantity || 1));

    const renderProduct = (product, index) => (
        <div key={index}>
            <span>{product.title} </span>
            <span> ${product.price} </span>
            <span>{product.quantity}</span>
            <input
                type="button"
                onClick={() => props.removeProduct(index)}
                value="x"
            />
        </div>
    );

    const countItems = () =>
        props.shoppingCart
            .reduce((acc, cur) => {
                return parseFloat(acc + (cur.quantity || 1));
            }, 0)
            .toFixed(0);


    return (
        <div>
            <DialogTitle id="alert-dialog-title" style={{width: 300}}>{"Cart"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <div className="header">Cart ({countItems()} items)</div>
                    <div className="cart">
                        {props.shoppingCart.length
                            ? props.shoppingCart.map(renderProduct)
                            : "Cart is empty."}
                    </div>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                {/*<Button onClick={this.closeModal} color="primary">*/}
                {/*    Disagree*/}
                {/*</Button>*/}
                {/*<Button onClick={this.closeModal} color="primary" autoFocus>*/}
                {/*    Agree*/}
                {/*</Button>*/}
            </DialogActions>
        </div>
    )
}

const mapStateToProps = state => {
  return {
    shoppingCart: state.shoppingCart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeProduct: index => dispatch(removeProductFromCart(index))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart);