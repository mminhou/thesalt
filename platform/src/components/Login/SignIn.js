import React, {useEffect} from "react";
import './SignIn.sass';
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {signIn, signOut} from "../../modules/actions/authAction";
import {Grid, TextField} from "@material-ui/core";
import {useForm} from "react-hook-form";

const SignIn = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const {isLoggedIn} = useSelector(state => state.signIn)
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        dispatch(signIn(data));
    };

    useEffect(() => {
        if (isLoggedIn) {
            history.push('/');
        }
    })

    return (
        <form className='account-form' onSubmit={handleSubmit(onSubmit)}>
            <Grid container direction="row" spacing={1} className='account-form-fields sign-in'>
                <Grid item xs={12}>
                     <TextField
                        id="email" name="email" type="email"
                        label="E-mail"
                        variant="filled"
                        InputProps={{style: {backgroundColor: 'whitesmoke'}}}
                        fullWidth
                        required
                        {...register('email')}
                     />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="password" name="password" type="password"
                        label="Password"
                        variant="filled"
                        InputProps={{style: {backgroundColor: 'whitesmoke'}}}
                        fullWidth
                        required
                        {...register('password')}
                     />
                </Grid>
                <Grid item xs={12}>
                    <button className='btn-submit-form' type='submit'>Sign in</button>
                </Grid>
            </Grid>

        </form>
    )
}

export default SignIn;