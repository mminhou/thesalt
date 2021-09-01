import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import allAction from '../../modules/actions';
import {Grid, Tabs, Tab} from "@material-ui/core";
import ProductCard from "../ProductCard/ProductCard";
import Footer from "../Footer/Footer";

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
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`
    };
};

const Products = () => {
    const {data, loading, error} = useSelector(state => state.products.products);
    const [value, setValue] = React.useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        if (data) return;
        dispatch(allAction.getProducts());
    }, [data, dispatch]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const productsTemplate = (category) => {
        return (data && data.map(item =>
            item.mainCategory === category ? (
                    <Grid xs={3} className="products-item" style={{marginRight: 20}}>
                        <ProductCard item={item}></ProductCard>
                    </Grid>) :
                (category === 'ALL' ? (
                    <Grid key={item.styleCode} xs={3} className="products-item" style={{marginRight: 20}}>
                        <ProductCard item={item}></ProductCard>
                    </Grid>
                ) : (<div></div>))
        ))
    }

    return (
        <Grid container justifyContent="center" style={{textAlign: 'center'}}>
            <Grid item xs={12}>
                <div style={{backgroundColor: 'rgb(25,25,25)', height: 120}}></div>
                <h1 className="products-title">Sales / Collection</h1>
                <p className="products-subtitle">New in: hand-picked daily from the world’s best goods and boutiques</p>
            </Grid>
            <Grid item xs={2}>
                <p>CATEGORY</p>
                <Tabs orientation="vertical" variant="scrollable" value={value} onChange={handleChange}>
                    <Tab label="ALL" {...a11yProps(0)} />
                    <Tab label="OUTER" {...a11yProps(1)} />
                    <Tab label="TOP" {...a11yProps(2)} />
                    <Tab label="BOTTOM" {...a11yProps(3)} />
                    <Tab label="BAG & SHOES" {...a11yProps(4)} />
                    <Tab label="ACC" {...a11yProps(5)} />
                </Tabs>
            </Grid>
            <Grid item xs={10}>
                <TabPanel value={value} index={0}>
                    <Grid container direction="row" justify="center" alignItems="center" style={{marginTop: 30}}>
                        {productsTemplate('ALL')}
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Grid container direction="row" justify="center" alignItems="center" style={{marginTop: 30}}>
                        {productsTemplate('OUTER')}
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Grid container direction="row" justify="center" alignItems="center" style={{marginTop: 30}}>
                        {productsTemplate('TOP')}
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Grid container direction="row" justify="center" alignItems="center" style={{marginTop: 30}}>
                        {productsTemplate('BOTTOM')}
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <Grid container direction="row" justify="center" alignItems="center" style={{marginTop: 30}}>
                        {productsTemplate('BAG & SHOES')}
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={5}>
                    <Grid container direction="row" justify="center" alignItems="center" style={{marginTop: 30}}>
                        {productsTemplate('ACC')}
                    </Grid>
                </TabPanel>

            </Grid>
            <Grid item xs={12} style={{marginTop: '5%'}}>
                <Footer/>
            </Grid>
        </Grid>
    );
};

export default Products;