import React, { Component, useContext, useState } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { Route, useHistory } from 'react-router';
import { Redirect} from 'react-router-dom';

import "@codetrix-studio/capacitor-google-auth";
import { Plugins } from '@capacitor/core';
import { IonButton, IonLoading } from '@ionic/react';
import { AppContext, userInterface } from './use-reducer-context';

const CLIENT_ID = '207671042231-kp7pcf9da83jgfaf76rdltqoe1bb1l6s.apps.googleusercontent.com';


const GoogleBtn: React.FC = () => {

  const [busy, setBusy] = useState<boolean>(false);
  const { state, dispatch } = useContext(AppContext);
  const history = useHistory();

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

  async function login() {
    setBusy(true);
    const result = await Plugins.GoogleAuth.signIn();
    setBusy(false);
    console.info('result', result);
    if (result) {
      dispatch({type: 'login', nome: result.name, email: result.email, img: result.imageUrl, isLoggin: true});
      history.push("/home");
    }
    }


  // function  handleLoginFailure (response: any) {
  //   alert('Failed to log in', response.error)
  // }

  // function handleLogoutFailure (response :any) {
  //   alert('Failed to log out')
  // }


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
      <IonLoading message="Attendi..." duration={0} isOpen={busy}/>
      <IonButton className="login-button" onClick={() => login()} expand="block" fill="solid" color="danger">
            Login with Google
      </IonButton>
    </div>
    )
  
}

export default GoogleBtn;