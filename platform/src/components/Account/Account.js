import React, {useState, useEffect} from 'react';
import {persistConfig} from "../../modules/reducers";
import {useForm} from "react-hook-form";
import {Button, FormControl, Grid, Input, InputLabel, TextField} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import allAction from "../../modules/actions";
import {useHistory} from "react-router-dom";

const Account = () => {
    const {account, loading, error} = useSelector(state => state.account)|| {
        loading: false, data: null, error: null};
    const {register, handleSubmit, reset, errors} = useForm();
    const dispatch = useDispatch()
    const history = useHistory();

    const onSubmit = (data, e) => {
        data['email'] = account['email']
        data['id'] = account['id']
        dispatch(allAction.updateAccount(data));
        history.push('/home')
    };
    
    return (
        <div>
            <div style={{backgroundColor: '#483D8B', height: 120}}></div>
            {account ?
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container direction="column" alignItems="center"
                          style={{textAlign: "center", paddingTop: 30}}>
                        <Grid item xs={4} container>
                            <Grid item xs={12}>
                                <TextField name="email"
                                           defaultValue={account.email}
                                           label="Email" margin="normal"
                                           disabled = {true}
                                           inputRef={register}
                                           fullWidth/>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField name="last_name"
                                           // onChange={handleChange}
                                           defaultValue={account.last_name}
                                           label="Last Name"
                                           margin="normal"
                                           inputRef={register}
                                           fullWidth/>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField name="first_name"
                                           // onChange={handleChange}
                                           defaultValue={account.first_name}
                                           label="First Name"
                                           margin="normal"
                                           inputRef={register}
                                           fullWidth/>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField name="city"
                                           // onChange={handleChange}
                                           defaultValue={account.city}
                                           label="City"
                                           margin="normal"
                                           inputRef={register}
                                           fullWidth/>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField name="zip_code"
                                           // value={account.zip_code}
                                           // onChange={handleChange}
                                           defaultValue={account.zip_code}
                                           label="Zip code"
                                           margin="normal"
                                           inputRef={register}
                                           fullWidth/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField name="address1"
                                           // value={account.address1}
                                           // onChange={handleChange}
                                           defaultValue={account.address1}
                                           label="Address Line 1"
                                           margin="normal"
                                           inputRef={register}
                                           fullWidth/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField name="address2"
                                           // value={account.address2}
                                           // onChange={handleChange}
                                           defaultValue={account.address2}
                                           label="Address Line 2(Optional)"
                                           margin="normal"
                                           inputRef={register}
                                           fullWidth/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField name="contact_num"
                                           defaultValue={account.contact_num}
                                           label="Contact Number"
                                           margin="normal"
                                           inputRef={register}
                                           fullWidth/>
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="submit" color="primary" fullWidth>SUBMIT</Button>
                            </Grid>
                        </Grid>

                    </Grid>
                </form> : <div>no user info</div>}
        </div>
    )
}


export default Account;