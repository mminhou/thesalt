import React, {useEffect} from "react";
import './SignIn.sass';
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {signIn, signOut} from "../../modules/actions/authAction";

const SignIn = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const {isLoggedIn} = useSelector(state => state.signIn)

    const signInEvent = (e) => {
        e.preventDefault();
        const signInData = {
            email: e.target.email.value,
            password: e.target.password.value
        };
        dispatch(signIn(signInData));
    }
    useEffect(() => {
        if (isLoggedIn) {
            history.push('/');
        }
    })
    // signOut test
    const signOutEvent = (e) => {
        dispatch(signOut());
        history.push('/login');
    }

    return (
        <form className='account-from' onSubmit={signInEvent}>
            {/*{isLoggedIn? <p>true</p> : <p>false</p>}*/}
            {/*<button onClick={signOutEvent}>logout</button>*/}
            <div className='account-form-fields sign-in'>
                <input id='email' name='email' type='email' placeholder='E-mail' required/>
                <input id='password' name='password' type='password' placeholder='Password' required/>
            </div>
            <button className='btn-submit-form' type='submit' style={{marginTop: -5}}>Sign in</button>
        </form>
    )
}

export default SignIn;