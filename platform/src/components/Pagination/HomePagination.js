import React, {useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';

import './HomePagination.css';
import {Grid, Typography} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import image from '../../factory/images/default-404.jpg'
import {Fade} from '@material-ui/core';

import Button from '@material-ui/core/Button';
import {useDispatch, useSelector} from "react-redux";
import allAction from "../../modules/actions";

export function HomePagination() {
    const {data, loading, error} = useSelector(state => state.products.products);
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = React.useState(1);
    const [contents, setContents] = React.useState([]);

    useEffect(() => {
        if (data) {
            setContents(data)
            console.log(contents)
            return
        }
        ;
        dispatch(allAction.getProducts());
    }, [data, contents, dispatch]);

    let listsPerPage = 6;

    let maxPages = Math.ceil(contents.length / listsPerPage);
    let items = [];
    let leftSide = currentPage - 2;
    if (leftSide <= 0) leftSide = 1;
    let rightSide = currentPage + 2;
    if (rightSide > maxPages) rightSide = maxPages;

    for (let number = leftSide; number <= rightSide; number++) {
        items.push(
            <div key={number} className={(number === currentPage ? 'round-effect active_p' : 'round-effect')}
                 onClick={() => {
                     setCurrentPage(number)
                 }}>
                {number}
            </div>,
        );
    }

    const nextPage = () => {
        if (currentPage < maxPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    // Logic for displaying current todos
    const indexOfLastList = currentPage * listsPerPage;
    const indexOfFirstList = indexOfLastList - listsPerPage;
    const currentLists = contents.slice(indexOfFirstList, indexOfLastList);


    const paginationRender = (
        <div style={{paddingLeft: '10%', paddingRight: '10%'}}>
            <Grid container direction="column" alignItems="center">
                <Grid container direction="row" alignItems="center"
                      style={{marginBottom: 20, paddingBottom: 5, borderBottom: '2px solid #787878'}}>
                    <Grid item xs={6} justify="flex-start">
                        <Typography variant="h4" style={{
                            float: 'left',
                            fontSize: 50,
                            fontWeight: 900,
                            fontVariant: "small-caps",
                            color: '#404040'
                        }}>
                            new arrivals
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="paginate-ctn" style={{float: 'right'}}>
                            <div className="round-effect" onClick={prevPage}> &lsaquo; </div>
                            {items}
                            <div className="round-effect" onClick={nextPage}> &rsaquo; </div>
                        </div>
                    </Grid>
                </Grid>

                <Grid container direction="row" justify="center" alignItems="center" justifyContent="center">
                    {/*<div className="">*/}
                    {/*    <div> currentPage : { currentPage }</div>*/}
                    {currentLists.map((ele) => ele.subCategory === 'new' ?
                        <Grid item lg={2} md={3} sm={4}>
                            <Card style={{marginRight: 10, border: "none", boxShadow: "none"}}>
                                <CardActionArea style={{backgroundColor: "rgb(235, 234, 229)", border: "none"}}>
                                    <Link to={'/productDetail/'+ele.styleCode}>
                                        <CardMedia image={ele.mainImage} style={{height: 150}}
                                                   title="Contemplative Reptile"/>
                                        <CardContent style={{paddingLeft: 0, paddingRight: 0, paddingBottom: 10, paddingTop: 10}}>
                                            <Typography gutterBottom variant="body2" noWrap='True'>
                                                {ele.subCategory}
                                            </Typography>
                                            <Typography gutterBottom variant="body2">
                                                {ele.title}
                                            </Typography>
                                        </CardContent>
                                    </Link>
                                </CardActionArea>
                            </Card>
                        </Grid> : <div>nothing</div>
                    )}
                </Grid>

            </Grid>
        </div>
    );
    return (paginationRender);
}
