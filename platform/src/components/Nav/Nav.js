import React, {Component} from 'react';
import './Nav.css'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import {signOut} from "../../modules/actions/authAction";
import {Link} from 'react-router-dom';
import {AppBar, Toolbar, Typography, List, ListItem, withStyles, Grid, SwipeableDrawer, Button, Dialog,} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import logo from '../../factory/images/theSalt.png'

const styleSheet = {
    padding: {
        marginRight: 20,
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 5,
        paddingBottom: 5,
        cursor: "pointer",
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
    sideBarIcon: {
        padding: 0,
        color: "white",
        cursor: "pointer",
    }
}

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerActivate: false, drawer: false, color: 'transparent', height: '13%', imgHeight: 80,
            isModalOpen: false, anchorEl: null, cartItem: ['a', 'b']
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
                        <Grid container direction="row" justify="space-between" alignItems="center">
                            <MenuIcon
                                className={this.props.classes.sideBarIcon}
                                onClick={() => {
                                    this.setState({drawer: true})
                                }}/>
                            <Typography color="inherit" variant="headline">
                                <img src={logo} height={50}></img>
                            </Typography>
                            <Typography color="inherit" variant="headline"></Typography>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <SwipeableDrawer
                    open={this.state.drawer}
                    onClose={() => {
                        this.setState({drawer: false})
                    }}
                    onOpen={() => {
                        this.setState({drawer: true})
                    }}>
                    <div tabIndex={0}
                         role="button"
                         onClick={() => {
                             this.setState({drawer: false})
                         }}
                         onKeyDown={() => {
                             this.setState({drawer: false})
                         }}>
                        <List className={this.props.classes.list} style={{width: 500}}>
                            <ListItem key={1} button divider><Link to="/home">HOME</Link></ListItem>
                            <ListItem key={2} button divider><Link to="/product">PRODUCT</Link></ListItem>
                            {isLoggedIn ?
                                <div>
                                    <ListItem key={3} button divider><Link to="/profile">PROFILE</Link></ListItem>
                                    <ListItem key={3} button divider><Link to="/login" onClick={signOut}>LOGOUT</Link>
                                    </ListItem>
                                </div>
                            : <ListItem key={4} button divider><Link to="/login">LOGIN</Link></ListItem>}
                        </List>

                    </div>
                </SwipeableDrawer>

            </div>
        );
    }

    //Larger Screens
    destroyDrawer() {
        const {classes} = this.props
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
                    <Typography style={{flexGrow: 1}}>
                        <a href="/">
                            <img src={logo} height={this.state.imgHeight} style={{
                                WebkitTransition: 'all 0.7s ease-in-out',
                                transition: 'all 0.7s ease-in-out',
                                verticalAlign: "middle"
                            }}></img>
                        </a>
                    </Typography>
                    <Typography variant="" className={classes.padding} color="inherit"
                                style={{display: pathname == '/' || pathname == '/login' ? 'none' : null}}>
                        <Link to="/home" className={classes.navLink} activeClassName="selected">home</Link>
                    </Typography>
                    <Typography variant="" className={classes.padding} color="inherit"
                                style={{display: pathname == '/' || pathname == '/login' ? 'none' : null}}>
                        <Link to="/product" className={classes.navLink}>product</Link>
                    </Typography>
                    <Typography variant="" className={classes.padding} color="inherit"
                                style={{display: pathname == '/' ? 'none' : null}}>
                        {isLoggedIn ?
                            (
                                <Link to="/login" className={classes.navLink} onClick={signOut}>logout</Link>
                            )
                            :
                            (<a href="/login" className={classes.navLink}>login</a>)
                        }
                    </Typography>
                    {isLoggedIn ? (
                        <Typography variant="" className={classes.padding} color="inherit"
                                    style={{display: pathname == '/' || pathname == '/login' ? 'none' : null}}>
                            <Link to="/profile" className={classes.navLink}>
                                <AccountCircleIcon className="fa-account-circle-icon"
                                                   style={{marginTop: 5}}></AccountCircleIcon>
                            </Link>
                        </Typography>) : (<div></div>)
                    }
                    <Typography className={classes.padding} color="inherit"
                                style={{display: pathname == '/' || pathname == '/login' ? 'none' : null}}>
                        <Button onClick={this.openModal} className={classes.navLink}>
                            <ShoppingCartIcon style={{color: 'white'}}/>
                        </Button>
                        <Dialog
                            open={this.state.isModalOpen}
                            onClose={this.closeModal}
                            aria-labelledby="shoppingCart"
                            aria-describedby="shoppingCart"
                        >
                            <ShoppingCart/>
                        </Dialog>
                    </Typography>
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
}

Nav.propTypes = {
    classes: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    isLoggedIn: state.signIn
});
const mapDispatchToProps = {
    signOut: signOut
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styleSheet)(Nav));