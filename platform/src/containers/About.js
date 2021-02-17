import React, { useEffect } from 'react';
import introduce from '../factory/images/introduce.jpg'
import {Grid} from "@material-ui/core";
import MediaCard from "../components/MediaCard/MediaCard";

// ---------
import { useDispatch, useSelector } from 'react-redux';
import allAction from '../modules/actions/index';

const About = () => {
    const result = useSelector(state => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
    dispatch(allAction.loadProduct());
    // console.log(result)
  }, []);

    return (
        <div style={{height: 2000, backgroundColor: 'rgb(235, 234, 229)'}}>
            <img src={introduce} width="100%" style={{filter: 'brightness(60%)'}}></img>
            <Grid container
                  direction="row"
                  justify="center"
                  alignItems="center" style={{marginTop: 30}}>
                <Grid item xs={3} style={{marginRight: 10, marginBottom: 20}}>
                    <MediaCard></MediaCard>
                </Grid>
                <Grid item xs={3} style={{marginRight: 10, marginBottom: 20}}>
                    <MediaCard></MediaCard>
                </Grid>
                <Grid item xs={3} style={{marginRight: 10, marginBottom: 20}}>
                    <MediaCard></MediaCard>
                </Grid>
                <Grid item xs={3} style={{marginRight: 10, marginBottom: 20}}>
                    <MediaCard></MediaCard>
                </Grid>
                <Grid item xs={3} style={{marginRight: 10, marginBottom: 20}}>
                    <MediaCard></MediaCard>
                </Grid>
                <Grid item xs={3} style={{marginRight: 10, marginBottom: 20}}>
                    <MediaCard></MediaCard>
                </Grid>



            </Grid>
        </div>
    );
};

export default About;