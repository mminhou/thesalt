import React, {useEffect} from 'react'
import {Button, Divider, Grid, TextField, Typography} from "@material-ui/core";
import NavWallpaper from "../NavWallpaper/NavWallpaper";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const MyOrder = () => {
    const {account, loading, error} = useSelector(state => state.account) || {
        loading: false, data: null, error: null
    };

    return (
        <div>
            <NavWallpaper color="#483D8B"/>
            <Grid container direction="column" alignItems="center" style={{paddingTop: 30}}>
                <Grid item xs={12}>
                    <Typography variant="h4" paragraph>Recent Orders</Typography>
                </Grid>
                {account.Order.map((o) =>
                    <Grid item xs={12} container style={{width: '70%'}} spacing={3}>
                        <Grid item md={7} xs={12} key={o.id}>
                            <Typography variant="h6">Date Ordered: {o.dateOrdered}</Typography>
                            <Typography variant="subtitle1">Order Number: {o.id}</Typography>
                            <Typography variant="body1">Order Total: USD {o.total}</Typography>
                            <Typography variant="body1" paragraph>Order Status: {o.status}</Typography>
                        </Grid>
                        <Grid item md={5} xs={12}>
                            <Button variant="contained" color="primary" size="large" fullWidth style={{backgroundColor: 'rgb(25, 25, 25)'}}>
                                Order Details
                            </Button>
                        </Grid>
                        {o.OrderProduct.map((e) =>
                            <Grid item md={2} xs={3} key={e.id}>
                                <Link to={'/productDetail/' + e.products.id}>
                                    <img src={e.products.mainImage} width="90%" />
                                </Link>
                            </Grid>
                            )}
                        <Grid item xs={12}>
                            <Divider style={{marginBottom: 15}} />
                        </Grid>
                    </Grid>
                )}
            </Grid>
        </div>
    );
}

export default MyOrder;