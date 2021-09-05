import React, {useState, useEffect} from 'react';
import {persistConfig} from "../../modules/reducers";
import {useForm} from "react-hook-form";
import {Button, FormControl, Grid, Input, InputLabel, TextField} from "@material-ui/core";

const Account = () => {
    const [account, setAccount] = useState(null);
    const {register, handleSubmit, reset, errors} = useForm();
    useEffect(() => {
        persistConfig.storage.getItem("account").then(res => {
            if (res && !account) {
                setAccount(JSON.parse(res))
            }
            ;
        });
    })
    const handleChange = (e) => {
        setAccount({
            ...account,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = (data, e) => {

        console.log(account)
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
                                           disabled="true"
                                           inputRef={register}
                                           fullWidth/>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField name="last_name"
                                           value={account.last_name}
                                           onChange={handleChange}
                                           defaultValue={account.last_name}
                                           label="Last Name"
                                           margin="normal"
                                           inputRef={register}
                                           fullWidth/>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField name="fitst_name"
                                           value={account.first_name}
                                           onChange={handleChange}
                                           defaultValue={account.first_name}
                                           label="Fitst Name"
                                           margin="normal"
                                           inputRef={register}
                                           fullWidth/>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField name="city"
                                           value={account.city}
                                           onChange={handleChange}
                                           defaultValue={account.city}
                                           label="City"
                                           margin="normal"
                                           inputRef={register}
                                           fullWidth/>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField name="zip_code"
                                           value={account.zip_code}
                                           onChange={handleChange}
                                           defaultValue={account.zip_code}
                                           label="Zip code"
                                           margin="normal"
                                           inputRef={register}
                                           fullWidth/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField name="address1"
                                           value={account.address1}
                                           onChange={handleChange}
                                           defaultValue={account.address1}
                                           label="Address Line 1"
                                           margin="normal"
                                           inputRef={register}
                                           fullWidth/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField name="address2"
                                           value={account.address2}
                                           onChange={handleChange}
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