import React, {useEffect, useState} from 'react';
import {
    Button,
    Divider,
    FormControlLabel,
    Grid, MenuItem,
    Radio,
    RadioGroup,
    Select,
    TextField,
    Typography
} from "@material-ui/core";
import Footer from "../Footer/Footer";
import {useDispatch, useSelector} from "react-redux";
// Test
import axios from 'axios';
import {useForm} from "react-hook-form";
import allAction from "../../modules/actions";

const Shipping = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const dispatch = useDispatch();
    const shoppingCart = useSelector(state => state.shoppingCart);
    const id = useSelector(state => state.signIn.id)
    const orderProducts = [];
    const [country, setCountry] = useState();

    const token = useSelector(state => state.signIn.token)
    const headerParams = {
        Authorization: `Token ${token}`
    };

    const changeCountry = (e) => {
        setCountry(e.target.name);
    };

    const onSubmit = (data, e) => {
        data['user'] = id
        data['orderProducts'] = orderProducts
        dispatch(allAction.putOrder(data));
    };

    useEffect(() => {
        shoppingCart.map((item, key) => {
            const q = item['quantity'] ? item['quantity'] : 1;
            item['quantity'] = undefined;
            const data = {};
            data['quantity'] = q;
            data['products'] = item['id'];
            orderProducts.push(data)
        })
    },)

    const test = () => {
        axios({
            method: 'post',
            headers: headerParams,
            url: 'http://localhost:8000/api/order/',
            withCredentials: true,
            data: {id, orderProducts}
        })
            .then((res) => {

            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div>
            <div style={{backgroundColor: 'rgb(25, 25, 25)', height: window.innerWidth <= 850 ? 55 : 120}}></div>
            <Grid container>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container item xs={12} direction="row" justifyContent="center" alignItems="center" spacing={5}
                          style={{paddingLeft: '10%', paddingRight: '10%', marginTop: 10}}>
                        <Grid item md={8} xs={12}>
                            <Typography variant="h4" style={{fontVariant: 'small-caps'}}>shipping</Typography>
                            <Divider style={{marginTop: 10, marginBottom: 30}}/>
                            <Grid item xs={12} container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="body1" display="inline">Enter Shipping Address</Typography>
                                    <Typography variant="overline" align="right">Required</Typography>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <TextField id="firstName" name="firstName"
                                               label="First Name"
                                               variant="outlined"
                                               fullWidth
                                               {...register('firstName', {
                                                   required: true
                                               })}
                                               error={errors.firstName ? true : false}
                                               helperText={errors.firstName && <span role="alert">This field is required.</span>}
                                    />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <TextField id="lastName" name="lastName"
                                               label="Last Name"
                                               variant="outlined"
                                               fullWidth
                                               {...register('lastName', {
                                                   required: true
                                               })}
                                               error={errors.lastName ? true : false}
                                               helperText={errors.lastName &&
                                               <span role="alert">"This field is required."</span>}
                                    />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <TextField id="contactNum" name="contactNum"
                                               label="Phone Number (+82)"
                                               variant="outlined"
                                               fullWidth
                                               {...register('contactNum', {
                                                   required: true
                                               })}
                                               error={errors.contactNum ? true : false}
                                               helperText={errors.contactNum &&
                                               <span role="alert">"This field is required."</span>}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <RadioGroup defaultValue="ship" aria-label="ship" name="ship">
                                        <FormControlLabel value="ship" control={<Radio color="default"/>}
                                                          label="Ship to Address"/>
                                    </RadioGroup>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <TextField id="city" name="city"
                                               label="City"
                                               variant="outlined"
                                               fullWidth
                                               {...register('city', {
                                                   required: true
                                               })}
                                               error={errors.city ? true : false}
                                               helperText={errors.city &&
                                               <span role="alert">"This field is required."</span>}
                                    />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <TextField id="zipCode" name="zipCode"
                                               label="Zip Code"
                                               variant="outlined"
                                               fullWidth
                                               {...register('zipCode', {
                                                   required: true
                                               })}
                                               error={errors.zipCode ? true : false}
                                               helperText={errors.zipCode &&
                                               <span role="alert">"This field is required."</span>}
                                    />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <TextField id="address1" name="address1"
                                               label="Address1"
                                               variant="outlined"
                                               fullWidth
                                               {...register('address1', {
                                                   required: true
                                               })}
                                               error={errors.address1 ? true : false}
                                               helperText={errors.address1 &&
                                               <span role="alert">"This field is required."</span>}
                                    />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <Select
                                        labelId="demo-simple-select-required-label"
                                        id="demo-simple-select-required"
                                        variant="outlined"
                                        fullWidth
                                        value={country}
                                        onChange={changeCountry}
                                        defaultValue={10}>
                                        <MenuItem value={10}>Korea, Republic of</MenuItem>
                                        <MenuItem value={20}>United Kingdom</MenuItem>
                                        <MenuItem value={30}>United States of America</MenuItem>
                                        <MenuItem value={40}>China</MenuItem>
                                        <MenuItem value={50}>Turkey</MenuItem>
                                    </Select>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField id="address2" name="address2"
                                               label="Address2"
                                               variant="outlined"
                                               fullWidth
                                               {...register('address2', {
                                                   required: true
                                               })}
                                               error={errors.address2 ? true : false}
                                               helperText={errors.address2 &&
                                               <span role="alert">"This field is required."</span>}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item container md={4} xs={12} justifyContent="center" alignItems="center"
                              style={{textAlign: "center"}} spacing={1}>
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
                            <Grid item xs={12}><Divider style={{marginTop: 10, marginBottom: 10}}/></Grid>
                            <Grid item xs={6}>
                                <Typography variant="body1" align="left">Subtotal</Typography>
                            </Grid>
                            {/*<Grid item xs={6}>*/}
                            {/*    <Typography variant="body1"*/}
                            {/*                align="right">$ {shoppingCart.reduce(calculateTotal, 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Typography>*/}
                            {/*</Grid>*/}
                            <Grid item xs={6}>
                                <Typography variant="body1" align="left">Shipping</Typography>
                            </Grid>
                            {/*<Grid item xs={6}>*/}
                            {/*    <Typography variant="body1" align="right">{total >= 150 ? 'FREE' : '$ 25.00'}</Typography>*/}
                            {/*</Grid>*/}
                            <Grid item xs={6}>
                                <Typography variant="body1" align="left">Taxs</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body1" align="right">included</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="overline" display="block" align="left">Free Shipping on all orders
                                    over
                                    $150</Typography>
                            </Grid>
                            <Grid item xs={12}><Divider/></Grid>
                            <Grid item xs={6}>
                                <Typography variant="h6" align="left">Estimated Total</Typography>
                            </Grid>
                            {/*<Grid item xs={6}>*/}
                            {/*    <Typography variant="h6" paragraph*/}
                            {/*                align="right">$ {total >= 150 ? total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : total}</Typography>*/}
                            {/*</Grid>*/}
                            <Grid item xs={12}><Divider/></Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" color="primary" size="large" fullWidth
                                        type="submit"
                                        style={{backgroundColor: 'rgb(25, 25, 25)'}}>Continue to Payment</Button>
                            </Grid>
                            <Grid item xs={12}><Divider style={{marginTop: 10}}/></Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6" align="left">Order Details</Typography>
                            </Grid>


                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Footer/>
                    </Grid>
                </form>
            </Grid>
        </div>
    )
}

export default Shipping;