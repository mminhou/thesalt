import React, {useEffect, useState} from 'react';
import './Products.css'
import {useDispatch, useSelector} from 'react-redux';
import allAction from '../../modules/actions';
import {Grid, Tabs, Tab, Typography} from "@material-ui/core";
import ProductCard from "../ProductCard/ProductCard";
import Footer from "../Footer/Footer";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import NavWallpaper from "../NavWallpaper/NavWallpaper";

const Products = (props) => {
    const {data, loading, error} = useSelector(state => state.products.products);
    const [value, setValue] = useState(0);
    const dispatch = useDispatch();
    let condTabOrientation;

    if (isWidthUp("md", props.width)) {
        condTabOrientation = "vertical";
    } else {
        condTabOrientation = "horizontal";
    }

    useEffect(() => {
        if (data) return;
        dispatch(allAction.getProducts());
    }, [data, dispatch]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const productsTemplate = (category) => {
        return (data && data.map((item, key) =>
            item.mainCategory === category ? (
                    <Grid key={item.id} item xs={8} md={4} className="products-item">
                        <ProductCard item={item}></ProductCard>
                    </Grid>) :
                (category === 'ALL' ? (
                    <Grid key={item.id} item xs={8} md={4} className="products-item">
                        <ProductCard item={item}></ProductCard>
                    </Grid>
                ) : (<div></div>))
        ))
    }

    return (
        <Grid container justifyContent="center" style={{textAlign: 'center'}}>
            <Grid item xs={12}>
                <NavWallpaper color="rgb(25, 25, 25)"/>
                <Typography variant="h3" paragraph className="products-title" >Sales / Collection</Typography>
                <Typography variant="subtitle1" paragraph className="products-subtitle">New in: hand-picked daily from the world’s best goods and boutiques</Typography>
            </Grid>
            <Grid item md={2} xs={12}>
                <Typography variant="subtitle1">CATEGORY</Typography>
                <Tabs orientation={condTabOrientation} variant="scrollable"
                      value={value} onChange={handleChange} style={{width: '95%'}}>
                    <Tab label="ALL" {...a11yProps(0)} />
                    <Tab label="OUTER" {...a11yProps(1)} />
                    <Tab label="TOP" {...a11yProps(2)} />
                    <Tab label="BOTTOM" {...a11yProps(3)} />
                    <Tab label="BAG & SHOES" {...a11yProps(4)} />
                    <Tab label="ACC" {...a11yProps(5)} />
                </Tabs>
            </Grid>
            <Grid item md={9} xs={12}>
                <TabPanel value={value} index={0}>
                    <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center" style={{marginTop: 30}}>
                        {productsTemplate('ALL')}
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center" style={{marginTop: 30}}>
                        {productsTemplate('OUTER')}
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center" style={{marginTop: 30}}>
                        {productsTemplate('TOP')}
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center" style={{marginTop: 30}}>
                        {productsTemplate('BOTTOM')}
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center" style={{marginTop: 30}}>
                        {productsTemplate('BAG & SHOES')}
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={5}>
                    <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center" style={{marginTop: 30}}>
                        {productsTemplate('ACC')}
                    </Grid>
                </TabPanel>

            </Grid>
            <Grid item xs={12}>
                <Footer/>
            </Grid>
        </Grid>
    );
};

function TabPanel(props) {
    const {children, value, index, ...other} = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Grid container>{children}</Grid>
            )}
        </div>
    );
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

export default withWidth()(Products);