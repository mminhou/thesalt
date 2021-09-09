import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import allAction from "../../modules/actions";
import {Button, Grid, Typography} from "@material-ui/core";
import avatar from "../../factory/images/min.png";
import PersonIcon from '@material-ui/icons/Person';
import LocalMallIcon from '@material-ui/icons/LocalMall';

const Profile = () => {
    const email = useSelector(state => state.signIn.email)
    const {account, loading, error} = useSelector(state => state.account) || {
        loading: false, data: null, error: null
    };
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(allAction.getAccount(email));
    }, [dispatch]);

    return (
        <div>
            <div style={{backgroundColor: '#483D8B', height: window.innerWidth <= 850 ? 55 : 120}}></div>
            {account ? (
                <Grid container direction="row" justifyContent="center" alignItems="center" spacing={1} style={{textAlign: "center"}}>
                    <Grid item xs={12} style={{marginTop: 35, marginBottom: 50}}>
                        <img src={avatar} width="200px" className="avatar"/>
                        <Typography variant="h6">Welcome! <span
                            style={{color: '#E9967A'}}>{account.last_name} {account.first_name}</span></Typography>
                        <Typography variant="h6">Hope you will have a great shopping time with us.</Typography>
                        <br/>
                        <Typography variant="body1">{account.email}</Typography>
                    </Grid>

                    <Grid item md={3}></Grid>
                    <Grid item md={3} xs={12}>
                        <Link to={`myAccount/${account.id}`}>
                            <Button variant="outlined" color="primary" size="large" startIcon={<PersonIcon/>}
                                    style={{width: '90%', height: 100}}>
                                My Account
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <Button variant="outlined" color="primary" size="large" startIcon={<LocalMallIcon/>}
                                style={{width: '90%', height: 100}}>
                            Orders
                        </Button>
                    </Grid>
                    <Grid item md={3}></Grid>
                </Grid>
            ) : (
                <Grid container direction="row" justify="center" alignItems="center" style={{textAlign: "center"}}>
                    <div>does not exist account</div>
                </Grid>
            )}
        </div>
    )
}

export default Profile;