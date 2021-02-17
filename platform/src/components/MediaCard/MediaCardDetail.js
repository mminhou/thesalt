import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import introduce from "../../factory/images/introduce.jpg";
import {Grid} from "@material-ui/core";


const useStyles = makeStyles({

});

export default function MediaCardDetail() {
  // const classes = useStyles();

  return (
      <div style={{height: 2000, backgroundColor: 'rgb(235, 234, 229)'}}>
          <img src={introduce} width="100%" height="15%" style={{filter: 'brightness(60%) blur(3px)',}}></img>
          <Grid container
                direction="row"
                justify="center"
                alignItems="center" style={{marginTop: 30, textAlign: "center"}}>
                  <Grid item xs={4}>
                      <h1>ITEM</h1>
                  </Grid>
                  <Grid item xs={4}>
                      <h1>UITE</h1>
                  </Grid>
          </Grid>


      </div>
  );
}
