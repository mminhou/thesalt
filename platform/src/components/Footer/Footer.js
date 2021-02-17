import React from 'react';
import './Footer.css';
import {Divider, Grid, Icon, List, Typography} from "@material-ui/core";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Facebook, Instagram, LinkedIn, Twitter} from "@material-ui/icons";
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

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
                    <Typography variant="h6" align="left">About</Typography>
                    <Typography variant="body1" align="left" style={{marginTop: 11, marginRight: 20}} lineHeight={100}>
                        Nicole Kidman, Hugh Grant, and Donald Sutherland star in this psychological thriller about a woman whose seemingly perfect life is upended by a very public disaster. Nicole Kidman, Hugh Grant, and Donald Sutherland star in this psychological thriller about a woman whose seemingly perfect life is upended by a very public disaster.
                    </Typography>
                </Grid>

                <Grid md={2} sm={6} xs={6}>
                    <Typography variant="h6" align="left">Quick Links</Typography>
                    <List>
                        <ListItemLink href="#home" style={{padding: 0}}><ListItemText primary="Home" /></ListItemLink>
                        <ListItemLink href="#home" style={{padding: 0}}><ListItemText primary="Abuot Us" /></ListItemLink>
                        <ListItemLink href="#home" style={{padding: 0}}><ListItemText primary="Products" /></ListItemLink>
                        <ListItemLink href="#home" style={{padding: 0}}><ListItemText primary="Contact Us" /></ListItemLink>
                        <ListItemLink href="#home" style={{padding: 0}}><ListItemText primary="Login" /></ListItemLink>
                    </List>
                </Grid>

                <Grid md={3} sm={6} xs={6}>
                    <Typography variant="h6" align="left">Contact Us</Typography>
                    <List>
                        <ListItem button style={{padding: 0}}><ListItemText primary="010-0000-0000 (Choi Yeongu)" /></ListItem>
                        <ListItem button style={{padding: 0}}><ListItemText primary="010-1111-1111 (Yu Jisang)" /></ListItem>
                        <ListItem button style={{padding: 0}}><ListItemText primary="010-2222-2222 (Choi Minho)" /></ListItem>
                    </List>
                </Grid>
            </Grid>
        </Grid>
        <Divider variant="middle" style={{width: '82%', margin: "auto", marginTop: 10, height: 1, backgroundColor: '#bbb'}}/>

        <Grid container style={{width: '80%', margin: "auto"}} alignItems="center">
            <Grid item md={8}>
                <Typography variant="body1" align="left">Copyright &copy; 2021 All Rights Reserved by <a href="#">Daegimansung</a>.</Typography>
            </Grid>

            <Grid item md={3} sm={6} xs={12} alignItems="center" justify="center">
                {/*<List className="social-icons" style={{display: "inline-block"}}>*/}
                {/*    <ListItem button>*/}
                {/*        /!*<ListItemAvatar>*!/*/}
                {/*            <a className="facebook" href="#" style={{alignItems: "center"}}><Facebook className="fa fa-facebook"  style={{alignItems: "center"}}/></a>*/}
                {/*        /!*</ListItemAvatar>*!/*/}
                {/*    </ListItem>*/}
                {/*    <ListItem button><a className="dribbble" href="#"><Instagram className="fa-instagram" /></a></ListItem>*/}
                {/*    <ListItem button><a className="twitter" href="#"><Twitter className="fa-twitter" /></a></ListItem>*/}
                {/*    <ListItem button><a className="linkedin" href="#"><LinkedIn className="fa-linkedin" /></a></ListItem>*/}
                {/*</List>*/}

                <ul className="social-icons" style={{float: "right"}}>
                    <li><a className="facebook" href="#"><Facebook className="fa fa-facebook"  /></a></li>
                    <li><a className="instagram" href="#"><Instagram className="fa-instagram" /></a></li>
                    <li><a className="twitter" href="#"><Twitter className="fa-twitter" /></a></li>
                    <li><a className="linkedin" href="#"><LinkedIn className="fa-linkedin"></LinkedIn></a></li>
                </ul>
            </Grid>
        </Grid>
    </div>
   );
};

export default Footer;