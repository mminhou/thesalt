import React, {useEffect} from "react";
import Fullpage,  {FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage'
import Grid from "@material-ui/core/Grid";
import './Screen.css'
import video from '../../factory/v1.mp4'
import ReadMoreButton from "../ReadMoreButton/ReadMoreButton";

export function Screen() {
    return (
        <Fullpage>
          <FullpageNavigation></FullpageNavigation>
          <FullPageSections>
            <FullpageSection>
              <video className="wideScreen" autoPlay muted loop id="player" style={{filter: 'brightness(30%)', position: "relative"}}>
                <source src={video} type="video/mp4"/>
              </video>

              <Grid container style={{marginTop: 300, top: 0, left: 0, position: "absolute"}}>
                <Grid item xs={6}></Grid>
                <Grid item xs={6}>
                  <div style={{paddingRight: '15%'}}>
                    <h1 style={{color: "white", fontSize: 80, margin: 0, float: "right"}}>THE SALT</h1>
                    <h1 style={{color: "white", fontSize: 40, margin: 0, float: "right"}}>High Quality Select Shop</h1>
                    <h1 style={{color: "white", fontSize: 40, marginTop: 0, marginBottom: 0, fontVariant: "small-caps", float: "right"}}>
                      <ReadMoreButton label="read more"/>
                    </h1>
                  </div>
                </Grid>
              </Grid>

            </FullpageSection>

            <FullpageSection style={{
            backgroundColor: 'white',
            padding: '1em',}}>

                <div style={{height: 300}} ></div>




            </FullpageSection>

            <FullpageSection style={{
            backgroundColor: 'white',
            padding: '1em',}}>
                <div style={{height: 600}}> sadf</div>
                asdfasdf
                <div style={{}}>
                    asdfafd
                </div>
asd
            </FullpageSection>

          </FullPageSections>
        </Fullpage>
    );
}