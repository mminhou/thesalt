import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, List, ListItem, withStyles, Grid, SwipeableDrawer} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { BrowserRouter as Router, Link} from 'react-router-dom';

import logo from '../factory/images/flooop2.png'
import './Nav.css'

const styleSheet = {
  padding : {
    marginRight : 20,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 5,
    paddingBottom: 5,
    cursor : "pointer",
    fontVariant: 'small-caps',
    letterSpacing: 2,
    width: '100px',
    textAlign: "center",
     "&:hover": {
      border: '1px solid white',
       borderRadius: 10
    },
     "&:active": {
      border: '1px solid white',
    },
  },
  sideBarIcon : {
    padding : 0,
    color : "white",
    cursor : "pointer",
  }
}

class Nav extends Component{
  constructor(props){
    super(props);
    this.state = {drawerActivate:false, drawer:false, color: 'transparent', height: '13%', imgHeight: 80};
    this.createDrawer = this.createDrawer.bind(this);
    this.destroyDrawer = this.destroyDrawer.bind(this);
  }

  componentWillMount(){
    if(window.innerWidth <= 850){
      this.setState({drawerActivate:true});
    }

    window.addEventListener('resize',()=>{
      if(window.innerWidth <= 850){
        this.setState({drawerActivate:true});
      }
      else{
        this.setState({drawerActivate:false})
      }
    });
  }

  //Small Screens
  createDrawer(){
    return (
      <div>
        <AppBar style={{backgroundColor: 'rgb(25,25,25)'}}>
          <Toolbar>
            <Grid container direction = "row" justify = "space-between" alignItems="center">
              <MenuIcon
                className = {this.props.classes.sideBarIcon}
                onClick={()=>{this.setState({drawer:true})}} />

              <Typography color="inherit" variant = "headline">
                <img src={logo} height={50}></img>
              </Typography>
              <Typography color="inherit" variant = "headline"></Typography>
            </Grid>
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
         open={this.state.drawer}
         onClose={()=>{this.setState({drawer:false})}}
         onOpen={()=>{this.setState({drawer:true})}}>

           <div
             tabIndex={0}
             role="button"
             onClick={()=>{this.setState({drawer:false})}}
             onKeyDown={()=>{this.setState({drawer:false})}}>

            <List className = {this.props.classes.list}>
               <ListItem key = {1} button divider> Option 1 </ListItem>
               <ListItem key = {2} button divider> Option 2 </ListItem>
               <ListItem key = {3} button divider> Option 3 </ListItem>
             </List>

         </div>
       </SwipeableDrawer>

      </div>
    );
  }

  //Larger Screens
  destroyDrawer(){
    const {classes} = this.props

    return (
      <Router>
      <AppBar style={{ WebkitTransition: 'all 0.7s ease-in-out', transition: 'all 0.7s ease-in-out',
        backgroundColor: this.state.color , height: this.state.height, boxShadow: 'none', display: 'flex',
    justifyContent: 'center', marginTop: 10}}>
        <Toolbar>
          <Typography style={{flexGrow:1}}>
            <img src={logo} height={this.state.imgHeight} style={{WebkitTransition: 'all 0.7s ease-in-out', transition: 'all 0.7s ease-in-out', verticalAlign: "middle"}}></img>
          </Typography>
          <Typography variant = "" className = {classes.padding} color="inherit">
            <Link to="/" className={classes.navLink} activeClassName="selected" >home</Link>
          </Typography>
          <Typography variant = "" className = {classes.padding} color="inherit">
            <Link to="/products" className={classes.navLink} activeClassName={classes.selected}>products</Link>
          </Typography>
          <Typography variant = "" className = {classes.padding} color="inherit">
            <Link to="/about" className={classes.navLink}>about</Link>
          </Typography>
          <Typography variant = "" className = {classes.padding} color="inherit">
            <Link to="/contact" className={classes.navLink}>contact</Link>
          </Typography>
          <Typography variant = "" className = {classes.padding} color="inherit">
            <Link to="/login" className={classes.navLink}>login</Link>
          </Typography>
        </Toolbar>
      </AppBar>
        </Router>
    )
  }

  listenScrollEvent = e => {
    if (window.scrollY > 400) {
      this.setState({color: 'rgb(25,25,25)', height: '10%', imgHeight: 70})
    } else {
      this.setState({color: 'transparent', height: '13%', imgHeight: 80})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  render(){
    return(
      <div>
        {this.state.drawerActivate ? this.createDrawer() : this.destroyDrawer()}
      </div>
    );
  }
}

Nav.propTypes = {
  classes : PropTypes.object.isRequired
};



export default withStyles(styleSheet)(Nav);