import React from 'react';
import './Footer.css';
import {Divider, Grid, Icon, List, Typography} from "@material-ui/core";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Facebook, Instagram, LinkedIn, Twitter} from "@material-ui/icons";

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const Footer = () => {
    return (
        // <footer>
    <div class="site-footer">
        <Grid container style={{width: '80%', margin: "auto"}}>
            <Grid container direction="row">
                <Grid md={7} sm={12}>
                    <Typography variant="h6" align="left">The Salt</Typography>
                    <Typography variant="h6" align="left">High Quality Select Shop</Typography>
                </Grid>

                <Grid md={2} sm={6} xs={6}>
                    <Typography variant="h6" align="left">Quick Links</Typography>
                    <List>
                        <ListItemLink href="/home" style={{padding: 0}}><ListItemText primary="Home" /></ListItemLink>
                        <ListItemLink href="/product" style={{padding: 0}}><ListItemText primary="Products" /></ListItemLink>
                        {/*<ListItemLink href="/login" style={{padding: 0}}><ListItemText primary="Login" /></ListItemLink>*/}
                    </List>
                </Grid>

                <Grid md={3} sm={6} xs={6}>
                    <Typography variant="h6" align="right">Contact Us</Typography>
                    <List>
                        <ListItem button style={{padding: 0, textAlign: 'right'}}><ListItemText primary="010-2895-1359"/></ListItem>
                    </List>
                </Grid>
            </Grid>
        </Grid>
        <Divider variant="middle" style={{width: '82%', margin: "auto", marginTop: 10, height: 1, backgroundColor: '#bbb'}}/>

        <Grid container style={{width: '80%', margin: "auto"}} alignItems="center">
            <Grid item md={8}>
                <Typography variant="body1" align="left">Copyright &copy; 2021 All Rights Reserved by <a href="#">CMM</a>.</Typography>
            </Grid>

            <Grid item md={4} sm={6} xs={12} alignItems="center" justify="center">
                <ul className="social-icons">
                    <li><a className="facebook" href="https://www.facebook.com"><Facebook className="fa fa-facebook" style={{height: '1.5rem !important'}}  /></a></li>
                    <li><a className="instagram" href="https://www.instagram.com"><Instagram className="fa-instagram" /></a></li>
                    <li><a className="twitter" href="https://twitter.com"><Twitter className="fa-twitter" /></a></li>
                    <li><a className="linkedin" href="https://kr.linkedin.com"><LinkedIn className="fa-linkedin"></LinkedIn></a></li>
                </ul>
            </Grid>
        </Grid>
    </div>
   );
};

export default Footer;