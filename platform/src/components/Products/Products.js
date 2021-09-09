import React, {useEffect} from 'react';
import './Products.css'
import {useDispatch, useSelector} from 'react-redux';
import allAction from '../../modules/actions';
import {Grid, Tabs, Tab, Typography} from "@material-ui/core";
import ProductCard from "../ProductCard/ProductCard";
import Footer from "../Footer/Footer";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

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

const Products = (props) => {
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

    let condTabOrientation;
      if (isWidthUp("md", props.width)) {
        condTabOrientation = "vertical";
      } else {
        condTabOrientation = "horizontal";
      }

    const productsTemplate = (category) => {
        return (data && data.map(item =>
            item.mainCategory === category ? (
                    <Grid key={item.id} item xs={8} md={4} className="products-item" spacing={5}>
                        <ProductCard item={item}></ProductCard>
                    </Grid>) :
                (category === 'ALL' ? (
                    <Grid key={item.id} item xs={8} md={4} className="products-item" spacing={5}>
                        <ProductCard item={item}></ProductCard>
                    </Grid>
                ) : (<div></div>))
        ))
    }

    return (
        <Grid container justify="center" style={{textAlign: 'center'}} spacing={2}>
            <Grid item xs={12}>
                <div style={{backgroundColor: 'rgb(25, 25, 25)', height: window.innerWidth <= 850 ? 55 : 120}}></div>
                <Typography variant="h3" paragraph className="products-title" >Sales / Collection</Typography>
                <Typography variant="subtitle1" paragraph className="products-subtitle">New in: hand-picked daily from the world’s best goods and boutiques</Typography>
            </Grid>
            <Grid item md={2} xs={12}>
                <Typography variant="subtitle1">CATEGORY</Typography>
                <Tabs orientation={condTabOrientation} variant="scrollable"
                      value={value} onChange={handleChange} style={{width: '100%'}}>
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
                    <Grid container spacing={2} direction="row" justify="center" alignItems="center" style={{marginTop: 30}}>
                        {productsTemplate('ALL')}
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Grid container spacing={2} direction="row" justify="center" alignItems="center" style={{marginTop: 30}}>
                        {productsTemplate('OUTER')}
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Grid container spacing={2} direction="row" justify="center" alignItems="center" style={{marginTop: 30}}>
                        {productsTemplate('TOP')}
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Grid container spacing={2} direction="row" justify="center" alignItems="center" style={{marginTop: 30}}>
                        {productsTemplate('BOTTOM')}
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <Grid container spacing={2} direction="row" justify="center" alignItems="center" style={{marginTop: 30}}>
                        {productsTemplate('BAG & SHOES')}
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={5}>
                    <Grid container spacing={2} direction="row" justify="center" alignItems="center" style={{marginTop: 30}}>
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

export default withWidth()(Products);