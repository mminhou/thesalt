import React, {useState, useEffect} from 'react';
import {persistConfig} from "../../modules/reducers";
import {Button, Grid, Typography} from "@material-ui/core";
import avatar from "../../factory/images/avatar.jpg";
import {BuildTwoTone} from "@material-ui/icons";
import {Link} from "react-router-dom";

const Profile = () => {
    const [account, setAccount] = useState("")

    useEffect(() => {
        persistConfig.storage.getItem("account").then(res => {
            if (res && !account) {
                setAccount(JSON.parse(res))
            }
            ;
        });
    })

    return (
        <div>
            <div style={{backgroundColor: '#483D8B', height: 120}}></div>
            {account ? (
                <Grid container direction="row" justify="center" alignItems="center" style={{textAlign: "center"}}>
                    <Grid item xs={12} style={{marginTop: 35}}>
                        <img src={avatar} width="15%" className="avatar"/>
                        <Typography variant="h6">Welcome! {account.fitst_name}</Typography>
                        <Typography variant="h6">Hope you will have a great shopping time with us</Typography>
                        <br/>
                        <Typography variant="body1">{account.email}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Link to='/myAccount'><Button>내정보 수정하기</Button></Link>
                    </Grid>
                    <Grid item xs={6}>
                        주문 조회
                    </Grid>
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