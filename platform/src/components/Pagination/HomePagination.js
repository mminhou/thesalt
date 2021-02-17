import React from 'react';
import './HomePagination.css';
import {Grid, Typography} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import image from '../../factory/images/default-404.jpg'
import { Fade } from '@material-ui/core';

import Button from '@material-ui/core/Button';

export function HomePagination(){
    const [currentPage, setCurrentPage] = React.useState(1);

    let contents = [
        {id: 1, title: '[이불같은 포근함] 올겨울 아우터는 홈워머하세요ㅣ집, 캠핑,', fundingPer: 61,},
        {id: 2, title: '양가죽 자켓+항공점퍼ㅣ역대급 퀄리티 기본템 2벌을 한번', fundingPer: 42,},
        {id: 3, title: '[짜지 마세요] 치약의 혁신 5배 적게 쓰는 프리미엄 가루 치약', fundingPer: 34,},
        {id: 4, title: '반평생 걷던 외길, 47년 전통 냉면 장인이 선보이는 \'진짜\' 메', fundingPer: 78,},
        {id: 5, title: '발가락 습기 대탈출! 아임 싹씨 피어싱 스포츠 삭스', fundingPer: 18,},
        {id: 6, title: 'asdfdasf', fundingPer: 56,},
        {id: 7, title: 'qewrqwerqwer', fundingPer: 22,},
        {id: 8, title: 'zxcvzcxv', fundingPer: 1024,},
        {id: 8, title: 'zxcvzcxv', fundingPer: 1024,},
        {id: 8, title: 'zxcvzcxv', fundingPer: 1024,},
        {id: 8, title: 'zxcvzcxv', fundingPer: 1024,},
        {id: 8, title: 'zxcvzcxv', fundingPer: 1024,},
        {id: 8, title: 'zxcvzcxv', fundingPer: 1024,},
        {id: 8, title: 'zxcvzcxv', fundingPer: 1024,},
        {id: 8, title: 'zxcvzcxv', fundingPer: 1024,},
        {id: 8, title: 'zxcvzcxv', fundingPer: 1024,},
        {id: 8, title: 'zxcvzcxv', fundingPer: 1024,},
        {id: 8, title: 'zxcvzcxv', fundingPer: 1024,},
    ]
    let listsPerPage = 6;

    let maxPages = Math.ceil(contents.length / listsPerPage);
    let items = [];
    let leftSide = currentPage - 2;
    if(leftSide <= 0 ) leftSide=1;
    let rightSide = currentPage + 2;
    if(rightSide>maxPages) rightSide = maxPages;

    for (let number = leftSide ; number <= rightSide; number++) {
    items.push(
      <div key={number} className={(number === currentPage ? 'round-effect active_p' : 'round-effect')} onClick={()=>{ setCurrentPage(number)}}>
        {number}
      </div>,
    );
    }

    const nextPage = () => {
        if(currentPage<maxPages){
            setCurrentPage(currentPage+1)
        }
    }

    const prevPage = () => {
        if(currentPage>1){
            setCurrentPage(currentPage-1)
        }
    }

    // Logic for displaying current todos
    const indexOfLastList = currentPage * listsPerPage;
    const indexOfFirstList = indexOfLastList - listsPerPage;
    const currentLists = contents.slice(indexOfFirstList, indexOfLastList);

    // const renderLists = currentLists.map((ele, index) => {
    //     return <div key={index} style={{position: 'flex'}}>
    //         {ele}
    //     </div>;
    // });

    // Modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => { setOpen(true); };
    const handleClose = () => { setOpen(false); };


    const paginationRender = (
        <div style={{paddingLeft: '10%', paddingRight: '10%'}}>
            <Grid container direction="column" alignItems="center">
                <Grid container direction="row" alignItems="center" style={{marginBottom: 10, paddingBottom: 5, borderBottom: '2px solid #787878'}}>
                    <Grid item xs={6} justify="flex-start">
                        <Typography variant="h4" style={{float: 'left', fontSize: 50, fontWeight: 900, fontVariant: "small-caps", color: '#404040'}}>
                            more top topic
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
                    {currentLists.map((ele) => {
                        return<Grid item lg={2} md={3} sm={4}>
                            <Card style={{marginRight: 10, border: "none", boxShadow: "none"}}>
                                <CardActionArea style={{backgroundColor: "rgb(235, 234, 229)", border: "none"}}>
                                    <CardMedia image={image} style={{height: 100}} title="Contemplative Reptile"/>
                                    <CardContent style={{paddingLeft: 0, paddingRight: 0, marginBottom: 10}}>
                                        <Typography gutterBottom variant="body2" component="h2" noWrap='True'>
                                            {ele.title}
                                        </Typography>
                                        {/*<Typography gutterBottom variant="body2" component="h6" style={{float: "left"}}>*/}
                                        {/*    name*/}
                                        {/*</Typography>*/}
                                        <Typography variant="body2" color="textSecondary" component="p" style={{float: "left", marginLeft: 5}}>
                                            <span style={{color: '#00a2a2'}}>{ele.fundingPer}%</span>  |  펀딩
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    })}
                        {/*<Grid item xs={3}>*/}
                        {/*    <div>{renderLists}</div>*/}
                        {/*</Grid>*/}
                    {/*</div>*/}
                </Grid>

            </Grid>
        </div>
    );
    return (paginationRender);
}
