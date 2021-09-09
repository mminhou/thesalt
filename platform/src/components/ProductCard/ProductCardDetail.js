import React, {useEffect, useState} from 'react';
import './ProductCardDetail.css';
import {useDispatch, useSelector, connect} from "react-redux";
import {addProductToCart} from "../../modules/actions/shoppingCartAction";
import allAction from "../../modules/actions";
import {Button, Grid, List, ListItem, ListItemText, Typography} from "@material-ui/core";
import Footer from "../Footer/Footer";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const ProductCardDetail = (props) => {
    const params = props.match.params.path;
    const dispatch = useDispatch();
    const {data, loading, error} = useSelector(state => state.products.product[params]) || {
        loading: false, data: null, error: null
    };
    const [secondary, setSecondary] = useState(false);

    useEffect(() => {
        dispatch(allAction.getProduct(params));
    }, [dispatch, params]);

    const addProduct = (product) => {
        dispatch(addProductToCart(product))
    }

    return (
        <div>
            <div style={{backgroundColor: 'rgb(25, 25, 25)', height: window.innerWidth <= 850 ? 55 : 120}}></div>
            <Grid container direction="row" justify="center" alignItems="center"
                  style={{marginTop: 30, textAlign: "center"}}>
                {data ? (
                    <Grid container item xs={12} direction="row" alignItems="center">
                        <Grid item container md={8} xs={12} direction="row" spacing={1} style={{marginBottom: 30}}>
                            <Grid item xs={6}>
                                <img src={data.mainImage} width="100%" alt={data.title}/>
                            </Grid>
                            <Grid item xs={6}>
                                <img src={data.subImage} width="100%" alt={data.title}/>
                            </Grid>
                            <Grid item xs={4}>
                                <img src={data.subImage2} width="100%" alt={data.title}/>
                            </Grid>
                            <Grid item xs={4}>
                                <img src={data.subImage3} width="100%" alt={data.title}/>
                            </Grid>
                            <Grid item xs={4}>
                                <img src={data.subImage4} width="100%" alt={data.title}/>
                            </Grid>
                        </Grid>
                        <Grid item container md={4} xs={12}>
                            <Grid item xs={12}>
                                <Typography variant="h5">{data.title}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography paragraph variant="subtitle1">{data.subtitle}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6">$ {data.price.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}<span
                                    className="price-tax"> (included tax) </span></Typography>
                            </Grid>
                            <br/><br/>
                            <Grid item xs={12}>
                                <ListItem style={{textAlign: 'center'}}>
                                    <ListItemText primary="Color" secondary={secondary ? '' : data.color}/>
                                    <ListItemText primary="Size" secondary={secondary ? '' : data.size}/>
                                </ListItem>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItem style={{textAlign: 'center'}}>
                                    <ListItemText primary="Material" secondary={secondary ? '' : data.material}/>
                                    <ListItemText primary="StyleCode" secondary={secondary ? '' : data.styleCode}/>
                                </ListItem>
                            </Grid>
                            <Grid item xs={12} style={{marginTop: 15}}>
                                <Typography variant="body1" paragraph>{data.detail}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="outlined" color="secondary" className="cart-button" size="large"
                                        onClick={() => {
                                            addProduct(data);
                                            alert("Item Successfully added to your cart")
                                        }}>
                                    <ShoppingCartOutlinedIcon/> Add to Bag
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} style={{marginTop: 30}}>
                            <Footer/>
                        </Grid>
                    </Grid>

                ) : (<div>does not find product</div>)}
            </Grid>
        </div>
    );
}
export default ProductCardDetail;
