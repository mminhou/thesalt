import React, {Component} from 'react';
import './Nav.css'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {signOut} from "../../modules/actions/authAction";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import {AppBar, Toolbar, Typography, List, ListItem, Grid, SwipeableDrawer, Button, Dialog,} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CloseIcon from '@material-ui/icons/Close';
import logo from '../../factory/images/theSalt.png'

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerActivate: false, drawer: false, color: 'transparent', height: '13%', imgHeight: 80,
            isModalOpen: false, anchorEl: null
        };
        this.createDrawer = this.createDrawer.bind(this);
        this.destroyDrawer = this.destroyDrawer.bind(this);
    }

    componentWillMount() {
        if (window.innerWidth <= 850) {
            this.setState({drawerActivate: true});
        }
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 850) {
                this.setState({drawerActivate: true});
            } else {
                this.setState({drawerActivate: false})
            }
        });
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    listenScrollEvent = e => {
        if (window.scrollY > 80) {
            this.setState({color: 'rgb(25,25,25)', height: '10%', imgHeight: 70})
        } else {
            this.setState({color: 'transparent', height: '13%', imgHeight: 80})
        }
    }

    // Modal
    openModal = () => {
        this.setState({isModalOpen: true});
    };
    closeModal = () => {
        this.setState({isModalOpen: false});
    };

    //Small Screens
    createDrawer() {
        const {isLoggedIn} = this.props.isLoggedIn
        const signOut = this.props.signOut
        return (
            <div>
                <AppBar style={{backgroundColor: 'rgb(25,25,25)'}}>
                    <Toolbar>
                        <Grid container direction="row" justifyContent="space-between" alignItems="center">
                            <MenuIcon
                                className="sideBarIcon"
                                onClick={() => {this.setState({drawer: true})}}/>
                            <div color="inherit">
                                <Link to='/'>
                                    <img src={logo} height={50}></img>
                                </Link>
                            </div>
                            <div color="inherit"></div>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <SwipeableDrawer open={this.state.drawer}
                                 onClose={() => {this.setState({drawer: false})}}
                                 onOpen={() => {this.setState({drawer: true})}}>
                    <div tabIndex={0} role="button"
                         onClick={() => {this.setState({drawer: false})}}
                         onKeyDown={() => {this.setState({drawer: false})}}>
                        <List style={{width: 500}}>
                            <Link to="/home"><ListItem key={1} button divider>HOME</ListItem></Link>
                            <Link to="/product"><ListItem key={2} button divider>PRODUCT</ListItem></Link>
                            {isLoggedIn ?
                                <div>
                                    <Link to="/profile"><ListItem key={3} button divider>PROFILE</ListItem></Link>
                                    <Link to="/login" onClick={signOut}><ListItem key={3} button divider>LOGOUT
                                    </ListItem></Link>
                                </div>
                                : <Link to="/login"><ListItem key={4} button divider>LOGIN</ListItem></Link>}
                            <Link to="/order"><ListItem key={2} button divider>ORDER</ListItem></Link>
                            <ListItem key={5} button divider><CloseIcon fontSize="small"/></ListItem>
                        </List>
                    </div>
                </SwipeableDrawer>
            </div>
        );
    }

    //Larger Screens
    destroyDrawer() {
        const pathname = window.location.pathname
        const {isLoggedIn} = this.props.isLoggedIn
        const signOut = this.props.signOut

        return (
            <AppBar style={{
                WebkitTransition: 'all 0.5s ease-in-out', transition: 'all 0.5s ease-in-out',
                backgroundColor: this.state.color, height: this.state.height, boxShadow: 'none', display: 'flex',
                justifyContent: 'center', marginTop: 10
            }}>
                <Toolbar>
                    <div style={{flexGrow: 1}}>
                        <Link to="/" onClick={() => {window.location.href="/"}}>
                            <img src={logo} height={this.state.imgHeight} style={{
                                WebkitTransition: 'all 0.7s ease-in-out',
                                transition: 'all 0.7s ease-in-out',
                                verticalAlign: "middle"
                            }}/>
                        </Link>
                    </div>
                    <Typography variant="body2" className="padding" color="inherit"
                                style={{display: pathname == '/' || pathname == '/login' ? 'none' : null}}>
                        <Link to="/home">home</Link>
                    </Typography>
                    <Typography variant="body2" className="padding" color="inherit"
                                style={{display: pathname == '/' || pathname == '/login' ? 'none' : null}}>
                        <Link to="/product">product</Link>
                    </Typography>
                    <Typography variant="body2" className="padding" color="inherit"
                                style={{display: pathname == '/' ? 'none' : null}}>
                        {isLoggedIn ?
                            (<Link to="/login" onClick={signOut}>logout</Link>)
                            : (<a href="/login">login</a>)}
                    </Typography>
                    {isLoggedIn ? (
                        <Typography variant="body2" className="padding" color="inherit"
                                    style={{display: pathname == '/' || pathname == '/login' ? 'none' : null}}>
                            <Link to="/profile">
                                <AccountCircleIcon className="fa-account-circle-icon"
                                                   style={{marginTop: 5}}></AccountCircleIcon>
                            </Link>
                        </Typography>) : (<div></div>)
                    }
                    <div className="padding" color="inherit"
                                style={{display: pathname == '/' || pathname == '/login' ? 'none' : null}}>
                        <Button onClick={this.openModal}>
                            <ShoppingCartIcon style={{color: 'white'}}/>
                        </Button>
                        <Dialog maxWidth="sm"
                                open={this.state.isModalOpen}
                                onClose={this.closeModal}
                                aria-labelledby="shoppingCart"
                                aria-describedby="shoppingCart">
                            <ShoppingCart onCloseModal={this.closeModal}/>
                        </Dialog>
                    </div>
                </Toolbar>
            </AppBar>
        )
    }

    render() {
        return (
            <div>
                {this.state.drawerActivate ? this.createDrawer() : this.destroyDrawer()}
            </div>
        );
    }
};

const mapStateToProps = state => ({
    isLoggedIn: state.signIn
});
const mapDispatchToProps = {
    signOut: signOut
};
export default connect(mapStateToProps, mapDispatchToProps)(Nav);