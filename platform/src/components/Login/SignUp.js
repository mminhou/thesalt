import React from 'react';
import UserService from '../../service/UserService';
import './SignIn.sass';


const SignUp = () =>{
  const service = new UserService();

  const signUpEvent = (e) =>{
    e.preventDefault();

    const signUpData = {
      userEmail: e.target.email.value,
      userPassword: e.target.password.value,
      userName: e.target.name.value
    }
    
    service.createUser(signUpData);
    /* TODO
    1) 비밀번호, 확인 일치하지 않으면 넘아가지 않기
    2) 페이지 이동(컴포넌트 unmount인지 ??)
    */
  }

  return (
    <form className='account-from' onSubmit={signUpEvent}>
      <div className='account-form-fields sign-up'>
        <input id='email' name='email' type='email' placeholder='E-mail' required/>
        <input id='password' name='password' type='password' placeholder='Password' required/>
        <input id='repeat-password' name='repeat-password' type='password' placeholder='Repeat password' required/>
        <input id='name' name='name' type='name' placeholder='Name' required/>
      </div>
      <button className='btn-submit-form' type='submit' style={{marginTop: -5}}>Sign Up</button>
    </form>
  )
}

export default SignUp;
