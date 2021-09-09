import React, {useEffect, useState} from 'react';
import './HomePagination.css';
import {useDispatch, useSelector} from "react-redux";
import {Link} from 'react-router-dom';
import {Grid, Typography, Card, CardActionArea, CardContent, CardMedia} from "@material-ui/core";
import allAction from "../../modules/actions";

const HomePagination = () => {
    const {data, loading, error} = useSelector(state => state.products.products);
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [contents, setContents] = useState([]);
    const [activeImage, setActiveImage] = useState(-1);

    useEffect(() => {
        if (data) {
            setContents(data)
            return
        }
        ;
        dispatch(allAction.getProducts());
    }, [data, contents, dispatch]);

    let listsPerPage = window.innerWidth <= 1280 ?
        (window.innerWidth <= 960 ?
            (window.innerWidth <= 600 ?
                2 : 3) : 4) : 6
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
    const indexOfLastList = currentPage * listsPerPage;
    const indexOfFirstList = indexOfLastList - listsPerPage;
    const currentLists = contents.slice(indexOfFirstList, indexOfLastList);

    const paginationRender = (
        <div style={{paddingLeft: '10%', paddingRight: '10%'}}>
            <Grid container direction="column" alignItems="center">
                <Grid container className="title-container" direction="row" alignItems="center">
                    <Grid item xs={6}>
                        <Typography variant="h3" className="pagination-title">new arrivals</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="paginate-ctn" style={{float: 'right'}}>
                            <div className="round-effect" onClick={prevPage}> &lsaquo; </div>
                            {items}
                            <div className="round-effect" onClick={nextPage}> &rsaquo; </div>
                        </div>
                    </Grid>
                </Grid>

                <Grid container direction="row" justifyContent="center" alignItems="center">
                    {currentLists.map((ele, index) => ele.subCategory === 'new' ?
                        <Grid item lg={2} md={3} sm={4} xs={6} key={ele.id}>
                            <Card className="pagination-card">
                                <CardActionArea className="pagination-card-action"
                                                onMouseOver={() => setActiveImage(index)}
                                                onMouseLeave={() => setActiveImage(-1)}>
                                    <Link to={'/productDetail/' + ele.id}>
                                        <CardMedia image={index === activeImage ? ele.subImage : ele.mainImage} style={{height: 150}}
                                                   title="Contemplative Reptile"/>
                                        <CardContent className="pagination-card-content">
                                            <Typography variant="body1" style={{fontVariant: "small-caps"}}>
                                                {ele.subCategory}
                                            </Typography>
                                            <Typography paragraph variant="body2">
                                                {ele.title}
                                            </Typography>
                                            <Typography variant="body2">
                                                ${ele.price}
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

export default HomePagination;