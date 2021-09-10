import React, {useEffect} from 'react';
import './ProductCardDetail.css';
import {useDispatch, useSelector} from "react-redux";
import allAction from "../../modules/actions";
import Footer from "../Footer/Footer";
import NavWallpaper from "../NavWallpaper/NavWallpaper";
import {Button, Grid, Typography} from "@material-ui/core";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const ProductCardDetail = (props) => {
    const params = props.match.params.path;
    const dispatch = useDispatch();
    const {data, loading, error} = useSelector(state => state.products.product[params]) || {
        loading: false, data: null, error: null
    };

    useEffect(() => {
        dispatch(allAction.getProduct(params));
    }, [dispatch, params]);

    const addProduct = (product) => {
        dispatch(allAction.addProductToCart(product))
    }

    return (
        <div>
            <NavWallpaper color="rgb(25, 25, 25)"/>
            <Grid container direction="row" justifyContent="center" alignItems="center"
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
                        <Grid item container md={4} xs={12} alignItems="center">
                            <Grid item xs={12}>
                                <Typography variant="h5" gutterBottom>{data.title}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography paragraph variant="subtitle1">{data.subtitle}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6" paragraph>$ {data.price.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                    <span className="price-tax"> (included tax) </span></Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="subtitle2">Color</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="overline">{data.color}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="subtitle2">Material</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="overline" noWrap>{data.material}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="subtitle2">Detail</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="overline" paragraph>{data.detail}</Typography>
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
                        <Grid item xs={12}>
                            <Footer/>
                        </Grid>
                    </Grid>

                ) : (<div>does not find product</div>)}
            </Grid>
        </div>
    );
}
export default ProductCardDetail;
