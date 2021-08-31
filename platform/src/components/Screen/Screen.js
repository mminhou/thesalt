import React, {useEffect} from "react";
import Fullpage, {FullPageSections, FullpageSection, FullpageNavigation} from '@ap.cx/react-fullpage'
import Grid from "@material-ui/core/Grid";
import './Screen.css'
import video from '../../factory/v1.mp4'
import min from '../../factory/images/min.png'
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";
import {Typography} from "@material-ui/core";

export function Screen() {
    return (
        <Fullpage>
            <FullpageNavigation></FullpageNavigation>
            <FullPageSections>
                <FullpageSection>
                    <video className="wideScreen" autoPlay muted loop id="player"
                           style={{filter: 'brightness(30%)', position: "relative"}}>
                        <source src={video} type="video/mp4"/>
                    </video>

                    <Grid container style={{marginTop: 300, top: 0, left: 0, position: "absolute"}}>
                        <Grid item xs={6}></Grid>
                        <Grid item xs={6}>
                            <div style={{paddingRight: '15%'}}>
                                <h1 style={{color: "white", fontSize: 80, margin: 0, float: "right"}}>THE SALT</h1>
                                <h1 style={{color: "white", fontSize: 40, margin: 0, float: "right"}}>High Quality
                                    Select Shop</h1>
                                <h1 style={{
                                    color: "white",
                                    fontSize: 40,
                                    marginTop: 0,
                                    marginBottom: 0,
                                    fontVariant: "small-caps",
                                    float: "right"
                                }}>
                                    <ShowMoreButton label="show more"/>
                                </h1>
                            </div>
                        </Grid>
                    </Grid>

                </FullpageSection>

                <FullpageSection style={{
                    backgroundColor: 'white',
                    padding: '1em',
                }}>
                    <Grid container direction="row" justify="center" alignItems="center" style={{textAlign: "center"}}>
                        <Grid item xs={12} style={{}}>
                            <div style={{height: 120}}></div>
                            <Typography variant="h4" style={{fontWeight: 900, marginBottom: '2%'}}>CREATOR</Typography>
                            <img src={min} width='25%' style={{borderRadius: '50%'}}/>
                            <Typography variant="h4" style={{fontVariant: 'small-caps'}}>minho
                                choi</Typography>
                            <Typography variant="h5" style={{fontVariant: 'small-caps'}}>computer
                                science</Typography>
                            <Typography variant="h5" style={{fontSize: 15, letterSpacing: 1, marginTop: 7, marginBottom: 10}}><a href='https://github.com/mminhou/cntex'>https://github.com/mminhou/cntex</a></Typography>
                            <Typography variant="h5" style={{fontSize: 15, letterSpacing: 1, marginTop: 7, marginBottom: 10}}>exit19093@gmail.com</Typography>
                            <Typography variant="h5" style={{fontSize: 15, letterSpacing: 1}}>010-2895-1359</Typography>
                        </Grid>

                    </Grid>

                </FullpageSection>

            </FullPageSections>
        </Fullpage>
    );
}