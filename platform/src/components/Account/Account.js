import React from 'react';
import {useForm} from "react-hook-form";
import {Button, Grid, TextField} from "@material-ui/core";
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
            <div style={{backgroundColor: '#483D8B', height: window.innerWidth <= 850 ? 55 : 120}}></div>
            {account ?
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container direction="column" alignItems="center"
                          style={{textAlign: "center", paddingTop: 30}}>
                        <Grid item md={5} xs={10} container>
                            <Grid item xs={12}>
                                <TextField name="email"
                                           defaultValue={account.email}
                                           label="Email" margin="normal"
                                           disabled = {true}
                                           {...register('email')}
                                           fullWidth/>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField name="last_name"
                                           defaultValue={account.last_name}
                                           label="Last Name"
                                           margin="normal"
                                           {...register('last_name')}
                                           fullWidth/>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField name="first_name"
                                           defaultValue={account.first_name}
                                           label="First Name"
                                           margin="normal"
                                           {...register('first_name')}
                                           fullWidth/>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField name="city"
                                           defaultValue={account.city}
                                           label="City"
                                           margin="normal"
                                           {...register('city')}
                                           fullWidth/>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField name="zip_code"
                                           defaultValue={account.zip_code}
                                           label="Zip code"
                                           margin="normal"
                                           {...register('zip_code')}
                                           fullWidth/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField name="address1"
                                           defaultValue={account.address1}
                                           label="Address Line 1"
                                           margin="normal"
                                           {...register('address1')}
                                           fullWidth/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField name="address2"
                                           defaultValue={account.address2}
                                           label="Address Line 2(Optional)"
                                           margin="normal"
                                           {...register('address2')}
                                           fullWidth/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField name="contact_num"
                                           defaultValue={account.contact_num}
                                           label="Contact Number"
                                           margin="normal"
                                           {...register('contact_num')}
                                           fullWidth/>
                            </Grid>
                            <Grid item xs={12} style={{marginTop: 30}}>
                                <Button type="submit" color="primary" fullWidth variant="contained" size="large">
                                    SUBMIT
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </form> : <div>no user info</div>}
        </div>
    )
}

export default Account;