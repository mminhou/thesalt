import React from "react";
import './Screen.css'
import Fullpage, {FullPageSections, FullpageSection, FullpageNavigation} from '@ap.cx/react-fullpage'
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";
import {Grid, Typography} from "@material-ui/core"
import video from '../../factory/v1.mp4'
import min from '../../factory/images/min.png'

export function Screen() {

    return (
        <Fullpage>
            <FullpageNavigation></FullpageNavigation>
            <FullPageSections>
                <FullpageSection>
                    <video className="wideScreen" autoPlay muted loop id="player">
                        <source src={video} type="video/mp4"/>
                    </video>
                    <Grid container style={{marginTop: 300, top: 0, left: 0, position: "absolute"}}>
                        <Grid item md={6} xs={2}></Grid>
                        <Grid item md={6} xs={10}>
                            <div style={{paddingRight: '15%'}}>
                                <Typography variant="h1" className="title">THE SALT</Typography>
                                <Typography variant="h3" className="subtitle" paragraph>High Quality Select Shop</Typography>
                                <Typography variant="h3" className="buttonText">
                                    <ShowMoreButton label="show more"/>
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </FullpageSection>
                <FullpageSection style={{backgroundColor: 'white', padding: '1em',}}>
                    <Grid container direction="row" justifyContent="center" alignItems="center" style={{textAlign: "center"}}>
                        <Grid item xs={12}>
                            <div style={{height: 120}}></div>
                            <Typography variant="h3" className="introduce">CREATOR</Typography>
                            <img src={min} width='280px' className="avatar"/>
                            <Typography variant="h4" className="smallCaps">minho choi</Typography>
                            <Typography variant="h5" className="smallCaps">computer science</Typography>
                            <Typography variant="h5" className="info">
                                <a href='https://github.com/mminhou/cntex'>https://github.com/mminhou/cntex</a>
                            </Typography>
                            <Typography variant="h5" className="info">exit19093@gmail.com</Typography>
                            <Typography variant="h5" className="info">010-2895-1359</Typography>
                        </Grid>
                    </Grid>
                </FullpageSection>
            </FullPageSections>
        </Fullpage>
    );
}