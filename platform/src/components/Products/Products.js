import React, { useEffect } from 'react';
import introduce from '../../factory/images/introduce.jpg'
import {Grid} from "@material-ui/core";
import MediaCard from "../MediaCard/MediaCard";

import { useDispatch, useSelector } from 'react-redux';
import allAction from '../../modules/actions';

const Products = () => {
    const { data, loading, error } = useSelector(state => state.products.products);
    const dispatch = useDispatch();

    useEffect(() => {
        if (data) return;
        dispatch(allAction.getProducts());
    }, [data, dispatch]);

    return (
        <div style={{height: 2000, backgroundColor: 'rgb(235, 234, 229)'}}>
            <img src={introduce} width="100%" style={{filter: 'brightness(60%)'}}></img>
            <Grid container
                  direction="row"
                  justify="center"
                  alignItems="center" style={{marginTop: 30}}>
                {data && data.map((item) =>
                    <Grid key={item.style_code} xs={3} style={{marginRight: 10, marginBottom: 20}}>
                        <MediaCard item={item}></MediaCard>
                    </Grid>
                )}

            </Grid>
        </div>
    );
};

export default Products;