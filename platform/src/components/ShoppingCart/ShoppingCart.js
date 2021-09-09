import React, {useEffect} from 'react';
import {Button, DialogContent, DialogContentText, Grid, Divider, Typography,} from '@material-ui/core';
import {useDispatch, useSelector} from "react-redux";
import {removeProductFromCart} from "../../modules/actions/shoppingCartAction";
import {Link} from "react-router-dom";

const ShoppingCart = () => {
    const shoppingCart = useSelector(state => state.shoppingCart);
    const dispatch = useDispatch();

    const calculateTotal = (total, currentItem) =>
        parseFloat(total + currentItem.price * (currentItem.quantity ? currentItem.quantity : 1));

    const countItems = () =>
        shoppingCart
            .reduce((acc, cur) => {
                return parseFloat(acc + (cur.quantity ? cur.quantity : 1));
            }, 0)
            .toFixed(0);

    const removeProduct = (index) => {
        dispatch(removeProductFromCart(index))
    }


    const renderProduct = (product, index) => (
        <Grid container key={index} direction="row" alignItems="center">
            <Grid item xs={4}>
                <img src={product.mainImage} width="80%" alt={product.title}/>
            </Grid>
            <Grid item xs={3}>
                <Typography variant="body1">{product.title} </Typography>
                <Typography variant="body1">({product.color})</Typography>
            </Grid>
            <Grid item xs={1}>
                <Typography variant="body1">{product.size}</Typography>
            </Grid>
            <Grid item xs={1}>
                <Typography variant="body1">{product.quantity ? product.quantity : 1}</Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography variant="body1"> ${product.price.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} </Typography>
            </Grid>
            <Grid item xs={1}>
                <input
                    type="button"
                    onClick={() => removeProduct(index)}
                    value="x"
                />
            </Grid>
        </Grid>
    );

    return (
        <Grid container>
            <DialogContent style={{width: '100%'}} id="alert-dialog-description">
                <Grid item xs={12}>
                    <Typography variant="h5" display="inline"> {countItems()} </Typography>
                    <Typography variant="h4" style={{fontVariant: 'small-caps'}} display="inline">
                        item in bag
                    </Typography>
                </Grid>
                <Divider style={{marginTop: 10, marginBottom: 10}}/>
                <Grid item xs={12}>
                    <div className="cart">
                        {shoppingCart.length
                            ? shoppingCart.map(renderProduct)
                            : <Grid item style={{width: 400}}>

                            </Grid>}
                    </div>
                </Grid>
                <Grid item xs={12}>
                    {shoppingCart.length ? (
                        <Grid container alignItems="center">
                            <Grid item xs={12}><Divider style={{marginTop: 10, marginBottom: 10}}/></Grid>
                            <Grid item xs={6}>
                                <Typography variant="h6" style={{fontWeight: 400}} >
                                    Subtotal
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="h6" style={{float: 'right'}}>
                                    $ {shoppingCart.reduce(calculateTotal, 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                </Typography>
                            </Grid>
                        </Grid>
                    ) : (
                        <Typography variant="h6" style={{textAlign: "center", fontVariant: 'small-caps'}}>
                            your shopping bag is empty
                        </Typography>
                    )}
                </Grid>
                <Grid item xs={12}>
                    <Divider style={{marginTop: 10, marginBottom: 20}}/>
                    <Link to='/order'>
                        <Button variant="contained" color="secondary" style={{width: '100%'}}>complete your
                            order</Button>
                    </Link>
                </Grid>
            </DialogContent>
        </Grid>
    )
}
export default ShoppingCart;