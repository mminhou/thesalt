import React, {useRef} from 'react';
import './SignIn.sass';
import {useForm} from "react-hook-form";
import allAction from "../../modules/actions";
import {Grid, TextField} from "@material-ui/core";
import {useDispatch} from "react-redux";

const SignUp = () => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const password = useRef({});
    password.current = watch("password", "");
    const dispatch = useDispatch()

    const onSubmit = (data, e) => {
        dispatch(allAction.signUp(data));
    };

    return (
        <form className='account-form' onSubmit={handleSubmit(onSubmit)}>
            <Grid container direction="row" spacing={1} className='account-form-fields sign-up'>
                <Grid item xs={12}>
                    <TextField
                        id="email" name="email" type="email"
                        label="Email(example@gmail.com) *"
                        variant="filled"
                        InputProps={{style: {backgroundColor: 'whitesmoke'}}}
                        fullWidth
                        {...register("email", {
                            required: true,
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Entered value does not match email format"
                            }
                        })}
                        error={errors.email ? true : false}
                        helperText={errors.email && <span role="alert">{errors.password.message}</span>}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="password" name="password" type="password"
                        label="Password *"
                        variant="filled"
                        InputProps={{style: {backgroundColor: 'whitesmoke'}}}
                        fullWidth
                        {...register("password", {
                            required: true,
                            minLength: {
                                value: 8,
                                message: "Password must have at least 8 characters"
                            }
                        })}
                        error = {errors.password ? true: false}
                        helperText={errors.password && <span role="alert">{errors.password.message}</span>}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="password_repeat" name="password_repeat" type="password"
                        label="Password repeat"
                        variant="filled"
                        InputProps={{style: {backgroundColor: 'whitesmoke'}}}
                        fullWidth
                        {...register("password_repeat", {
                              validate: value =>
                               value === password.current || "The passwords do not match"
                        })}
                        error = {errors.password_repeat ? true: false}
                        helperText={errors.password_repeat && <span role="alert">{errors.password_repeat.message}</span>}
                    />
                </Grid>
                <Grid item xs={12}>
                    <button className='btn-submit-form' type='submit'>Sign Up</button>
                </Grid>
            </Grid>
        </form>
    )
}

export default SignUp;
