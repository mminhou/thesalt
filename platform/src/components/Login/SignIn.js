import React from "react";
import './SignIn.sass';
import {useDispatch} from "react-redux";
import { signIn } from "../../modules/actions/authAction";


const SignIn = () => {
    const dispatch = useDispatch();


    const signInEvent=(e)=>{
        e.preventDefault();
        const signInData = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        // console.log(signInData.email);
        // console.log(signInData.userPassword);
        dispatch(signIn(signInData))
        // service.fetchUserByEmailANDPassword(signInData)
        /* TODO
        1) 세션 또는 쿠키 관리
        2) 페이지 이동(컴포넌트 unmount인지 ??)
        */
    }

    return (
        <form className='account-from' onSubmit={signInEvent}>
            <div className='account-form-fields sign-in'>
                <input id='email' name='email' type='email' placeholder='E-mail' required/>
                <input id='password' name='password' type='password' placeholder='Password' required/>
            </div>
            <button className='btn-submit-form' type='submit' style={{marginTop: -5}}>Sign in</button>
        </form>
    )
}

export default SignIn;