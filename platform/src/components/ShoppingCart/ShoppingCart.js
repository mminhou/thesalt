import React, {useEffect} from 'react';
import {
    Button,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Grid,
    Divider,
    Typography,
} from '@material-ui/core';
import {connect} from "react-redux";
import {removeProductFromCart} from "../../modules/actions/shoppingCartAction";

const ShoppingCart = (props) => {
    const calculateTotal = (total, currentItem) =>
        parseFloat(total + currentItem.price * (currentItem.quantity || 1));

    const renderProduct = (product, index) => (
        <Grid container key={index} direction="row" alignItems="center">
            <Grid item xs={4}>
                <img src={product.mainImage} width="80%" alt={product.title}/>
            </Grid>
            <Grid item xs={3}>
                <span>{product.title} </span>
                <span>({product.color})</span>
            </Grid>
            <Grid item xs={1}>
                <span>{product.size}</span>
            </Grid>
            <Grid item xs={1}>
                <span>{product.quantity ? product.quantity : 1}</span>
            </Grid>
            <Grid item xs={2}>
                <span> ${product.price.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} </span>
            </Grid>
            <Grid item xs={1}>
                <input
                    type="button"
                    onClick={() => props.removeProduct(index)}
                    value="x"
                />
            </Grid>

        </Grid>
    );

    const countItems = () =>
        props.shoppingCart
            .reduce((acc, cur) => {
                return parseFloat(acc + (cur.quantity || 1));
            }, 0)
            .toFixed(0);


    return (
        <div>
            <Grid container>
                {/*<DialogTitle id="alert-dialog-title" style={{width: 1000, fontSize: 50, fontVariant: 'small-caps'}}>{"cart"}</DialogTitle>*/}
                <DialogContent style={{width: '100%'}}>
                    <DialogContentText id="alert-dialog-description">
                        <Grid item xs={12}>
                            <Typography variant="h4" style={{fontVariant: 'small-caps'}}>
                                <span style={{fontSize: 25}}> {countItems()},</span> items in bag</Typography>
                        </Grid>
                        <Divider style={{marginTop: 10, marginBottom: 10}}/>
                        <Grid item xs={12}>
                            <div className="cart">
                                {props.shoppingCart.length
                                    ? props.shoppingCart.map(renderProduct)
                                    : <Grid item style={{width: 400}}>

                                    </Grid>}
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            {props.shoppingCart.length ? (
                                <Grid container>
                                    <Grid item xs={12}><Divider style={{marginTop: 10, marginBottom: 10}}/></Grid>
                                    <Grid item xs={6}>
                                        <Typography variant="body1" style={{
                                            fontVariant: 'small-caps',
                                            fontSize: 20
                                        }}>subtotal</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography variant="h6" style={{float: 'right'}}>
                                            $ {props.shoppingCart.reduce(calculateTotal, 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
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
                            <Button variant="contained" color="secondary" style={{width: '100%'}} >complete your order</Button>
                        </Grid>
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
            </Grid>
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