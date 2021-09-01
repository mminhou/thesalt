import React, {useState} from 'react';
import './SignIn.sass';
import loginWrapper from '../../factory/images/loginWrapper_v2.jpg'
import {Grid, makeStyles} from '@material-ui/core';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Forget from './Forget';

const Login = () => {
    const classes = useStyles();
    const [mode, setMode] = useState(0);
    return (
        <Grid className={classes.root} container direction='column' alignItems="center" justify="center">
            <div className='container'>
                <header>
                    {mode === 0 ? (<span>Sign in to your account</span>) :
                        mode === 1 ? (<span>Create an account</span>) :
                            (<span>Reset your password</span>)}
                </header>
                <ul className='options' style={{marginBottom: '20px', listStyle: 'none'}}>
                    <li className={mode === 0 ? 'active' : ''} onClick={() => setMode(0)}>로그인</li>
                    <li className={mode === 1 ? 'active' : ''} onClick={() => setMode(1)}>회원가입</li>
                    <li className={mode === 2 ? 'active' : ''} onClick={() => setMode(2)}>Forgot</li>
                </ul>
                {mode === 0 ? <SignIn/> :
                    mode === 1 ? <SignUp/> :
                        <Forget/>}
                <footer>
                    <a href='https://github.com/mminhou/cntex' target='_blank'>Copyright © 2021 All Rights Reserved by
                        CMM</a>
                </footer>
            </div>
        </Grid>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(${loginWrapper})`,
        height: '100vh'
    }
}))

export default Login;