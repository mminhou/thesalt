import React from 'react';
import './Footer.css';
import {Divider, Grid, List, Typography, ListItem, ListItemText} from "@material-ui/core";
import {Facebook, Instagram, LinkedIn, Twitter} from "@material-ui/icons";
import {useDispatch, useSelector} from "react-redux";
import allAction from "../../modules/actions";
import {useHistory} from "react-router";

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

const Footer = () => {
    const {isLoggedIn} = useSelector(state => state.signIn);
    const dispatch = useDispatch();
    const history = useHistory();
    const singOut = () => {
        dispatch(allAction.signOut())
        history.push("/login")
    }
    const login = () => {
        history.push("/login")
    }
    return (
        <div className="site-footer">
            <Grid container style={{width: '80%', margin: "auto"}}>
                <Grid container direction="row">
                    <Grid item md={7} sm={12} xs={12}>
                        <Typography variant="h6" align="left">The Salt</Typography>
                        <Typography variant="h6" paragraph align="left">High Quality Select Shop</Typography>
                    </Grid>
                    <Grid item md={2} sm={6} xs={6}>
                        <Typography variant="h6" align="left">Quick Links</Typography>
                        <List>
                            <ListItemLink href="/home" style={{padding: 0}}><ListItemText
                                primary="Home"/></ListItemLink>
                            <ListItemLink href="/product" style={{padding: 0}}><ListItemText
                                primary="Product"/></ListItemLink>
                            <ListItemLink href="/order" style={{padding: 0}}><ListItemText
                                primary="Order"/></ListItemLink>
                            <ListItemLink onClick={isLoggedIn ? singOut : login} style={{padding: 0}}><ListItemText
                                primary={isLoggedIn ? "Logout" : "Login"}/></ListItemLink>
                        </List>
                    </Grid>

                    <Grid item md={3} sm={6} xs={6}>
                        <Typography variant="h6" align="center">Contact Us</Typography>
                        <List>
                            <ListItem button style={{padding: 0, textAlign: 'center'}}><ListItemText
                                primary="010-2895-1359"/></ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Grid>
            <Divider variant="middle" style={{
                        width: '82%',
                         margin: "auto",
                         marginTop: 20,
                         marginBottom: 20,
                         height: 1,
                         backgroundColor: '#bbb'
                     }}/>
            <Grid container style={{width: '80%', margin: "auto"}} alignItems="center" justifyContent="center">
                <Grid item xs={12}>
                    <a href="https://github.com/mminhou"><Typography variant="body1">
                        Copyright &copy; 2021 All Rights Reserved by CMM.</Typography></a>
                </Grid>
                <Grid item xs={12}>
                    <ul className="social-icons">
                        <li><a className="facebook" href="https://www.facebook.com">
                            <Facebook className="fa fa-facebook"/></a>
                        </li>
                        <li><a className="instagram" href="https://www.instagram.com">
                            <Instagram className="fa-instagram"/></a>
                        </li>
                        <li><a className="twitter" href="https://twitter.com">
                            <Twitter className="fa-twitter"/></a></li>
                        <li><a className="linkedin" href="https://kr.linkedin.com">
                            <LinkedIn className="fa-linkedin"></LinkedIn></a>
                        </li>
                    </ul>
                </Grid>
            </Grid>
        </div>
    );
};

export default Footer;