import React from 'react';
import {Grid} from "@material-ui/core";
import {HomePagination} from "../Pagination/HomePagination";
import Footer from "../Footer/Footer";
import HomeCarousel from "../Carousel/HomeCarousel";
import introduce from "../../factory/images/introduce2.jpeg";

const Home = () => {

    return (
        <div style={{backgroundColor: 'rgb(235, 234, 229)'}}>
            <Grid container style={{textAlign: "center"}}>
                <Grid item xs={12}>
                    <div style={{position: 'relative', height: '30%', marginBottom: 20}}>
                        {/*<HomeCarousel />*/}
                        <img src={introduce} style={{filter: 'brightness(60%)', width:'100%'}}/>

                    </div>
                </Grid>
                <Grid item xs={12} style={{  height: '100%' }}>
                    <HomePagination />
                </Grid>
                <Grid item xs={12} style={{ height: 150 }}>


                    open project -> link page(create board)
                </Grid>
                <Grid item xs={12}>
                    <Footer />
                </Grid>
                {/* mainImage, title, funding, name */}
            </Grid>

        </div>
    );
};

export default Home;