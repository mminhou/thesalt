import React, {useEffect} from 'react';
import './ProductCardDetail.css';
import {useDispatch, useSelector, connect} from "react-redux";
import { addProductToCart } from "../../modules/actions/shoppingCartAction";
import allAction from "../../modules/actions";
import {Button, Grid, List, ListItem, ListItemText, Typography} from "@material-ui/core";
import Footer from "../Footer/Footer";

const ProductCardDetail = (props) => {
    const params = props.match.params.path;
    const dispatch = useDispatch();
    const {data, loading, error} = useSelector(
        state => state.products.product[params]) || {
        loading: false, data: null, error: null};
    const [secondary, setSecondary] = React.useState(false);

    useEffect(() => {
        dispatch(allAction.getProduct(params));
    }, [dispatch, params]);

    return (
        <div>
            <div style={{backgroundColor: 'rgb(25,25,25)', height: 120}}></div>
            <Grid container direction="row" justify="center" alignItems="center" style={{marginTop: 30, textAlign: "center"}}>
                {data ? (
                    <Grid container xs={12} direction="row" alignItems="center">
                        <Grid container xs={8} direction="row" style={{paddingLeft: '5%', paddingRight: '3%'}}>
                            <Grid item xs={6} className="padding-right">
                                <img src={data.mainImage} width="100%" alt={data.title}/>
                            </Grid>
                            <Grid item xs={6} className="padding-left">
                                <img src={data.mainImage} width="100%" alt={data.title}/>
                            </Grid>
                            <Grid item xs={4} className="padding-right">
                                <img src={data.mainImage} width="100%" alt={data.title}/>
                            </Grid>
                            <Grid item xs={4} className="padding">
                                <img src={data.mainImage} width="100%" alt={data.title}/>
                            </Grid>
                            <Grid item xs={4} className="padding-left">
                                <img src={data.mainImage} width="100%" alt={data.title}/>
                            </Grid>
                        </Grid>
                        <Grid item xs={4} className="paddingRight">
                            <Typography variant="h5">{data.title}</Typography>
                            <Typography variant="subtitle1">{data.detail}</Typography>
                            <br/><br/>
                            <Typography variant="h6">₩ {data.price}<span className="price-tax"> (included tax) </span></Typography>
                            <br/><br/>
                            <List className="product-info">
                                <ListItem style={{textAlign: 'center'}}>
                                    <ListItemText primary="Color" secondary={secondary ? '' : data.color}/>
                                    <ListItemText primary="Size" secondary={secondary ? '' : data.size}/>
                                </ListItem>
                                <ListItem style={{textAlign: 'center'}}>
                                    <ListItemText primary="Material" secondary={secondary ? '' : data.material}/>
                                    <ListItemText primary="StyleCode" secondary={secondary ? '' : data.styleCode}/>
                                </ListItem>
                            </List>
                            <br/><br/>
                            <Typography variant="body1">{data.detail}</Typography>
                            <br/><br/>
                            <Button variant="outlined" color="secondary"
                                    onClick={() => {props.addProduct(data); alert("Item Successfully added to your cart")}}
                                    className="cart-button">Add cart</Button>
                        </Grid>
                        <Grid item xs={12} style={{marginTop: '5%'}}>
                            <Footer/>
                        </Grid>
                    </Grid>

                ) : (<div>does not find product</div>)}
            </Grid>
        </div>
    );
}

const mapStateToProps = state => {
  return {
    shoppingCart: state.shoppingCart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addProduct: product => dispatch(addProductToCart(product))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCardDetail);
