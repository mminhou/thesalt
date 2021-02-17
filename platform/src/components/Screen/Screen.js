import React, {useEffect} from "react";
import Fullpage,  {FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage'
import Grid from "@material-ui/core/Grid";
import './Screen.css'
import video from '../../factory/v1.mp4'
import ReadMoreButton from "../ReadMoreButton/ReadMoreButton";
import {  useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from "../../reducers/reducer_products";



export function Screen() {
    const dispatch = useDispatch()
    const productsArray = useSelector(state => state.productReducer.productList)
    // const productsArray = useSelector(state => state.productReducer.productList)
    const products = JSON.stringify(productsArray)
    // const products = productsArray ?? [];

    useEffect(() => {
        if (products) return;
        dispatch(fetchProducts());
    }, []);
    console.log(products)

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
                    <h1 style={{color: "white", fontSize: 80, margin: 0, float: "right"}}>CNTEX</h1>
                    <h1 style={{color: "white", fontSize: 60, margin: 0, float: "right"}}>JJANGJANG MAN</h1>
                    <h1 style={{color: "white", fontSize: 40, marginTop: 0, fontVariant: "small-caps", float: "right"}}>
                      <ReadMoreButton label="read more"/>
                    </h1>

                  </div>
                </Grid>
              </Grid>

            </FullpageSection>

            <FullpageSection style={{
            backgroundColor: 'rgb(235, 234, 229)',
            padding: '1em',}}>

                <div style={{height: 300}} ></div>




            </FullpageSection>

            <FullpageSection style={{
            backgroundColor: 'rgb(38, 107, 140)',
            padding: '1em',}}>
                <div style={{height: 600}}> sadf</div>
                asdfasdf
                <div style={{}}>
                    asdfafd
                </div>
            </FullpageSection>

          </FullPageSections>
        </Fullpage>
    );
}