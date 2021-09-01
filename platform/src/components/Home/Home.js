import React from 'react';
import './Home.css';
import {HomePagination} from "../Pagination/HomePagination";
import Footer from "../Footer/Footer";
import {Grid} from "@material-ui/core";
import introduce from "../../factory/images/introduce2.jpeg";

const Home = () => {
    return (
        <div className="home-container">
            <Grid container style={{textAlign: "center"}}>
                <Grid item xs={12} md={12}>
                    <div className="banner-image">
                        <img src={introduce}/>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <HomePagination/>
                </Grid>
                <Grid item xs={12} style={{height: 150}}>
                </Grid>
                <Grid item xs={12}>
                    <Footer/>
                </Grid>
            </Grid>
        </div>
    );
};

export default Home;