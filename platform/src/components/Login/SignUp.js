import React from 'react';
import './SignIn.sass';

const SignUp = () =>{

  const signUpEvent = (e) =>{
    e.preventDefault();

    const signUpData = {
      email: e.target.email.value,
      password: e.target.password.value,
      username: e.target.name.value
    }
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
