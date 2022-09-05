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
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../firebase";
import { Link, useHistory } from "react-router-dom";
import { person, settings } from "ionicons/icons";

const Home: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (!user) {
      history.replace("/login");
    }
  }, [user, loading]);

  return (
    <IonPage >
      <IonToolbar>
        <IonButton slot="start"
         color="light"
         onClick={()=>{  history.replace("/profile");}}
         >
          <IonIcon slot="icon-only" icon={person} color='primary'/>
        </IonButton>
        <IonTitle className="home-title">Home</IonTitle>
        <IonButton slot="end"
        color="light"
        onClick={()=>{  history.replace("/settings");}}
        >
          <IonIcon slot="icon-only" icon={settings} color='primary'/>
        </IonButton>
      </IonToolbar>

      <IonContent className="home">
        <IonCard className="home-card">
          <IonCardContent>

          <div className="home-thumbprint">
            <img src="/assets/fingerprint.png" alt='fingerprint'></img>
            <div className="pulsating-circle"></div>
          </div>

          </IonCardContent>
        </IonCard>

        {/* <button onClick={()=> logout()}>
  Logout
</button> */}
      </IonContent>
    </IonPage>
  );
};

export default Home;
