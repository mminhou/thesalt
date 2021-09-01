import React, {useState, useEffect} from 'react';
import {persistConfig} from "../../modules/reducers";
import {Grid, Typography} from "@material-ui/core";
import avatar from "../../factory/images/avatar.jpg";

const Profile = () => {
    const [account, setAccount] = useState("")
    useEffect(() => {
        persistConfig.storage.getItem("account").then(res => {
            if (res && !account) {
                setAccount(JSON.parse(res))
            };
        });
        persistConfig.storage.getItem("token").then(res2 => {
            // console.log(JSON.parse(res2))
        });
    })

    return (
        <div>
            <div style={{backgroundColor: '#483D8B', height: 120}}></div>
            { account ? (
                <Grid container direction="row" justify="center" alignItems="center" style={{textAlign: "center"}}>
                    <Grid item xs={12} style={{marginTop: 35}}>
                        <img src={avatar} width="15%" className="avatar"/>
                        <Typography variant="h6">Welcome!</Typography>
                        <Typography variant="h6">Hope you will have a great time working with us</Typography>
                        <br/>
                        <Typography variant="body1">{account.email}</Typography>
                    </Grid>
                </Grid>
            ) : (
                <div>does not exist account</div>
            )}
        </div>
    )
}

export default Profile;