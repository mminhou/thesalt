import React from "react";
import './SignIn.sass';
import {useDispatch, useSelector} from "react-redux";
import {signIn, signOut} from "../../modules/actions/authAction";
import {useHistory} from "react-router-dom";

const SignIn = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { isLoggedIn } = useSelector(state => state.signIn)
    console.log(isLoggedIn)

    const signInEvent = (e) => {
        e.preventDefault();
        const signInData = {
            email: e.target.email.value,
            password: e.target.password.value
        };
        dispatch(signIn(signInData));
        history.push('/');

        // service.fetchUserByEmailANDPassword(signInData)
        /* TODO
        1) 세션 또는 쿠키 관리
        2) 페이지 이동(컴포넌트 unmount인지 ??)
        */
    }

    // signOut test
    // const signOutEvent = (e) => {
    //     dispatch(signOut());
    //     history.push('/login');
    // }

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