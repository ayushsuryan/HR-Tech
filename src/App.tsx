import React, { useEffect } from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import { 
  IonApp, 
  IonRouterOutlet, 
  setupIonicReact, 
  IonTabs, 
  IonTabBar, 
  IonTabButton, 
  IonIcon, 
  IonLabel 
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { 
  barChart, 
  gift, 
  heart, 
  ribbon, 
  chatbubbles 
} from 'ionicons/icons';
import { AppContextProvider } from './utils/AppContext';
import DashboardPage from './pages/DashboardPage';
import BenefitsPage from './pages/BenefitsPage';
import WellnessPage from './pages/WellnessPage';
import RewardsPage from './pages/RewardsPage';
import ConnectPage from './pages/ConnectPage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/custom.css';

setupIonicReact();

// This separate component handles the tab navigation
const TabsWrapper: React.FC = () => {
  const location = useLocation();
  
  // Dynamically determine the active tab based on the current route
  const getTabFromPath = () => {
    const path = location.pathname.split('/')[1];
    return path || 'dashboard';
  };

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/dashboard">
          <DashboardPage />
        </Route>
        <Route exact path="/benefits">
          <BenefitsPage />
        </Route>
        <Route exact path="/wellness">
          <WellnessPage />
        </Route>
        <Route exact path="/rewards">
          <RewardsPage />
        </Route>
        <Route exact path="/connect">
          <ConnectPage />
        </Route>
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>
      </IonRouterOutlet>
      
      <IonTabBar slot="bottom">
        <IonTabButton tab="dashboard" href="/dashboard" selected={getTabFromPath() === 'dashboard'}>
          <IonIcon icon={barChart} />
          <IonLabel>Dashboard</IonLabel>
        </IonTabButton>
        
        <IonTabButton tab="benefits" href="/benefits" selected={getTabFromPath() === 'benefits'}>
          <IonIcon icon={gift} />
          <IonLabel>Benefits</IonLabel>
        </IonTabButton>
        
        <IonTabButton tab="wellness" href="/wellness" selected={getTabFromPath() === 'wellness'}>
          <IonIcon icon={heart} />
          <IonLabel>Wellness</IonLabel>
        </IonTabButton>
        
        <IonTabButton tab="rewards" href="/rewards" selected={getTabFromPath() === 'rewards'}>
          <IonIcon icon={ribbon} />
          <IonLabel>Rewards</IonLabel>
        </IonTabButton>
        
        <IonTabButton tab="connect" href="/connect" selected={getTabFromPath() === 'connect'}>
          <IonIcon icon={chatbubbles} />
          <IonLabel>Connect</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <IonApp>
        <IonReactRouter>
          <TabsWrapper />
        </IonReactRouter>
      </IonApp>
    </AppContextProvider>
  );
};

export default App;