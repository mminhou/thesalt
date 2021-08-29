import React, {useEffect} from 'react';
import introduce from '../../factory/images/introduce3.png'
import {Grid, Tabs, Tab, Box, Typography} from "@material-ui/core";
import MediaCard from "../MediaCard/MediaCard";

import {useDispatch, useSelector} from 'react-redux';
import allAction from '../../modules/actions';

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
                // <Box p={7}>
                //     <Typography>{children}</Typography>
                // </Box>
                <Grid container>
                    {children}
                </Grid>
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
    const dispatch = useDispatch();

    useEffect(() => {
        if (data) return;
        dispatch(allAction.getProducts());
    }, [data, dispatch]);

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Grid container justifyContent="center" style={{textAlign: 'center'}}>
            {/*<img src={introduce} width="100%" style={{filter: 'brightness(60%)'}}></img>*/}
            <Grid item xs={12}>
                <div style={{backgroundColor: 'rgb(235, 234, 229)', height: 120}}></div>
                <h1 style={{marginTop: 30, marginBottom: 5}}>세일 / 여성 컬렉션</h1>
                <p style={{fontSize: 17, marginTop: 0, marginBottom: 30}}>보웬 & 더솔트 협력업체와 함께하는 상품을 소개합니다.</p>
            </Grid>
            <Grid item xs={2}>
                <p>CATEGORY</p>
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                >
                    <Tab label="ALL" {...a11yProps(0)} />
                    <Tab label="OUTER" {...a11yProps(1)} />
                    <Tab label="TOP" {...a11yProps(2)} />
                    <Tab label="BOTTOM" {...a11yProps(3)} />
                    <Tab label="DRESS" {...a11yProps(4)} />
                    <Tab label="BAG & SHOES" {...a11yProps(5)} />
                    <Tab label="ACC" {...a11yProps(6)} />
                </Tabs>
            </Grid>
            <Grid item xs={10}>
                <TabPanel value={value} index={0}>
                    <Grid container
                          direction="row"
                          justify="center"
                          alignItems="center" style={{marginTop: 30}}>
                        {data && data.map((item) =>
                            <Grid key={item.style_code} xs={3} style={{marginRight: 30, marginBottom: 20}}>
                                <MediaCard item={item}></MediaCard>
                            </Grid>
                        )}

                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Item Four
                </TabPanel>
                <TabPanel value={value} index={4}>
                    Item Five
                </TabPanel>
                <TabPanel value={value} index={5}>
                    Item Six
                </TabPanel>
                <TabPanel value={value} index={6}>
                    Item Seven
                </TabPanel>
            </Grid>
        </Grid>
    );
};

export default Products;