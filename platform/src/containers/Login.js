import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {GoogleLogin} from 'react-google-login';

class  Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
           id: '',
           name:'',
            logged: false,
            onLogin: this.onLogin,
            onLogout: this.onLogout
           //provider:'', google or kakako
        }
    }
    onLogin = () => {
        this.setState({
            logged: true
        });
    }
    onLogout = () => {
        this.setState({
            logged: false
        });
    }
    responseGoogle = (responseGoogle) => {
        this.setState({
            id: responseGoogle.googleId,
            name: responseGoogle.profileObj.name
        });
        console.log(responseGoogle);
    }

    responseFail = (responseGoogle) => {
        console.log(responseGoogle);
    }
    render(){
    return(
        <GoogleLogin
            clientId="275494848627-916h902osmm2sgmg21kpl0a8lpjech79.apps.googleusercontent.com"
            buttonText="LOGIN"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    );
    }
}
  //document.getElementById('googleButton')

export default Login;