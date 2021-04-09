import React, { Component } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { Route } from 'react-router';
import { Redirect} from 'react-router-dom';

import "@codetrix-studio/capacitor-google-auth";
import { Plugins } from '@capacitor/core';
import { IonButton } from '@ionic/react';

const CLIENT_ID = '207671042231-kp7pcf9da83jgfaf76rdltqoe1bb1l6s.apps.googleusercontent.com';


class GoogleBtn extends Component {
   constructor(props) {
    super(props);

    this.state = {
      isLogined: false,
      accessToken: '',
      nome: '',
      cognome: '',
      img: '', 
      email:''
    };

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this); 

    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }
  // login (response) {
  //   // console.log(response)
    
  //   if(response.accessToken){
  //     this.setState(state => ({
  //       isLogined: true,
  //       accessToken: response.accessToken,
  //       nome: response.profileObj.name,
  //       email: response.profileObj.email,
  //       img: response.profileObj.imageUrl
  //     }));
  //     this.props.handleLogin({type: 'login', nome: this.state.nome, email: this.state.email, img: this.state.img, isLoggin: true});
      
      
  //   }

  // }

  async login() {
    const result = await Plugins.GoogleAuth.signIn();
    console.info('result', result);
    if (result) {
      this.props.handleLogin({type: 'login', nome: result.name, email: result.email, img: result.imageUrl, isLoggin: true});
    }
    }

  logout (response) {
    this.setState(state => ({
      isLogined: false,
      accessToken: '',
      nome: '',
      email: '',
      img: ''
    }));
    
  }

  handleLoginFailure (response) {
    alert('Failed to log in', response.error)
  }

  handleLogoutFailure (response) {
    alert('Failed to log out')
  }

  render() {
    return (
    <div>
      {/* { this.state.isLogined ?
        <GoogleLogout
          clientId={ CLIENT_ID }
          buttonText='Logout'
          onLogoutSuccess={ this.logout }
          onFailure={ this.handleLogoutFailure }
        >
        </GoogleLogout>: <GoogleLogin
          clientId={ CLIENT_ID }
          buttonText='Login'
          onSuccess={ this.login }
          onFailure={ this.handleLoginFailure }
          cookiePolicy={ 'single_host_origin' }
          responseType='code,token'
        />

      } */}
      <IonButton className="login-button" onClick={() => this.login()} expand="block" fill="solid" color="danger">
            Login with Google
      </IonButton>
    </div>
    )
  }
}

export default GoogleBtn;
