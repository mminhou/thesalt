import React, {useEffect, useState} from 'react';
import './Order.css'
import {useSelector} from "react-redux";
import {Button, Divider, Grid, TextField, Typography} from "@material-ui/core";
import Footer from "../Footer/Footer";
import {Link} from "react-router-dom";
import NavWallpaper from "../NavWallpaper/NavWallpaper";

const Order = () => {
    const shoppingCart = useSelector(state => state.shoppingCart);
    const [total, setTotal] = useState('')

    useEffect(() => {
        setTotal(shoppingCart.reduce(calculateTotal, 0).toFixed(2))
    },)

    const calculateTotal = (total, currentItem) =>
        parseFloat(total + currentItem.price * (currentItem.quantity ? currentItem.quantity : 1));

    const countItems = () => shoppingCart.reduce((acc, cur) => {
        return parseFloat(acc + (cur.quantity ? cur.quantity : 1));
    }, 0).toFixed(0);

    return (
        <div>
            <NavWallpaper color="rgb(25, 25, 25)"/>
            <Grid container spacing={5}>
                <Grid item container xs={12} direction="row" className="container-page">
                    <Grid item md={7} xs={12}>
                        <Typography variant="h5" display="inline">Shopping Bag</Typography>
                        <Typography variant="h6" display="inline"> ( {countItems()} )</Typography>
                        <Divider className="margin-divider"/>
                        {shoppingCart.map(product =>
                            <Grid key={product.id} item xs={12} container alignItems="center">
                                <Grid item xs={5}>
                                    <img src={product.mainImage} width="80%" alt={product.title}/>
                                </Grid>
                                <Grid item xs={5}>
                                    <Typography variant="body1">{product.title}</Typography>
                                    <Typography variant="caption" display="block">Color: {product.color}</Typography>
                                    <Typography variant="caption" display="block">Size: {product.size}</Typography>
                                    <Typography variant="caption" display="block">
                                        Style Code: {product.styleCode}
                                    </Typography>
                                    <Typography variant="caption" display="block">
                                        Quantity: {product.quantity ? product.quantity : 1}
                                    </Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography variant="body1">
                                        {(product.price * (product.quantity ? product.quantity : 1))
                                            .toLocaleString('en-US', {style: 'currency', currency: 'USD',})}
                                    </Typography>
                                </Grid>
                            </Grid>
                        )}
                    </Grid>
                    <Grid item md={1}></Grid>
                    <Grid item container md={4} xs={12} justifyContent="center" alignItems="center" style={{textAlign: "center"}} spacing={1}>
                        <Grid item xs={12}><Divider/></Grid>
                        <Grid item xs={12}>
                            <Typography variant="subtitle1">
                                APPLY A PROMO CODE
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField variant="outlined" size="small" fullWidth></TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <Button variant="outlined" size="large" fullWidth>Apply</Button>
                        </Grid>
                        <Grid item xs={12}><Divider className="margin-divider"/></Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1" align="left">Subtotal</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1" align="right">
                                $ {total.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1" align="left">Shipping</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1" align="right">{total >= 150 ? 'FREE' : '$ 25.00'}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1" align="left">Taxs</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1" align="right">included</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="overline" display="block" align="left">
                                Free Shipping on all orders over $150
                            </Typography>
                        </Grid>
                        <Grid item xs={12}><Divider/></Grid>
                        <Grid item xs={6}>
                            <Typography variant="h6" paragraph align="left">Estimated Total</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h6" paragraph align="right">
                                $ {total >= 150 ? total.replace(/\B(?=(\d{3})+(?!\d))/g, ',') :
                                String(Number(total)+25).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body2" paragraph>
                                You have qualified for complimentary shipping
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Link to="/shipping">
                                <Button className="submit-btn" variant="contained" color="primary" size="large" fullWidth >
                                Proceed to Checkout
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item xs={12}><Divider className="margin-divider"/></Grid>
                        <Grid item xs={12}>
                            <Typography variant="overline">or</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <a href="https://www.paypal.com/checkoutnow?locale.x=en_US&fundingSource=paypal&sessionID=ca9278e185_mdc6mte6mti&buttonSessionID=04c8f593a2_mdc6mtm6ntc&env=production&fundingOffered=paypal&logLevel=warn&sdkMeta=eyJ1cmwiOiJodHRwczovL3d3dy5wYXlwYWxvYmplY3RzLmNvbS9hcGkvY2hlY2tvdXQuanMifQ&uid=2621763243&version=4&token=EC-4KM15290G3113632W&xcomponent=1">
                                <img
                                    src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-large.png"
                                    alt="Check out with PayPal"/>
                            </a>
                        </Grid>
                        <Grid item xs={12}><Divider className="margin-divider"/></Grid>
                        <Grid item xs={12}>
                            <Typography variant="body2" paragraph>Need Help? Call 010-2895-1359</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Footer/>
                </Grid>
            </Grid>
        </div>
    )
};

export default Order;