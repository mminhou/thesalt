import React, {useState, useEffect} from 'react';
import {Grid, Typography} from "@material-ui/core";
import {persistConfig} from "../../modules/reducers";
import allAction from "../../modules/actions";
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
            {account ? (
                <Grid container direction="row" justify="center" alignItems="center" style={{textAlign: "center"}}>
                    <Grid item xs={12} style={{marginTop: 20}}>
                        <img src={avatar} width='15%' style={{borderRadius: '50%'}}/>
                        <Typography variant="h6">{account.email}</Typography>
                        <Typography variant="h6">{account.id}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        정보수정하기
                    </Grid>
                    <Grid item xs={4}>
                        장바구니
                    </Grid>
                    <Grid item xs={4}>
                        주문목록
                    </Grid>
                    {/*<Grid item xs={12} style={{marginTop: 50}}>*/}
                    {/*    <img src={avatar} width='25%' style={{borderRadius: '50%'}}/>*/}

                    {/*</Grid>*/}
                </Grid>
            ) : (
                <div>does not exist account</div>
            )}
        </div>
    )
}

export default Profile;