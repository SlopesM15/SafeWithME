import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../firebase";
import { Link, useHistory } from "react-router-dom";

import {
    IonButton,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonCard,
    IonCardContent,
  } from "@ionic/react";
  import './Profile.css';

function Profile() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  return (
    <IonPage>
        <IonToolbar>
        <IonButton slot="start"
         color="light"
         onClick={()=>{  history.replace("/home");}}
         >
        <ion-icon src='../assets/arrow-back-outline.svg' color="primary"></ion-icon>

        </IonButton>
        <IonTitle className="home-title">Profile</IonTitle>

      </IonToolbar>
      <IonContent>
        <div className="profile-info">
        <input
            type='text'
            className='profile-textbox'
            value={name}
            onChange={(e)=> setName(e.target.value)}
            placeholder='Fullname'
            />
            <input
            type='text'
            className='profile-textbox'
            value={name}
            onChange={(e)=> setName(e.target.value)}
            placeholder='Fullname'
            />
            <input
            type='text'
            className='profile-textbox'
            value={name}
            onChange={(e)=> setName(e.target.value)}
            placeholder='Fullname'
            />

           </div>
           <div >

           </div>
      </IonContent>
    </IonPage>
  )
}

export default Profile